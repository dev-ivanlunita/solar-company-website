"use client";

import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "sending" | "success" | "error";

export function QuoteForm() {
  const [state, setState] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("sending");
    setMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "We could not send your request.");
      }

      setState("success");
      setMessage(payload.message || "Thanks — your request has been received.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "We could not send your request.");
    }
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate id="quote-assessment-form">
      <div className="field-grid">
        <label htmlFor="quote-name">
          <span className="field-label">Name</span>
          <input id="quote-name" name="name" autoComplete="name" required placeholder="Your full name" />
        </label>
        <label htmlFor="quote-email">
          <span className="field-label">Email</span>
          <input id="quote-email" name="email" type="email" autoComplete="email" required placeholder="you@email.com" />
        </label>
        <label htmlFor="quote-phone">
          <span className="field-label">Mobile number <span className="optional-label">Optional</span></span>
          <input id="quote-phone" name="phone" type="tel" autoComplete="tel" placeholder="09XX XXX XXXX" />
        </label>
        <label htmlFor="quote-interest">
          <span className="field-label">I&apos;m interested in</span>
          <select id="quote-interest" name="interest" defaultValue="residential">
            <option value="residential">Residential solar</option>
            <option value="commercial">Commercial solar</option>
            <option value="consultation">A solar consultation</option>
          </select>
        </label>
      </div>
      <label htmlFor="quote-message">
        <span className="field-label">Tell us a little about your property <span className="optional-label">Optional</span></span>
        <textarea
          id="quote-message"
          name="message"
          rows={4}
          placeholder="Your location, roof type, or electricity goals"
        />
      </label>
      <button id="quote-submit-btn" className="button button-dark" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending request..." : "Request a free assessment"}
      </button>
      {message ? (
        <p className={`form-message ${state}`} aria-live="polite">
          {message}
        </p>
      ) : null}
      <p className="form-note">We&apos;ll only use your details to respond to this request.</p>
    </form>
  );
}
