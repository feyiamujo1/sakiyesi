import Image from "next/image";
import RSVPForm from "@/components/RSVPForm";
import { LeafMark, LeafRound, LeafWide } from "@/components/Leaf";
import { Cowry } from "@/components/Cowry";

const bookFeatures = [
  { number: "47", label: "colouring pages", tone: "bg-mauve/15" },
  { number: "01", label: "mindful pause at a time", tone: "bg-sage/15" },
  { number: "∞", label: "ways to make it your own", tone: "bg-blue/15" }
];

const faqs = [
  {
    question: "What is Sàkíyèsí?",
    answer:
      "Sàkíyèsí is a mindful colouring experience inspired by the Yoruba invitation to “pay attention.” The book brings together botanical illustrations and quiet creative moments designed to help you slow down, relax and be present."
  },
  {
    question: "Do I need to be an artist to enjoy the book?",
    answer:
      "Not at all. The book is designed as a calming creative experience for every skill level — whether you colour for relaxation, artistic expression, stress relief or simple enjoyment."
  },
  {
    question: "How many colouring pages are included?",
    answer:
      "The current cover copy states that Sàkíyèsí includes 47 colouring pages, alongside relaxing illustrations and themes rooted in mindfulness."
  },
  {
    question: "When and where is the launch?",
    answer:
      "The final launch date, time and venue have not been supplied yet. This page is designed so those details can be dropped in as soon as they are confirmed."
  },
  {
    question: "Will copies be available at the launch?",
    answer:
      "Demo copy: signed copies, purchase information and any launch-day bundles can be added here once the final sales and distribution details are available."
  }
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-ivory text-charcoal">
      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#top"
            className="display-logo text-3xl tracking-[0.08em] text-charcoal">
            <Image
              src="/sakiyesi-logo.png"
              alt="Logo for Sàkíyèsí by Adérónkẹ́ Lawal"
              width={100}
              height={50}
              priority
              className="mx-auto w-full max-w-[365px] rounded-sm object-cover"
            />
          </a>
          <nav
            className="hidden items-center gap-7 text-sm md:flex"
            aria-label="Primary navigation">
            <a className="nav-link" href="#book">
              The book
            </a>
            <a className="nav-link" href="#author">
              Author
            </a>
            <a className="nav-link" href="#launch">
              Launch
            </a>
            <a className="nav-link" href="#faq">
              FAQs
            </a>
          </nav>
          <a
            href="#launch"
            className="rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-ivory transition hover:-translate-y-0.5 hover:bg-terracotta">
            Launch details
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative isolate min-h-[82vh] border-b border-charcoal/10">
        <div className="absolute left-[-5rem] top-24 h-56 w-56 rounded-full bg-mauve/20 blur-3xl" />
        <div className="absolute right-[-3rem] top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <LeafMark className="absolute right-[7%] top-24 hidden w-36 rotate-12 text-terracotta/30 lg:block" />
        <LeafMark className="absolute bottom-16 left-[3%] hidden w-44 -rotate-12 text-sage/35 lg:block" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-terracotta/25 bg-white/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              <span className="h-2 w-2 rounded-full bg-gold" />
              Book launch edition
            </div>
            <p className="eyebrow">A mindful colouring experience</p>
            <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold leading-[0.98] md:text-7xl lg:text-[5.5rem]">
              An invitation to{" "}
              <span className="italic text-terracotta">pay attention.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/70">
              Sàkíyèsí is a quiet, beautifully illustrated space to slow down,
              notice deeply and rediscover the simple pleasure of colouring.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#launch"
                className="rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#77402A]">
                Get launch updates
              </a>
              <a
                href="#book"
                className="rounded-full border border-charcoal/20 bg-white/30 px-6 py-3.5 text-sm font-semibold transition hover:border-charcoal/40 hover:bg-white/60">
                Discover the book
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4 text-sm text-charcoal/65">
              <span className="h-px w-10 bg-terracotta/60" />
              <span>By Dr. Adérónkẹ́ Lawal</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] border border-terracotta/20" />
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sage/25" />
            <div className="relative rounded-[2.25rem] bg-sand/25 p-5 shadow-soft md:p-8">
              <Image
                src="/sakiyesi-cover-front.png"
                alt="Front cover of Sàkíyèsí by Adérónkẹ́ Lawal"
                width={563}
                height={944}
                priority
                className="mx-auto w-full max-w-[365px] rounded-sm object-cover shadow-[0_24px_60px_rgba(41,38,34,0.22)]"
              />
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-charcoal/10 bg-ivory px-5 py-4 shadow-soft">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
                  Inside
                </p>
                <p className="mt-1 text-lg font-semibold">47 colouring pages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="eyebrow">About the book</p>
              <h2 className="section-title mt-4">
                Colour slowly. Notice more.
              </h2>
              <div className="mt-8 rounded-[2rem] border border-charcoal/10 bg-white/35 p-7 md:p-8">
                <p className="text-2xl leading-relaxed md:text-3xl">
                  “Pay attention.{" "}
                  <span className="text-terracotta">Be present.</span> Notice
                  deeply.”
                </p>
                <LeafMark className="mt-8 w-32 text-sage" />
              </div>
            </div>
            <div className="space-y-6 text-base leading-8 text-charcoal/70 md:text-lg">
              <p>
                Inspired by the Yoruba invitation to “pay attention,” Sàkíyèsí
                offers a gentle counterpoint to the pace of everyday life. Its
                floral illustrations create room to pause, relax and enjoy the
                uncomplicated pleasure of colouring.
              </p>
              <p>
                Each page encourages a quieter rhythm of mindful creativity.
                Whether you colour for relaxation, stress relief, artistic
                expression or simply for fun, the experience is designed to meet
                you exactly where you are.
              </p>
              <div className="grid gap-4 pt-5 sm:grid-cols-3">
                {bookFeatures.map(feature => (
                  <div
                    key={feature.label}
                    className={`rounded-3xl p-5 ${feature.tone}`}>
                    <p className="text-3xl font-semibold text-charcoal">
                      {feature.number}
                    </p>
                    <p className="mt-2 text-sm leading-5 text-charcoal/65">
                      {feature.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-charcoal py-8 text-ivory">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 text-center text-xs font-semibold uppercase tracking-[0.18em] md:px-8">
          <span>Mindfulness</span>
          <Cowry className="h-4 w-6 text-gold" />
          <span>Botanical illustration</span>
          <Cowry className="h-4 w-6 text-gold" />
          <span>Creative pause</span>
          <Cowry className="h-4 w-6 text-gold" />
          <span>For every skill level</span>
        </div>
      </section>

      <section id="author" className="bg-sand/20 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[2.5rem] border border-charcoal/10 bg-mauve/20">
            <div className="absolute inset-6 rounded-[2rem] border border-terracotta/20" />
            <div className="absolute inset-x-0 bottom-0 h-[54%] bg-gradient-to-t from-charcoal/20 to-transparent" />
            <div className="absolute left-1/2 top-[44%] flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-charcoal/15 bg-ivory/65 text-5xl font-semibold text-terracotta shadow-soft">
              AL
            </div>
            <LeafMark className="absolute bottom-10 right-6 w-40 text-charcoal/35" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/55">
                Author portrait placeholder
              </p>
              <p className="mt-2 text-sm text-charcoal/70">
                Replace this panel with Dr. Lawal’s preferred portrait.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Meet the author</p>
            <h2 className="section-title mt-4">Dr. Adérónkẹ́ Lawal</h2>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-sage">
              Senior Lecturer · Author · Creative
            </p>
            <div className="mt-7 space-y-5 text-base leading-8 text-charcoal/70 md:text-lg">
              <p>
                Dr. Adérónkẹ́ Lawal is an educator and scholar with a deep
                appreciation for reflective practice, thoughtful learning and
                creative expression. Sàkíyèsí extends that spirit beyond the
                classroom into an experience designed for everyday pause and
                presence.
              </p>
              <p>
                Her approach brings together culture, creativity and
                mindfulness, inviting readers to reconnect with attention as
                something we can practise — gently, deliberately and
                beautifully.
              </p>
            </div>
            <p className="mt-8 rounded-2xl border-l-4 border-terracotta bg-ivory/65 px-5 py-4 text-sm leading-6 text-charcoal/65">
              This biography is demo copy and can be replaced with Dr. Lawal’s
              official academic/profile biography.
            </p>
          </div>
        </div>
      </section>

      <section id="launch" className="relative py-24 md:py-32">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue/15 blur-3xl" />
        <LeafWide className="absolute bottom-6 left-[2%] hidden w-28 -rotate-6 text-blue/25 lg:block" />
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The book launch</p>
            <h2 className="section-title mt-4">
              An afternoon to pause, colour and celebrate.
            </h2>
            <p className="mt-6 text-base leading-7 text-charcoal/65 md:text-lg">
              Join the launch of Sàkíyèsí for a warm gathering around
              creativity, reflection and the story behind the book.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Date", "To be confirmed", "Launch date"],
              ["Time", "To be confirmed", "Arrival & programme"],
              ["Venue", "To be confirmed", "Location details"]
            ].map(([label, value, note]) => (
              <div
                key={label}
                className="rounded-[2rem] border border-charcoal/10 bg-white/40 p-7 text-center shadow-[0_12px_35px_rgba(41,38,34,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                  {label}
                </p>
                <p className="mt-3 text-2xl font-semibold">{value}</p>
                <p className="mt-2 text-sm text-charcoal/50">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <RSVPForm />
          </div>
        </div>
      </section>

      <section id="faq" className="relative bg-white/35 py-24 md:py-32">
        <LeafRound className="absolute right-[6%] top-10 hidden w-16 rotate-12 text-mauve/25 lg:block" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="section-title mt-4">
              A few things you may be wondering.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-charcoal/65">
              Launch-specific answers can be updated once sales, venue and
              programme details are final.
            </p>
          </div>
          <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group py-2"
                open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-lg font-semibold marker:hidden">
                  <span>{faq.question}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-charcoal/15 text-xl font-light transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-6 pr-12 text-sm leading-7 text-charcoal/65 md:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-charcoal py-8 text-ivory/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 text-sm md:flex-row md:items-center md:justify-between md:px-8">
          {/* <div>
            <Image
              src="/sakiyesi-logo-white.png"
              alt="Sàkíyèsí"
              width={981}
              height={437}
              className="h-8 w-auto"
            />
            <p className="mt-1 text-xs">A Mindful Colouring Experience</p>
          </div> */}
          <p className="text-xs">
            © 2026 Dr. Adérónkẹ́ Lawal.
          </p>
          <div className="flex gap-4 text-xs">
            <a className="hover:text-ivory" href="#book">
              Book
            </a>
            <a className="hover:text-ivory" href="#author">
              Author
            </a>
            <a className="hover:text-ivory" href="#faq">
              FAQs
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
