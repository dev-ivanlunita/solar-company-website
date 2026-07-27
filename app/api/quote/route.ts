import { NextResponse } from "next/server";

type QuoteRequest = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: QuoteRequest;

  try {
    payload = (await request.json()) as QuoteRequest;
  } catch {
    return NextResponse.json({ message: "Please try submitting the form again." }, { status: 400 });
  }

  if (!payload.name?.trim() || !payload.email?.trim() || !emailPattern.test(payload.email)) {
    return NextResponse.json(
      { message: "Please add your name and a valid email address." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message: "Thanks — your solar assessment request has been received.",
  });
}
