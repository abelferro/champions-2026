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

const programsOfTheYear = [
  {
    name: "Families First Program",
    monogram: "FF",
  },
  {
    name: "Little SEALS Program",
    monogram: "LS",
  },
  {
    name: "The Children's Trust Parent Club",
    monogram: "PC",
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

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter((part) => part.length > 0 && part.toLowerCase() !== "hon.")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

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

      <section className="mx-auto max-w-7xl px-6 pb-18 pt-6">
        <motion.div
          {...reveal()}
          className="champions-hero relative overflow-hidden rounded-[42px] px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom,rgba(84,110,255,0.22),transparent_35%)]" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/14 px-5 py-2 text-sm font-extrabold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md">
              <Sparkles size={16} />
              Champions for Children 2026
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-[0.92] tracking-tight text-white md:text-7xl lg:text-[5.8rem]">
              Thank You,
              <span className="block text-white">Champions!</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/88 md:text-xl">
              Celebrating the leaders, advocates, and programs moving children
              forward with heart, visibility, and lasting impact.
            </p>

            <div className="mx-auto mt-10 max-w-4xl rounded-[36px] border border-white/28 bg-white/14 p-5 shadow-[0_32px_90px_rgba(76,23,88,0.28)] backdrop-blur-md md:p-8">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/24 bg-white/14 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-white/88">
                  <Award size={16} />
                  Featured recognition
                </div>
                <div className="mt-6 flex flex-col items-center justify-center gap-4">
                  <div className="hero-portrait hero-portrait-featured">
                    <span>{getInitials(honorees[0].name)}</span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/72">
                    Portrait placeholder
                  </p>
                </div>

                <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
                  {honorees[0].name}
                </h2>
                <p className="mt-4 max-w-3xl text-2xl leading-9 text-white/90">
                  {honorees[0].honor}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {honorees.slice(1).map((person, index) => (
                <motion.div
                  key={person.name}
                  {...reveal(0.06 * (index + 1))}
                  className="rounded-[32px] border border-white/24 bg-white/14 p-5 text-left shadow-[0_22px_60px_rgba(67,31,99,0.22)] backdrop-blur-md"
                >
                  <div className="hero-portrait">
                    <span>{getInitials(person.name)}</span>
                  </div>
                  <p className="mt-5 text-2xl font-black leading-tight text-white">
                    {person.name}
                  </p>
                  <p className="mt-3 text-lg leading-8 text-white/86">
                    {person.honor}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <div className="text-center">
                <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-white/78">
                  Programs of the Year
                </p>
                <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-white/84">
                  Honoring the programs creating everyday impact for children,
                  families, and the communities around them.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {programsOfTheYear.map((program, index) => (
                  <motion.div
                    key={program.name}
                    {...reveal(0.08 * (index + 1))}
                    className="rounded-[32px] border border-white/24 bg-white/14 p-5 text-center shadow-[0_22px_60px_rgba(67,31,99,0.22)] backdrop-blur-md"
                  >
                    <div className="hero-logo">
                      <span>{program.monogram}</span>
                    </div>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                      Logo placeholder
                    </p>
                    <h3 className="mt-5 text-2xl font-black leading-tight text-white">
                      {program.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Section
        kicker="Powered by WELS"
        title="The platform behind the celebration keeps educator momentum moving."
        description="WELS Exchange Hub turns recognition into action by connecting educator data, professional growth, and workforce support in one clearer experience."
      >
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <motion.div {...reveal()} className="wels-card p-7 md:p-9">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-pink">
              WELS Exchange Hub
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-brand-ink">
              Recognition works best when the system behind it is connected.
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-600">
              WELS helps early learning leaders connect educator milestones,
              records, and next-step planning without losing the human story
              behind each achievement.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The Professional Portal supports that work by bringing career
              journey tools, documentation, and visibility into one place for
              educators, partners, and agencies.
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
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
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
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
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
        <motion.div {...reveal()} className="mx-auto max-w-4xl text-center">
          <p className="section-kicker">Connect with WELS</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-brand-ink md:text-5xl">
            Let&apos;s keep the conversation going.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Hi, I&apos;m Mike from WELS. If something in this story feels close
            to your work, fill out the form below and tell me what you&apos;re
            building, what questions you have, or what your team is trying to
            make possible for children and families. We&apos;ll meet you where
            you are.
          </p>

          <div className="mt-10 wels-card p-8 md:p-10">
            <div className="flex flex-col items-center">
              <img
                src={mikeUrl}
                alt="Mike from WELS"
                className="h-28 w-28 rounded-[28px] object-cover shadow-[0_18px_40px_rgba(93,76,172,0.18)]"
                loading="lazy"
              />
              <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.22em] text-brand-blue">
                Mike from WELS
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                I&apos;d love to hear from you. Reach out if you want to talk
                through ideas, ask a question, or start a conversation about
                how WELS can help.
              </p>
            </div>

            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              <a
                href="mailto:support@welsfoundation.org"
                className="rounded-[24px] border border-brand-blue/12 bg-white/88 p-5 transition hover:border-brand-blue"
              >
                <Mail className="text-brand-blue" size={22} />
                <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.18em] text-brand-pink">
                  Email Mike
                </p>
                <p className="mt-2 text-lg font-black text-brand-ink">
                  support@welsfoundation.org
                </p>
              </a>
              <a
                href="tel:7867350200"
                className="rounded-[24px] border border-brand-blue/12 bg-white/88 p-5 transition hover:border-brand-blue"
              >
                <Phone className="text-brand-blue" size={22} />
                <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.18em] text-brand-pink">
                  Call Mike
                </p>
                <p className="mt-2 text-lg font-black text-brand-ink">
                  786.735.0200
                </p>
              </a>
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-slate-500">
              The form is the easiest way to start. Share a few details and the
              WELS team will follow up with care.
            </p>
          </div>

          <div className="mt-8 text-left">
            <MauticContactForm
              formKicker="Start the conversation"
              formTitle="Tell Mike a little about you."
              successKicker="Thanks for reaching out"
              successTitle="Mike has your note."
              successMessage="Someone from WELS will follow up soon to continue the conversation with you."
            />
          </div>
        </motion.div>
      </section>

      <footer className="mx-auto max-w-4xl px-6 pb-16 text-center">
        <motion.div {...reveal()} className="space-y-3">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-brand-blue">
            WELS Systems Foundation
          </p>
          <p className="text-lg font-semibold text-slate-600">
            Thank you, Champions for Children 2026.
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
