"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  Building2,
  CalendarDays,
  FileText,
  GraduationCap,
  Mail,
  Phone,
  Sparkles,
  UserRound,
  Users,
  Wallet,
} from "lucide-react";
import MauticContactForm from "@/components/MauticContactForm";

const logoUrl =
  "https://tds.bwelz.org/logos/wels/digital/SVG/wels-Horizontal_Logo_RGB_Full_Color.svg?Expires=1881081483&Signature=XZYm8YQbfhBMaBRxh~YRLGK60sm39SHfjqQIx85sg8dJiw3mbBNeRt28fGyUnbgl5DEA31ZQy-lJuBOwYxLa7tFN3JaB3SxBQVHMua6WqRZqfqjAXIE9v9jWCLrV-EBwboXVOdkzk2jdk3NLcOH-kbiU~UWOd7xrUy6jnuyYFc0zZNmQl3LFx-iXo04pfYzjEJ0si68wsLfoyLs~ejS~7K0yvYTEEUYCxZn-6gTWh8FT8PWl6Ni9CJKKxqg5DZlJsOPoS4tuM7xR6E7iCsIAdowDCzfbB~w9CUeZoHTNopzkXrYQfFlmVO00290Baap32us-kz0LIotdxmSBZ-bt7A__&Key-Pair-Id=K1PPZDIOWN47R1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const coachingItemUrl = `${basePath}/images/WELS_Portal_Coaching_Item.png`;
const mikeUrl =
  "https://welsfoundation.org/wp-content/uploads/2022/03/mike-bwelz-360px.jpg";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, delay },
});

const impactStats = [
  {
    value: "197K+",
    label: "Teachers impacted",
    detail: "A growing educator network supported through WELS tools and workflows.",
  },
  {
    value: "23K+",
    label: "Sites supported",
    detail: "Programs, agencies, and partners connected through shared data systems.",
  },
  {
    value: "$109M+",
    label: "Payments processed",
    detail: "Funding and operations managed with visibility across the early learning ecosystem.",
  },
];

const honorees = [
  {
    name: "Gepsie Metellus",
    honor: "David Lawrence Jr. Champion for Children Award",
  },
  {
    name: "Twala Kelly",
    honor: "Excellence in Direct Service Award",
  },
  {
    name: "Andrea Cabrera-Elguezabal",
    honor: "Excellence in Youth Leadership Award",
  },
  {
    name: "Hon. Alexis Calatayud",
    honor: "Excellence in Advocacy Award",
  },
];

const portalHighlights = [
  {
    icon: UserRound,
    title: "My Information",
    description:
      "Keep demographics, profile details, and supporting records up to date in one secure place.",
  },
  {
    icon: Briefcase,
    title: "My Place of Employment",
    description:
      "Track work history, current role information, and the programs where educators serve.",
  },
  {
    icon: GraduationCap,
    title: "My Education",
    description:
      "Organize coursework, credentials, scholarships, and professional development milestones.",
  },
  {
    icon: FileText,
    title: "My Resume",
    description:
      "Bring documentation, resume updates, and qualification history together for faster review.",
  },
  {
    icon: CalendarDays,
    title: "Training Calendar",
    description:
      "Review upcoming learning opportunities, register for courses, and follow completion progress.",
  },
  {
    icon: BarChart3,
    title: "Career Pathways",
    description:
      "Visualize next steps, recognize growth, and connect educator progress to long-term workforce goals.",
  },
];

const leadershipSignals = [
  {
    icon: Building2,
    title: "Professional Portal",
    description:
      "A unified experience for educator records, workforce visibility, and ongoing support.",
  },
  {
    icon: Users,
    title: "Partnerships and collaboration",
    description:
      "WELS helps connect early learning professionals to the resources and systems around them.",
  },
  {
    icon: Wallet,
    title: "Recognition tied to outcomes",
    description:
      "Training, incentives, documentation, and funding history stay connected instead of living in silos.",
  },
];

function Section({
  kicker,
  title,
  description,
  children,
}: {
  kicker: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <motion.div {...reveal()} className="max-w-3xl">
        <p className="section-kicker">{kicker}</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-brand-ink md:text-5xl">
          {title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-700">{description}</p>
      </motion.div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-brand-pink/15 blur-3xl" />
        <div className="absolute right-[-5rem] top-20 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl" />
        <div className="absolute bottom-20 left-[12%] h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl" />
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="https://welsfoundation.org/" target="_blank" rel="noreferrer">
          <img
            src={logoUrl}
            alt="WELS Systems Foundation"
            className="h-12 w-auto md:h-14"
          />
        </a>
        <a
          href="#contact"
          className="wels-outline hidden text-sm font-bold text-brand-ink md:inline-flex"
        >
          Start a conversation
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-18 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div {...reveal()} className="relative z-10">
          <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[0.98] tracking-tight text-brand-ink md:text-7xl">
            Thank You,
            <span className="gradient-text block">Champions.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
            WELS helps early learning leaders turn recognition into momentum by
            connecting educator data, professional growth, and workforce
            support in one unified portal.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            This rebrand draws on the official WELS Champions experience:
            empowering early childhood educators, surfacing career journey
            tools, and spotlighting the people and programs moving children
            forward.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-ink"
            >
              Explore the portal
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/75 px-6 py-3 text-sm font-bold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
            >
              Connect with WELS
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {impactStats.map((item, index) => (
              <motion.div
                key={item.label}
                {...reveal(index * 0.08)}
                className="wels-card p-5"
              >
                <p className="text-3xl font-black text-brand-ink">{item.value}</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-brand-pink">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal(0.12)} className="relative">
          <div className="wels-card relative overflow-hidden p-6 md:p-8">
            <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-r from-brand-blue/10 via-brand-pink/18 to-brand-yellow/22" />
            <div className="relative">
              <div className="flex items-center gap-3 text-brand-blue">
                <Sparkles size={18} />
                <span className="text-sm font-bold uppercase tracking-[0.2em]">
                  Honoree spotlight
                </span>
              </div>

              <div className="mt-6 rounded-[28px] border border-white/70 bg-white/92 p-6 shadow-[0_24px_50px_rgba(50,108,252,0.12)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-pink/12 text-brand-pink">
                    <Award size={30} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-pink">
                      2026 featured recognition
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-brand-ink">
                      {honorees[0].name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {honorees[0].honor}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {honorees.slice(1).map((person) => (
                  <div
                    key={person.name}
                    className="rounded-[24px] border border-white/70 bg-white/80 p-5 shadow-[0_18px_40px_rgba(29,27,69,0.08)]"
                  >
                    <p className="text-lg font-black leading-tight text-brand-ink">
                      {person.name}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {person.honor}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Families First Program",
                  "Little SEALS Program",
                  "The Children's Trust Parent Club",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-pink/18 bg-brand-pink/8 px-4 py-2 text-sm font-semibold text-brand-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Section
        kicker="Early Learning Data Matters"
        title="Recognition works best when the system behind it is connected."
        description="WELS Exchange Hub is designed to turn fragmented workflows into one clear experience for administrators, agencies, providers, educators, and families."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {leadershipSignals.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              {...reveal(index * 0.08)}
              className="wels-card p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <Icon size={28} />
              </div>
              <h3 className="mt-5 text-2xl font-black text-brand-ink">{title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        kicker="Portal Experience"
        title="A career journey that feels visible, practical, and supported."
        description="The Champions page highlights the WELS Professional Portal as a home base for educator information, career records, learning, and next-step planning."
      >
        <div id="experience" className="grid gap-6 lg:grid-cols-2">
          <div className="wels-card p-7 md:p-9">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-pink">
              Professional Portal
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-brand-ink">
              Built to support early childhood educators from profile to pathway.
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-600">
              WELS gives educators a single place to manage experience,
              education, training, scholarships, and related workforce records.
              It also connects those records to calendars, approvals, and
              reporting so progress does not get lost between systems.
            </p>
            <div className="mt-8 overflow-hidden rounded-[28px] border border-brand-blue/10 bg-white/82 p-4 shadow-[0_20px_45px_rgba(29,27,69,0.08)]">
              <img
                src={coachingItemUrl}
                alt="WELS portal coaching item"
                className="mx-auto w-full max-w-[420px]"
                loading="lazy"
              />
            </div>
            <div className="mt-8 rounded-[28px] bg-brand-ink p-6 text-white">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-yellow">
                Why it matters
              </p>
              <p className="mt-3 text-lg leading-8 text-white/88">
                When educators can clearly see what they have completed and what
                comes next, leaders can support growth with less friction and
                more confidence.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {portalHighlights.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                {...reveal(index * 0.05)}
                className="wels-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow/25 text-brand-ink">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-xl font-black text-brand-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <motion.div
          {...reveal()}
          className="wels-card grid gap-8 overflow-hidden p-8 md:grid-cols-[0.8fr_1.2fr] md:p-10"
        >
          <div>
            <p className="section-kicker">Championing collaboration</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-brand-ink md:text-4xl">
              Partnerships and collaboration stay at the center.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              WELS supports early learning professionals by building practical
              connections between educator growth, program supports, and the
              larger systems around them.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Administrative Hub",
              "Agency Portal",
              "Provider Portal",
              "Educator Portal",
              "Family Portal",
              "Data Management",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-brand-blue/12 bg-white/92 px-5 py-4 text-sm font-bold text-brand-ink shadow-[0_14px_36px_rgba(29,27,69,0.06)]"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          {...reveal()}
          className="wels-card grid gap-8 overflow-hidden p-8 md:grid-cols-[0.95fr_1.05fr] md:p-10"
        >
          <div>
            <p className="section-kicker">Connect with WELS</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-brand-ink md:text-4xl">
              Ready to see how WELS can support your goals?
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              WELS invites partners to continue the conversation with Mike
              Cullen, Support Manager, for demonstrations, system questions, and
              next-step planning.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:support@welsfoundation.org"
                className="rounded-[24px] border border-brand-blue/12 bg-white/90 p-5 transition hover:border-brand-blue"
              >
                <Mail className="text-brand-blue" size={22} />
                <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.18em] text-brand-pink">
                  Say hi
                </p>
                <p className="mt-2 text-lg font-black text-brand-ink">
                  support@welsfoundation.org
                </p>
              </a>
              <a
                href="tel:7867350200"
                className="rounded-[24px] border border-brand-blue/12 bg-white/90 p-5 transition hover:border-brand-blue"
              >
                <Phone className="text-brand-blue" size={22} />
                <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.18em] text-brand-pink">
                  Let&apos;s talk
                </p>
                <p className="mt-2 text-lg font-black text-brand-ink">
                  786.735.0200
                </p>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/70 bg-white/92 p-6 shadow-[0_26px_60px_rgba(29,27,69,0.10)]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <img
                  src={mikeUrl}
                  alt="Mike Cullen"
                  className="h-28 w-28 rounded-[26px] object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-blue">
                    Mike Cullen
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-brand-ink">
                    Support Manager
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    A direct point of contact for scheduling demos, answering
                    product questions, and helping partners understand which
                    WELS tools fit their goals.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://welsfoundation.org/contact-us/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-ink"
                >
                  Visit contact page
                  <ArrowRight size={18} />
                </a>
                <a
                  href="https://welsfoundation.org/the-wels-system/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 px-5 py-3 text-sm font-bold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
                >
                  See the WELS system
                </a>
              </div>
            </div>

            <MauticContactForm
              formKicker="WELS contact form"
              formTitle="Tell us about your goals."
              successKicker="Thanks for reaching out"
              successTitle="We have your message."
              successMessage="A WELS team member will follow up soon about your Champions and early learning goals."
            />
          </div>
        </motion.div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 pb-16">
        <motion.div
          {...reveal()}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <span className="wels-outline bg-white/80 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-blue">
            WELS Systems Foundation
          </span>
          <span className="wels-outline bg-white/80 text-sm font-semibold text-slate-700">
            Champions for Children 2026
          </span>
        </motion.div>
      </footer>
    </main>
  );
}
