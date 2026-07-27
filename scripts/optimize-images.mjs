import { readdir, rename, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const imageDirectory = path.join(scriptDirectory, "..", "public", "images");
const replaceSources = process.argv.includes("--replace");
const supportedExtensions = new Set([".png", ".jpg", ".jpeg"]);

const files = await readdir(imageDirectory, { withFileTypes: true });
const sourceFiles = files
  .filter((file) => file.isFile() && supportedExtensions.has(path.extname(file.name).toLowerCase()))
  .map((file) => file.name);

if (sourceFiles.length === 0) {
  console.log("No PNG or JPEG files found in public/images.");
  process.exit(0);
}

let sourceBytes = 0;
let outputBytes = 0;

for (const fileName of sourceFiles) {
  const sourcePath = path.join(imageDirectory, fileName);
  const outputPath = path.join(imageDirectory, `${path.parse(fileName).name}.webp`);
  const temporaryPath = `${outputPath}.tmp`;
  const sourceInfo = await stat(sourcePath);

  await sharp(sourcePath)
    .rotate()
    .webp({ quality: 82, effort: 6, smartSubsample: true })
    .toFile(temporaryPath);

  try {
    await unlink(outputPath);
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code !== "ENOENT") {
      throw error;
    }
  }

  await rename(temporaryPath, outputPath);
  const outputInfo = await stat(outputPath);

  sourceBytes += sourceInfo.size;
  outputBytes += outputInfo.size;

  if (replaceSources) {
    await unlink(sourcePath);
  }

  const savings = Math.round((1 - outputInfo.size / sourceInfo.size) * 100);
  console.log(`${fileName} → ${path.basename(outputPath)} (${savings}% smaller)`);
}

const formatSize = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;
const totalSavings = Math.round((1 - outputBytes / sourceBytes) * 100);

console.log(`\n${formatSize(sourceBytes)} → ${formatSize(outputBytes)} (${totalSavings}% smaller total)`);
console.log(replaceSources ? "Removed the served PNG/JPEG copies after conversion." : "Kept source files after conversion.");
