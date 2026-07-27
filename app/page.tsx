import Image from "next/image";
import { QuoteForm } from "@/components/quote-form";

const solutions = [
  {
    title: "For your home",
    copy: "A rooftop system designed around your household’s needs, roof, and daily rhythm.",
    image: "/images/residential-installation.webp",
    alt: "Solar technicians installing rooftop panels on a residential property",
  },
  {
    title: "For your business",
    copy: "A clearer path to managing daytime energy use for offices, facilities, and growing operations.",
    image: "/images/commercial-solar-project.webp",
    alt: "Commercial building in the Philippines with a large rooftop solar installation",
  },
];

const process = [
  ["01", "Tell us about your roof", "Share a few details and we’ll start with the right questions."],
  ["02", "Get a thoughtful proposal", "We’ll map a system to your property and energy goals."],
  ["03", "Switch on with confidence", "Our team coordinates the installation and guides your next steps."],
];

const faqs = [
  [
    "Is my roof suitable for solar?",
    "Every property is different. We begin with the roof condition, available space, orientation, and the way you use electricity before recommending a system.",
  ],
  [
    "How long does installation take?",
    "The timeline depends on the system scope and site requirements. After an assessment, you’ll receive a clear installation plan before work begins.",
  ],
  [
    "Will solar work during a brownout?",
    "A standard grid-tied system operates differently from a battery-backed setup. We’ll explain the right configuration for the level of backup you need.",
  ],
  [
    "Can solar help manage rising energy costs?",
    "Solar can offset a portion of daytime electricity use. Your proposal should use your property and consumption information—not generic estimates—to explain the opportunity.",
  ],
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Araw Solar home">
          <span className="brand-mark" aria-hidden="true" />
          <span>araw<span>solar</span></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#solutions">Solutions</a>
          <a href="#process">How it works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button button-small" href="#quote">Get a free assessment</a>
      </header>

      <section className="hero" id="top">
        <Image
          src="/images/home-page-hero.webp"
          alt="Solar-equipped modern home surrounded by tropical greenery"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content page-width" id="main-content">
          <p className="eyebrow eyebrow-light">Solar, made for the way you live</p>
          <h1>Let your roof do more.</h1>
          <p className="hero-copy">
            Thoughtful solar systems for Philippine homes and businesses—designed around
            your property, your priorities, and what comes next.
          </p>
          <div className="hero-actions">
            <a className="button button-solar" href="#quote">Plan your solar system</a>
            <a className="text-link text-link-light" href="#solutions">Explore solutions</a>
          </div>
        </div>
        <div className="hero-bottom page-width">
          <p>From the first roof check to the final switch-on.</p>
          <a href="#process">See how it works <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="intro page-width section-space">
        <p className="eyebrow">A better place to start</p>
        <div className="intro-grid">
          <h2>Solar should feel clear from day one.</h2>
          <div>
            <p>
              Araw Solar brings a calm, practical approach to clean energy. We listen first,
              inspect carefully, and shape every recommendation around the people and places it serves.
            </p>
            <a className="text-link" href="#quote">Talk to a solar specialist</a>
          </div>
        </div>
      </section>

      <section className="solutions section-space" id="solutions">
        <div className="page-width section-heading">
          <div>
            <p className="eyebrow">Built around your needs</p>
            <h2>Solar solutions with a human point of view.</h2>
          </div>
          <p>Whether you&apos;re planning for your home or your operation, we start with the realities of your space.</p>
        </div>
        <div className="solution-grid page-width">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.title}>
              <div className="solution-image-wrap">
                <Image src={solution.image} alt={solution.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
              </div>
              <div className="solution-content">
                <p className="card-index">0{solutions.indexOf(solution) + 1}</p>
                <h3>{solution.title}</h3>
                <p>{solution.copy}</p>
                <a className="text-link" href="#quote">Start a conversation</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach page-width section-space">
        <div className="approach-image-wrap">
          <Image
            src="/images/before-and-after.webp"
            alt="Solar-equipped home at sunset in a tropical neighborhood"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="approach-content">
          <p className="eyebrow eyebrow-light">The right system starts with context</p>
          <h2>We begin with the roof, not a package.</h2>
          <p>
            Your home or workplace deserves more than a one-size-fits-all quote. Our process considers the site,
            your patterns of energy use, and the result you&apos;re working toward.
          </p>
          <a className="button button-solar" href="#quote">Book an assessment</a>
        </div>
      </section>

      <section className="process section-space" id="process">
        <div className="page-width">
          <p className="eyebrow">A simple path forward</p>
          <div className="process-heading">
            <h2>Good solar decisions are made step by step.</h2>
            <p>We keep the process visible, considered, and easy to follow.</p>
          </div>
          <div className="process-grid">
            {process.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="consultation section-space">
        <div className="page-width consultation-grid">
          <div className="consultation-copy">
            <p className="eyebrow">A plan you can understand</p>
            <h2>Clear answers, without the pressure.</h2>
            <p>
              We&apos;ll talk through your property, answer the questions that matter, and help you see the next best step with confidence.
            </p>
            <a className="text-link" href="#faq">Read common questions</a>
          </div>
          <div className="consultation-image-wrap">
            <Image
              src="/images/homeowner-consultation.webp"
              alt="Solar consultant discussing a rooftop plan with a homeowner"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="craft page-width section-space">
        <div className="craft-image-wrap">
          <Image
            src="/images/panel-detail-image.webp"
            alt="Close view of precise solar-panel mounting hardware"
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </div>
        <div className="craft-content">
          <p className="eyebrow">Care in every detail</p>
          <h2>Designed to work beautifully over time.</h2>
          <p>
            From the first site review to the finishing details, good solar is thoughtful engineering made visible.
          </p>
          <ul>
            <li>Site-led system design</li>
            <li>Professional installation planning</li>
            <li>Practical guidance after switch-on</li>
          </ul>
        </div>
      </section>

      <section className="faq section-space" id="faq">
        <div className="page-width faq-grid">
          <div>
            <p className="eyebrow">Questions, answered</p>
            <h2>Let&apos;s make solar easier to understand.</h2>
            <p>Every project begins with a conversation. These are a few good places to start.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="page-width quote-grid">
          <div>
            <p className="eyebrow eyebrow-light">Start with a conversation</p>
            <h2>Ready to see what your roof can do?</h2>
            <p>
              Share a few details and we&apos;ll help you identify a thoughtful next step for your home or business.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-main">
          <div className="footer-brand-block">
            <a className="brand" href="#top" aria-label="Araw Solar home">
              <span className="brand-mark" aria-hidden="true" />
              <span>araw<span>solar</span></span>
            </a>
            <p>Thoughtful solar systems for Philippine homes and businesses.</p>
            <a className="footer-cta" href="#quote">Start your solar plan <span aria-hidden="true">↗</span></a>
          </div>
          <div className="footer-columns">
            <div className="footer-column">
              <p className="footer-label">Explore</p>
              <a href="#solutions">Solar solutions</a>
              <a href="#process">How it works</a>
              <a href="#faq">Frequently asked questions</a>
            </div>
            <div className="footer-column">
              <p className="footer-label">Contact us</p>
              <a href="mailto:hello@yourcompany.ph">hello@yourcompany.ph</a>
              <a href="tel:+639000000000">+63 900 000 0000</a>
              <span>Your City, Philippines</span>
            </div>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <p>© {new Date().getFullYear()} Araw Solar. All rights reserved.</p>
          <div>
            <a href="#top">Privacy policy</a>
            <a href="#top">Terms of use</a>
            <a href="#top">Facebook</a>
            <a href="#top">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
