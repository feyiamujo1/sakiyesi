import Image from "next/image";
import RSVPForm from "@/components/RSVPForm";
import { LeafMark, LeafRound, LeafWide } from "@/components/Leaf";
import { Cowry } from "@/components/Cowry";
import InteriorPreview from "@/components/InteriorPreview";

const insideFeatures = [
  {
    title: "47 colouring pages",
    description:
      "Intricate illustrations designed to invite slow, creative attention."
  },
  {
    title: "Yoruba words",
    description:
      "Each theme introduces a Yoruba word, its pronunciation and English meaning."
  },
  {
    title: "Elegant illustrations",
    description:
      "Intricate patterns designed to invite slow, creative attention."
  },
  {
    title: "Meditate or journal",
    description:
      "Sit with each question in quiet reflection, or use the space provided to write your thoughts."
  },
  {
    title: "Creative freedom",
    description:
      "Colour it. Reflect on it. Journal it. There is no single right way to make the experience yours."
  }
];

const audiences = [
  {
    title: "Adults",
    description:
      "A creative way to relax, unwind and make a little room for yourself."
  },
  {
    title: "Students & young people",
    description:
      "A gentle pause away from the pace and pressure of everyday life."
  },
  {
    title: "Educators & facilitators",
    description:
      "Creative activities that can encourage reflection, conversation and connection."
  },
  {
    title: "Wellness & counselling spaces",
    description:
      "A simple, accessible creative wellbeing resource for guided or independent use."
  },
  {
    title: "Care homes & community programmes",
    description:
      "An activity that can bring people together through colour, reflection and creativity."
  }
];

const storyMoments = [
  {
    year: "The beginning",
    title: "A colouring book for Eyilore",
    copy: "Sàkíyèsí began several years ago as a simple colouring book Dr. Adérónkẹ́ Lawal created for her son, Eyilore, an art enthusiast. She loved the beauty and quietness of colouring too, and soon discovered how therapeutic the experience could be."
  },
  {
    year: "2020",
    title: "Mindfulness became more intentional",
    copy: "As her mindfulness and inner-work practice deepened, she began sharing what she was learning as an educator and coach. Creative reflection became part of her work through Thrive Easy Africa, and Sàkíyèsí became one of those resources."
  },
  {
    year: "The rediscovery",
    title: "One question changed the direction",
    copy: "For years the book existed simply as a PDF. Then a friend, Olufunke Marquis, rediscovered it while planning some “me-time”, coloured a page and asked: why isn’t this being sold as a standalone resource?"
  },
  {
    year: "Now",
    title: "From PDF to physical book",
    copy: "With encouragement and advice from friends, including author Dr. Paul Apomuche, Adérónkẹ́ decided to bring Sàkíyèsí to life as a physical hardcover book. Its Yoruba name had always held the purpose clearly: pay attention."
  }
];

// Temporary placeholders until the team supplies the 3–5 interior-page photographs.
const interiorPreviews = [
  {
    src: "/book-mockups/mockup-1.jpg",
    alt: "Sàkíyèsí interior page preview placeholder 1"
  },
  // {
  //   src: "/book-mockups/mockup-2.jpg",
  //   alt: "Sàkíyèsí interior page preview placeholder 2"
  // },
  {
    src: "/book-mockups/mockup-3.jpeg",
    alt: "Sàkíyèsí interior page preview placeholder 3"
  },
  {
    src: "/book-mockups/mockup-4.jpeg",
    alt: "Sàkíyèsí interior page preview placeholder 4"
  }
];

const faqs = [
  {
    question: "What is Sàkíyèsí?",
    answer:
      "Sàkíyèsí is a mindful colouring experience designed to support mental wellbeing through colour, creativity and reflection. Each illustrated page features a Yoruba word, its meaning and a reflective prompt to help you pause, notice and reconnect."
  },
  {
    question: "Who is Sàkíyèsí for?",
    answer:
      "Sàkíyèsí is for anyone who wants a creative way to pause, reflect and support their mental wellbeing. It can also be used by educators, coaches, counsellors, wellness practitioners, organisations and community programmes."
  },
  {
    question: "What is inside the book?",
    answer:
      "The book contains about 47 illustrated colouring pages, each paired with a Yoruba word and a reflective prompt. You can colour, meditate on the prompt, or journal your thoughts in the space provided."
  },
  {
    question: "Do I need to be good at colouring or art?",
    answer:
      "Not at all. There is no right or wrong way to use Sàkíyèsí. Choose your colours, take your time and enjoy the process. The goal is not perfection, but creating a moment to pause and pay attention."
  },
  {
    question: "How can I get or support Sàkíyèsí?",
    answer:
      "You can order an individual copy through our online store. Organisations can enquire about bulk orders, while individuals and organisations can also support the project by sponsoring copies or partnering with us to take Sàkíyèsí into more communities."
  }
];

export default function Home() {
  return (
    <main className="bg-ivory text-charcoal">
      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#top"
            className="display-logo text-3xl tracking-[0.08em] text-charcoal">
            <Image
              src="/sakiyesi-full-logo.png"
              alt="Logo for Sàkíyèsí by Adérónkẹ́ Lawal"
              width={120}
              height={55}
              priority
              className="mx-auto w-full max-w-[370px] rounded-sm object-cover"
            />
          </a>
          <nav
            className="hidden items-center gap-7 text-sm md:flex"
            aria-label="Primary navigation">
            <a className="nav-link" href="#book">
              The Book
            </a>
            <a className="nav-link" href="#story">
              The Story
            </a>
            <a className="nav-link" href="#author">
              The Author
            </a>
            <a className="nav-link" href="#launch">
              Launch
            </a>
            <a className="nav-link" href="#faq">
              FAQs
            </a>
          </nav>
          <a
            href="https://selar.com/sakiyesi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-ivory transition hover:-translate-y-0.5 hover:bg-terracotta">
            Order your copy
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative isolate min-h-[82vh] overflow-hidden border-b border-charcoal/10">
        <div className="absolute left-[-5rem] top-24 h-56 w-56 rounded-full bg-mauve/20 blur-3xl" />
        <div className="absolute right-[-3rem] top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <LeafMark className="absolute right-[7%] top-24 hidden w-36 rotate-12 text-terracotta/30 lg:block" />
        <LeafMark className="absolute bottom-16 left-[3%] hidden w-44 -rotate-12 text-sage/35 lg:block" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-terracotta/25 bg-white/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Sàkíyèsí: The Art of Paying Attention
            </div>
            <p className="eyebrow">A creative wellbeing experience through:</p>
            <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold leading-[0.98] md:text-7xl">
              COLOUR <br /> CULTURE <br />{" "}
              <span className="text-terracotta">
                REFLECTION <br /> CONNECTION
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/70">
              Sàkíyèsí is a creative colouring experience for adults, designed
              to support mental wellbeing through creativity, reflection and
              moments of calm. Rooted in the Yoruba invitation to “pay
              attention,” Sàkíyèsí offers a gentle space to slow down, notice
              deeply and reconnect with yourself.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://selar.com/sakiyesi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#77402A]">
                Order your copy
              </a>
              <a
                href="mailto:thriveeasyafrica@gmail.com"
                className="rounded-full border border-charcoal/20 bg-white/30 px-6 py-3.5 text-sm font-semibold transition hover:border-charcoal/40 hover:bg-white/60">
                Partner with Sàkíyèsí
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4 text-sm text-charcoal/65">
              <span className="h-px w-10 bg-terracotta/60" />
              <span>By Dr. Adérónkẹ́ Lawal</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] border border-terracotta/20" />
            <div className="absolute -right-10 -top-10 rounded-2xl border border-charcoal/10 bg-ivory px-5 py-4 shadow-soft">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
                Inside
              </p>
              <p className="mt-1 text-lg font-semibold">47 colouring pages</p>
            </div>
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
                <p className="mt-1 text-lg font-semibold">
                  47 opportunities to pause
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-charcoal/10 bg-charcoal py-8 text-ivory"
        aria-label="Sàkíyèsí themes">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-5 text-center text-xs font-semibold uppercase tracking-[0.18em] md:flex-row md:flex-wrap md:gap-x-10 md:gap-y-3 md:px-8">
          <span>Colour</span>
          <Cowry className="h-4 w-6 text-gold" />
          <span>Yoruba language</span>
          <Cowry className="h-4 w-6 text-gold" />
          <span>Reflection</span>
          <Cowry className="h-4 w-6 text-gold" />
          <span>Creative wellbeing</span>
        </div>
      </section>

      <section id="book" className="relative py-24 md:py-32">
        <LeafRound className="absolute left-[4%] top-28 hidden w-14 -rotate-12 text-mauve/25 lg:block" />
        <LeafMark className="absolute right-[4%] top-24 hidden w-24 rotate-12 text-sage/20 lg:block" />

        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
            <p className="eyebrow">The Book</p>
            <h2 className="section-title mx-auto mt-4">
              A mindful colouring experience made for moments of pause.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-charcoal/65 md:text-lg">
              Across 47 illustrated pages, Sàkíyèsí brings together creativity,
              Yoruba language and reflective practice to support calm,
              self-expression and mental wellbeing.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
            <div>
              <p className="eyebrow">What’s inside</p>
              <h3 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.1] md:text-4xl">
                47 invitations to pause, reflect and pay attention.
              </h3>
            </div>
            <div className="max-w-3xl text-base leading-8 text-charcoal/70 md:text-lg">
              <p>
                Each page creates a gentle space to engage with colour, language
                and thoughtful prompts at your own pace.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {insideFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className={`group rounded-[1.75rem] border border-charcoal/10 p-6 transition hover:-translate-y-1 hover:shadow-soft ${
                  index === 0
                    ? "bg-terracotta text-white"
                    : index === 1
                      ? "bg-sage/15"
                      : index === 2
                        ? "bg-mauve/15"
                        : index === 3
                          ? "bg-blue/15"
                          : "bg-sand/25"
                }`}>
                <div
                  className={`grid h-10 w-10 place-items-center rounded-full border ${index === 0 ? "border-white/25" : "border-terracotta/20"}`}>
                  <LeafRound
                    className={`w-5 ${index === 0 ? "text-white/70" : "text-terracotta/70"}`}
                  />
                </div>
                <h4 className="mt-7 text-xl font-semibold leading-tight">
                  {feature.title}
                </h4>
                <p
                  className={`mt-3 text-sm leading-6 ${index === 0 ? "text-white/75" : "text-charcoal/60"}`}>
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-24 grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:items-center lg:gap-16">
            <div>
              <p className="eyebrow">A closer look</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Pages designed to be explored, not rushed.
              </h3>
              <p className="mt-5 max-w-lg text-base leading-8 text-charcoal/65">
                Move through a glimpse of the book as you would the experience
                itself: slowly. Each page makes room for visual detail, a Yoruba
                word and a moment of reflection.
              </p>
            </div>

            <InteriorPreview previews={interiorPreviews} />
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-charcoal py-9 text-ivory">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-5 text-center md:flex-row md:px-8">
          <span className="text-sm font-medium tracking-wide text-ivory/75 md:text-base">
            Experience Sàkíyèsí
          </span>
          <Cowry className="h-5 w-8 text-gold" />
          <span className="text-sm font-medium tracking-wide text-ivory/75 md:text-base">
            Experience Mindfullness
          </span>
        </div>
      </section>

      <section id="who-its-for" className="relative bg-sand/20 py-24 md:py-32">
        <LeafWide className="absolute right-[4%] top-16 hidden w-24 rotate-12 text-sage/30 lg:block" />
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="eyebrow">Who it’s for</p>
              <h2 className="section-title mt-4">
                For anyone who needs a moment to pause.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-charcoal/65 md:text-lg">
                You don’t need to be an artist. You don’t need to know anything
                about mindfulness. You simply need a little time for yourself.
              </p>
              <p className="mt-8 inline-flex rounded-full border border-terracotta/20 bg-ivory px-5 py-3 text-sm font-semibold text-terracotta">
                You don’t need artistic skill. You just need a moment.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((audience, index) => (
                <article
                  key={audience.title}
                  className={`rounded-[1.75rem] border border-charcoal/10 p-6 md:p-7 ${
                    index === audiences.length - 1
                      ? "sm:col-span-2 bg-ivory"
                      : "bg-white/45"
                  }`}>
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta">
                      <LeafRound className="w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {audience.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-charcoal/60 md:text-base">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="relative overflow-hidden bg-charcoal py-24 text-ivory md:py-32">
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-terracotta/15 blur-3xl" />
        <div className="absolute -left-24 bottom-24 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
        <LeafMark className="absolute right-[6%] top-16 hidden w-32 rotate-12 text-gold/15 lg:block" />
        <LeafWide className="absolute bottom-16 left-[5%] hidden w-24 -rotate-12 text-sand/15 lg:block" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow !text-sand">The story behind it</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.08] md:text-5xl">
                It started with a colouring book.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-ivory/65 md:text-lg">
                What began as a personal creative gift gradually became a
                wellbeing resource — and then a physical book centred on one
                simple Yoruba invitation: pay attention.
              </p>

              <div className="relative mt-10 max-w-[440px]">
                <div className="absolute -inset-4 rotate-2 rounded-[2rem] border border-ivory/10" />
                <Image
                  src="/book-mockups/mockup-1.jpg"
                  alt="Sàkíyèsí book mockup"
                  width={1000}
                  height={1500}
                  className="relative w-full rounded-[1.75rem] object-cover shadow-[0_26px_70px_rgba(0,0,0,0.28)]"
                />
              </div>
            </div>

            <div className="relative border-l border-ivory/15 pl-8 md:pl-12">
              {storyMoments.map((moment, index) => (
                <article
                  key={moment.title}
                  className="relative pb-11 last:pb-0 md:pb-14">
                  <span className="absolute -left-[2.42rem] top-1 grid h-6 w-6 place-items-center rounded-full border border-gold/35 bg-charcoal md:-left-[3.45rem]">
                    <LeafRound className="w-3.5 text-gold" />
                  </span>
                  {index % 2 === 0 && (
                    <LeafWide className="absolute -right-1 top-1 hidden w-10 rotate-12 text-sand/15 sm:block" />
                  )}
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
                    {moment.year}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                    {moment.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-ivory/65">
                    {moment.copy}
                  </p>
                </article>
              ))}

              <div className="relative mt-7 rounded-[2rem] border border-gold/20 bg-ivory/[0.07] p-7 shadow-[0_22px_60px_rgba(0,0,0,0.12)] md:p-9">
                <LeafMark className="absolute right-6 top-5 w-16 rotate-12 text-gold/20" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  At the heart of the name
                </p>
                <p className="mt-4 max-w-xl text-3xl font-semibold md:text-4xl">
                  Sàkíyèsí means “pay attention.”
                </p>
                <ul className="mt-7 grid gap-3 text-lg text-ivory/75 sm:grid-cols-2">
                  {[
                    "A reminder to slow down.",
                    "To notice.",
                    "To create.",
                    "To reconnect."
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-sand">
                  The Art of Paying Attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="author" className="bg-sand/20 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[2.5rem] border border-charcoal/10 bg-mauve/20 bg-[url(/author-image-1.jpg)] bg-cover bg-center shadow-soft">
            <div className="absolute inset-6 rounded-[2rem] border border-terracotta/20" />
            <div className="absolute inset-x-0 bottom-0 h-[54%] bg-gradient-to-t from-charcoal/20 to-transparent" />
          </div>

          <div>
            <p className="eyebrow">Meet the author</p>
            <h2 className="section-title mt-4">Dr. Adérónkẹ́ Lawal</h2>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-sage">
              Educator · Author · Researcher · Coach · Creative
            </p>
            <div className="mt-7 space-y-5 text-base leading-8 text-charcoal/70 md:text-lg">
              <p>
                Dr. Adérónkẹ́ Lawal is an educator, researcher, author and coach
                whose work brings together technology, learning, creativity and
                wellbeing.
              </p>
              <p>
                A Senior Lecturer at Obafemi Awolowo University, she has spent
                over a decade teaching, researching and supporting people to
                learn, grow and create. Her interest in mindfulness and inner
                work deepened in 2020, eventually leading to the establishment
                of Thrive Easy Africa, a coaching and personal development
                platform.
              </p>
              <p>
                Sàkíyèsí brings many of these interests together. What began as
                a colouring book created for her son has evolved into a creative
                wellbeing resource rooted in Yoruba language and culture.
              </p>
            </div>
            <p className="mt-8 rounded-2xl border-l-4 border-terracotta bg-ivory/65 px-5 py-4 text-sm leading-6 text-charcoal/65">
              Through Sàkíyèsí, Adérónkẹ́ invites us to do something simple but
              increasingly rare: slow down, pay attention, and notice deeply.
              <br />
              <span className="font-semibold text-terracotta">
                The Art of Paying Attention.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section id="launch" className="relative py-24 md:py-32">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue/15 blur-3xl" />
        <LeafWide className="absolute bottom-8 left-[3%] hidden w-24 -rotate-6 text-blue/20 lg:block" />
        <LeafRound className="absolute right-[5%] top-28 hidden w-14 rotate-12 text-mauve/20 lg:block" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The book launch</p>
            <h2 className="section-title mx-auto mt-4 text-center">
              A morning to pause, colour and celebrate.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-charcoal/65 md:text-lg">
              Join us for the launch of Sàkíyèsí: A Mindful Colouring Experience
              — a morning of creativity, reflection, conversation and
              connection.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2.25rem] border border-charcoal/10 bg-charcoal text-ivory shadow-soft">
            <div className="grid divide-y divide-ivory/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="p-7 md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Date
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                  26 September 2026
                </p>
              </div>
              <div className="p-7 md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Time
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                  10:00 am
                </p>
              </div>
              <div className="p-7 md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Venue
                </p>
                <p className="mt-3 text-xl font-semibold leading-7">
                  Dream Centre, OAU Campus
                </p>
                <p className="mt-2 text-sm text-ivory/55">Ile-Ife, Nigeria</p>
              </div>
            </div>

            <div className="border-t border-ivory/10 bg-ivory/[0.04] p-7 md:flex md:items-center md:justify-between md:gap-8 md:p-9">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
                  Getting there
                </p>
                <p className="mt-3 text-sm leading-6 text-ivory/65 md:text-base">
                  Sen. Oluremi Tinubu’s The Dream Centre is beside Ojaja Hostel,
                  at the back of OAU Central Market.
                </p>
              </div>
              <a
                href="https://bit.ly/SakiyesiLaunch"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex shrink-0 rounded-full border border-ivory/20 px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-ivory hover:text-charcoal md:mt-0">
                Join online via Zoom
              </a>
            </div>
          </div>

          <div
            id="get-involved"
            className="mt-20 border-t border-charcoal/10 pt-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Get involved with Sàkíyèsí</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Get Sàkíyèsí for yourself. Or help put it in someone else’s
                hands.
              </h3>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-[2rem] border border-charcoal/10 bg-sand/25 p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                  For individuals
                </p>
                <h4 className="mt-4 text-2xl font-semibold">Get your copy</h4>
                <p className="mt-4 text-sm leading-7 text-charcoal/65">
                  Get Sàkíyèsí for yourself and use it as a gentle space to
                  colour, reflect and pay attention.
                </p>
                <a
                  href="https://selar.com/sakiyesi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#77402A]">
                  Order your copy
                </a>
              </article>

              <article className="rounded-[2rem] border border-charcoal/10 bg-sage/15 p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                  For organisations & supporters
                </p>
                <h4 className="mt-4 text-2xl font-semibold">
                  Bring Sàkíyèsí to others
                </h4>
                <p className="mt-4 text-sm leading-7 text-charcoal/65">
                  Bring Sàkíyèsí to your school, organisation, wellness
                  programme or community through bulk purchases, sponsored
                  copies, workshops or other partnerships.
                </p>
                <a
                  href="mailto:thriveeasyafrica@gmail.com"
                  className="mt-7 inline-flex rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold transition hover:border-charcoal/40 hover:bg-ivory">
                  Partner with Sàkíyèsí
                </a>
              </article>
            </div>

            <div className="mt-5">
              <RSVPForm />
            </div>
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

      <footer className="bg-charcoal py-10 text-ivory/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1.2fr_0.8fr] md:items-start md:px-8">
          <div className="w-full max-w-[420px]">
            <a
              href="#top"
              className="display-logo inline-block text-3xl tracking-[0.08em] text-charcoal">
              <Image
                src="/sakiyesi-full-logo-white.png"
                alt="Logo for Sàkíyèsí by Adérónkẹ́ Lawal"
                width={170}
                height={78}
                className="w-full max-w-[170px] rounded-sm object-cover"
              />
            </a>
            <p className="mt-5 text-sm leading-6 text-ivory/60">
              A creative wellbeing resource that brings together colour, Yoruba
              language and reflection to create moments of calm, connection and
              self-expression.
            </p>
          </div>

          <div className="md:justify-self-end">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Explore
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <a className="hover:text-ivory" href="#book">
                The Book
              </a>
              <a className="hover:text-ivory" href="#story">
                The Story
              </a>
              <a className="hover:text-ivory" href="#author">
                The Author
              </a>
              <a className="hover:text-ivory" href="#launch">
                Launch
              </a>
              <a className="hover:text-ivory" href="#faq">
                FAQs
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-9 flex max-w-7xl flex-col gap-2 border-t border-ivory/10 px-5 pt-6 text-xs text-ivory/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>Sàkíyèsí © 2026 Dr. Adérónkẹ́ Lawal. All rights reserved.</p>
          <p>Created by Adérónkẹ́ Lawal · Thrive Easy Africa</p>
        </div>
      </footer>
    </main>
  );
}
