"use client";

import { FormEvent, useState } from "react";

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-charcoal p-6 text-ivory shadow-soft md:p-8">
      <div className="mb-6">
        <p className="eyebrow !text-sand">Stay in the loop</p>
        <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Be first to receive launch updates.</h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-ivory/70">
          Leave your details and connect this form to your preferred email or RSVP service when the launch information is confirmed.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
        <label className="sr-only" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          required
          placeholder="Your name"
          className="h-12 rounded-full border border-ivory/15 bg-white/5 px-5 text-sm outline-none transition placeholder:text-ivory/45 focus:border-sand"
        />
        <label className="sr-only" htmlFor="email">Email address</label>
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
          className="h-12 rounded-full bg-terracotta px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#77402A]"
        >
          Join the list
        </button>
      </div>

      {submitted && (
        <p className="mt-4 text-sm text-sand" role="status">
          Thanks — this demo form is ready to be connected to your RSVP or mailing-list backend.
        </p>
      )}
    </form>
  );
}
