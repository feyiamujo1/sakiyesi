"use client";

import { FormEvent, useState } from "react";

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/mjyvjrwj",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      setError(
        "We couldn't submit your RSVP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-charcoal p-6 text-ivory shadow-soft md:p-8"
    >
      <div className="mb-6">
        <p className="eyebrow !text-sand">
          Stay in the loop
        </p>

        <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
          RSVP For The Launch
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-6 text-ivory/70">
          Leave your name and email to RSVP for the
          Sàkíyèsí book launch and receive event
          updates and joining information.
        </p>
      </div>

      {!submitted ? (
        <>
          <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
            <label className="sr-only" htmlFor="name">
              Name
            </label>

            <input
              id="name"
              name="name"
              required
              type="text"
              placeholder="Your name"
              className="h-12 rounded-full border border-ivory/15 bg-white/5 px-5 text-sm outline-none transition placeholder:text-ivory/45 focus:border-sand"
            />

            <label className="sr-only" htmlFor="email">
              Email address
            </label>

            <input
              id="email"
              name="email"
              required
              type="email"
              placeholder="Email address"
              className="h-12 rounded-full border border-ivory/15 bg-white/5 px-5 text-sm outline-none transition placeholder:text-ivory/45 focus:border-sand"
            />

            <button
              type="submit"
              disabled={loading}
              className="h-12 rounded-full bg-terracotta px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#77402A] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Submitting..."
                : "RSVP For The Launch"}
            </button>
          </div>

          {error && (
            <p
              className="mt-4 text-sm text-red-300"
              role="alert"
            >
              {error}
            </p>
          )}
        </>
      ) : (
        <div
          className="rounded-2xl border border-sand/20 bg-white/5 p-5"
          role="status"
        >
          <p className="text-lg font-semibold text-sand">
            You're on the list.
          </p>

          <p className="mt-2 text-sm leading-6 text-ivory/70">
            Thank you for your RSVP. We'll send launch
            updates and event information to your email.
          </p>
        </div>
      )}
    </form>
  );
}