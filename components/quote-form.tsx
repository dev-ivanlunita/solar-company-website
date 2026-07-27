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
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <div className="field-grid">
        <label>
          <span className="field-label">Name</span>
          <input name="name" autoComplete="name" required placeholder="Your full name" />
        </label>
        <label>
          <span className="field-label">Email</span>
          <input name="email" type="email" autoComplete="email" required placeholder="you@email.com" />
        </label>
        <label>
          <span className="field-label">Mobile number <span className="optional-label">Optional</span></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="09XX XXX XXXX" />
        </label>
        <label>
          <span className="field-label">I&apos;m interested in</span>
          <select name="interest" defaultValue="residential">
            <option value="residential">Residential solar</option>
            <option value="commercial">Commercial solar</option>
            <option value="consultation">A solar consultation</option>
          </select>
        </label>
      </div>
      <label>
        <span className="field-label">Tell us a little about your property <span className="optional-label">Optional</span></span>
        <textarea
          name="message"
          rows={4}
          placeholder="Your location, roof type, or electricity goals"
        />
      </label>
      <button className="button button-dark" type="submit" disabled={state === "sending"}>
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
