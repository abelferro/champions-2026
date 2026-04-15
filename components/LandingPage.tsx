"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  Building2,
  CalendarDays,
  Database,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Mail,
  Phone,
  UserRound,
  Users,
} from "lucide-react";
import MauticContactForm from "@/components/MauticContactForm";

const logoUrl =
  "https://tds.bwelz.org/logos/wels/digital/SVG/wels-Horizontal_Logo_RGB_Full_Color.svg?Expires=1881081483&Signature=XZYm8YQbfhBMaBRxh~YRLGK60sm39SHfjqQIx85sg8dJiw3mbBNeRt28fGyUnbgl5DEA31ZQy-lJuBOwYxLa7tFN3JaB3SxBQVHMua6WqRZqfqjAXIE9v9jWCLrV-EBwboXVOdkzk2jdk3NLcOH-kbiU~UWOd7xrUy6jnuyYFc0zZNmQl3LFx-iXo04pfYzjEJ0si68wsLfoyLs~ejS~7K0yvYTEEUYCxZn-6gTWh8FT8PWl6Ni9CJKKxqg5DZlJsOPoS4tuM7xR6E7iCsIAdowDCzfbB~w9CUeZoHTNopzkXrYQfFlmVO00290Baap32us-kz0LIotdxmSBZ-bt7A__&Key-Pair-Id=K1PPZDIOWN47R1";
const mikeUrl =
  "https://welsfoundation.org/wp-content/uploads/2022/03/mike-bwelz-360px.jpg";
const buttonGradient =
  "linear-gradient(90deg, var(--color-brand-blue, #326cfc) 0%, var(--color-brand-pink, #e44081) 50%, var(--color-brand-blue, #326cfc) 100%)";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay },
});

const cardMotion = {
  whileHover: { y: -6, scale: 1.02 },
  whileTap: { scale: 0.99 },
  transition: { duration: 0.18, ease: "easeOut" as const },
};

type IconCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const honorees = [
  {
    name: "Gepsie Metellus",
    honor: "David Lawrence Jr. Champion for Children Award",
    image: "./images/gepsie-400.png",
    href: "https://www.thechildrenstrust.org/calendar/champions-for-children/david-lawrence-jr-champion-for-children-award/",
  },
  {
    name: "Twala Kelly",
    honor: "Excellence in Direct Service Award",
    image: "./images/twala-400.png",
    href: "https://www.thechildrenstrust.org/calendar/champions-for-children/excellence-in-direct-service-award/",
  },
  {
    name: "Andrea Cabrera-Elguezabal",
    honor: "Excellence in Youth Leadership Award",
    image: "./images/andrea-400.png",
    href: "https://www.thechildrenstrust.org/calendar/champions-for-children/excellence-in-youth-leadership-award/",
  },
  {
    name: "Hon. Alexis Calatayud",
    honor: "Excellence in Advocacy Award",
    image: "./images/hon-400.png",
    href: "https://www.thechildrenstrust.org/calendar/champions-for-children/excellence-in-advocacy-award/",
  },
];

const programsOfTheYear = [
  {
    name: "Families First Program",
    href: "https://www.thechildrenstrust.org/calendar/champions-for-children/program-of-the-year-award/",
  },
  {
    name: "Little SEALS Program",
    href: "https://www.thechildrenstrust.org/calendar/champions-for-children/program-of-the-year-award/",
  },
  {
    name: "The Children's Trust Parent Club",
    href: "https://www.thechildrenstrust.org/calendar/champions-for-children/program-of-the-year-award/",
  },
];

const impactStats = [
  {
    value: "197K+",
    label: "Educators reached",
    detail: "Supported through connected workflows and shared visibility.",
  },
  {
    value: "23K+",
    label: "Sites supported",
    detail: "Agencies, providers, and partners aligned in one system.",
  },
  {
    value: "$109M+",
    label: "Payments processed",
    detail: "Funding handled with more clarity, confidence, and speed.",
  },
];

const systemBenefits = [
  "Keep educator records, milestones, and next steps in one place.",
  "Connect recognition to growth instead of leaving it in a silo.",
  "Give agencies, providers, and partners a clearer shared picture.",
  "Reduce friction between reporting, support, and workforce progress.",
];

const portalHighlights: IconCard[] = [
  {
    icon: UserRound,
    title: "My Information",
    description: "Update profile details and records in one secure place.",
  },
  {
    icon: Briefcase,
    title: "Employment",
    description: "Track roles, workplaces, and professional history quickly.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Organize coursework, credentials, and scholarships clearly.",
  },
  {
    icon: FileText,
    title: "Resume",
    description: "Bring documents and qualifications together for review.",
  },
  {
    icon: CalendarDays,
    title: "Training Calendar",
    description: "See upcoming learning and follow completion progress.",
  },
  {
    icon: BarChart3,
    title: "Career Pathways",
    description: "Visualize growth and connect today to what comes next.",
  },
];

const partnershipTiles: IconCard[] = [
  {
    icon: LayoutDashboard,
    title: "Administrative Hub",
    description: "Coordinate oversight, approvals, and daily operations.",
  },
  {
    icon: Building2,
    title: "Agency Portal",
    description: "Manage programs and reporting across regions.",
  },
  {
    icon: Briefcase,
    title: "Provider Portal",
    description: "Run your program with clearer day-to-day visibility.",
  },
  {
    icon: GraduationCap,
    title: "Educator Portal",
    description: "Track growth, learning, and career momentum.",
  },
  {
    icon: Users,
    title: "Family Portal",
    description: "Keep families connected to services and support.",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Bring records, reporting, and insight into one view.",
  },
];

function Section({
  id,
  kicker,
  title,
  description,
  children,
  centered = false,
}: {
  id?: string;
  kicker: string;
  title: string;
  description: string;
  children: ReactNode;
  centered?: boolean;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <motion.div
        {...reveal()}
        className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      >
        <p className="section-kicker">{kicker}</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-brand-ink md:text-5xl">
          {title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      </motion.div>
      <div className="mt-10 md:mt-12">{children}</div>
    </section>
  );
}

function PortraitPlaceholder({
  featured = false,
  src,
  alt,
}: {
  featured?: boolean;
  src?: string;
  alt?: string;
}) {
  return (
    <div className={`portrait-placeholder ${featured ? "portrait-placeholder-featured" : ""}`}>
      <div className="portrait-placeholder__glow" />
      {src ? (
        <img
          src={src}
          alt={alt ?? ""}
          className={`portrait-placeholder__image ${featured ? "portrait-placeholder__image--featured" : ""}`}
          loading="lazy"
        />
      ) : (
        <div aria-hidden="true" className="portrait-placeholder__shape">
          <UserRound size={featured ? 88 : 54} className="text-white/88" />
        </div>
      )}
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-brand-pink/15 blur-3xl" />
        <div className="absolute right-[-5rem] top-20 h-72 w-72 rounded-full bg-brand-yellow/16 blur-3xl" />
        <div className="absolute bottom-24 left-[12%] h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl" />
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
          className="wels-outline hidden text-sm font-semibold text-brand-ink md:inline-flex"
        >
          Start a conversation
        </a>
      </header>

      <section className="w-full px-0 pb-14 pt-0 md:mx-auto md:max-w-7xl md:px-6 md:pb-18">
        <motion.div
          {...reveal()}
          className="champions-hero relative overflow-hidden rounded-none px-6 py-10 md:rounded-[40px] md:px-10 md:py-14 lg:px-14 lg:py-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom,rgba(84,110,255,0.2),transparent_35%)]" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <a
              href="https://www.thechildrenstrust.org/calendar/champions-for-children/"
              target="_blank"
              rel="noreferrer"
              className="hero-badge-glow inline-flex justify-center rounded-full border border-white/24 bg-white/14 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] whitespace-nowrap text-white/92 backdrop-blur-md transition hover:bg-white/18 md:px-5 md:text-sm md:tracking-[0.22em]"
            >
              Champions for Children 2026
            </a>

            <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-[0.94] tracking-tight text-white md:text-7xl lg:text-[5.6rem]">
              Thank You,
              <span className="block">Champions!</span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/88 md:text-xl">
              WELS is proud to sponsor Champions for Children 2026 and celebrate
              the people and programs caring for young children and helping them
              grow.
            </p>

            <motion.article
              {...cardMotion}
              className="mx-auto mt-10 max-w-4xl rounded-[36px] border border-white/26 bg-white/14 p-6 text-center shadow-[0_34px_90px_rgba(76,23,88,0.28)] backdrop-blur-xl md:p-8"
            >
              <a
                href={honorees[0].href}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="mx-auto mt-6 max-w-[320px]">
                  <PortraitPlaceholder
                    featured
                    src={honorees[0].image}
                    alt={honorees[0].name}
                  />
                </div>
                <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
                  {honorees[0].name}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-xl leading-8 text-white/90 md:text-2xl md:leading-9">
                  {honorees[0].honor}
                </p>
              </a>
            </motion.article>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {honorees.slice(1).map((person, index) => (
                <motion.article
                  key={person.name}
                  {...reveal(index * 0.06)}
                  {...cardMotion}
                  className="rounded-[32px] border border-white/24 bg-white/14 p-6 text-center shadow-[0_24px_60px_rgba(67,31,99,0.22)] backdrop-blur-xl"
                >
                  <a href={person.href} target="_blank" rel="noreferrer" className="block">
                    <div className="mx-auto max-w-[280px]">
                      <PortraitPlaceholder src={person.image} alt={person.name} />
                    </div>
                    <h3 className="mt-5 text-3xl font-bold leading-tight text-white">
                      {person.name}
                    </h3>
                    <p className="mx-auto mt-3 max-w-[16rem] text-lg leading-8 text-white/82">
                      {person.honor}
                    </p>
                  </a>
                </motion.article>
              ))}
            </div>

            <div className="mt-10">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/76">
                  Programs of the Year
                </p>
                <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-white/82">
                  Celebrating the programs creating care, trust, and momentum
                  for children and families across the community.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {programsOfTheYear.map((program, index) => (
                  <motion.article
                    key={program.name}
                  {...reveal(0.08 * (index + 1))}
                  {...cardMotion}
                  className="rounded-[32px] border border-white/24 bg-white/14 p-6 text-center shadow-[0_24px_60px_rgba(67,31,99,0.22)] backdrop-blur-xl"
                  >
                    <a href={program.href} target="_blank" rel="noreferrer" className="block">
                      <h3 className="mt-1 text-3xl font-bold leading-tight text-white">
                        {program.name}
                      </h3>
                    </a>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="system" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.98fr_0.9fr] lg:items-start">
          <motion.div {...reveal()} className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-brand-ink md:text-5xl">
              Behind every champion is a system of support.
            </h2>
            <p className="mt-4 max-w-[34rem] text-base leading-8 text-slate-600 md:text-lg">
              WELS helps the people, programs, and systems around children stay connected and move forward with more clarity.
            </p>
          </motion.div>

          <motion.div
            {...reveal(0.08)}
            className="px-1 py-1 md:px-2"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
              What that support makes possible
            </p>

            <div className="mt-5 space-y-2.5">
              {systemBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-blue" />
                  <p className="text-base leading-7 text-slate-600">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-3">
          {impactStats.map((item, index) => {
            const cardBackgrounds = [
              "border-[rgba(50,108,252,0.2)] bg-[linear-gradient(135deg,rgba(50,108,252,0.22)_0%,rgba(104,153,255,0.12)_22%,rgba(255,255,255,0.97)_60%,rgba(255,255,255,0.99)_100%)]",
              "border-[rgba(228,64,129,0.2)] bg-[linear-gradient(135deg,rgba(228,64,129,0.22)_0%,rgba(244,132,176,0.12)_22%,rgba(255,255,255,0.97)_60%,rgba(255,255,255,0.99)_100%)]",
              "border-[rgba(255,214,0,0.28)] bg-[linear-gradient(135deg,rgba(255,214,0,0.26)_0%,rgba(255,233,114,0.14)_22%,rgba(255,255,255,0.96)_60%,rgba(255,255,255,0.99)_100%)]",
            ];

            return (
              <motion.div
                key={item.label}
                {...reveal(index * 0.05)}
                className={`rounded-[24px] border p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)] backdrop-blur-sm md:min-h-[205px] md:p-7 ${cardBackgrounds[index]}`}
              >
                <p className="text-4xl font-bold tracking-tight text-brand-ink">
                  {item.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#journey"
            className="gradient-shift-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(50,108,252,0.18)]"
            style={{ backgroundImage: buttonGradient }}
          >
            Explore the system behind the impact
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Section
        id="connected-portals"
        kicker="Connected Portals"
        title="Built for every part of the ecosystem."
        description="WELS works as the system connecting agencies, providers, educators, and families so the work around each child can move with more clarity."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {partnershipTiles.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              {...reveal(index * 0.05)}
              {...cardMotion}
              className="wels-card interactive-panel p-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-pink/10 text-brand-pink">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="journey"
        kicker="How WELS Supports Your Journey"
        title="One connected experience for educators, partners, and teams."
        description="For educators, WELS brings profile details, training, employment history, and career momentum into one clearer journey."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {portalHighlights.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              {...reveal(index * 0.05)}
              {...cardMotion}
              className="wels-card interactive-panel p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </Section>

      <section id="contact" className="w-full px-0 py-16 md:mx-auto md:max-w-5xl md:px-6 md:py-20">
        <motion.div {...reveal()} className="mx-auto max-w-4xl text-center">
          <p className="section-kicker">Start the Conversation</p>

          <div className="mt-8 wels-card flex flex-col gap-5 !rounded-b-none !rounded-t-[32px] px-6 pb-8 pt-6 text-left md:!rounded-[32px] md:flex-row md:items-center md:justify-between md:p-7">
            <div className="flex items-center gap-4">
              <img
                src={mikeUrl}
                alt="Mike from WELS"
                className="h-20 w-20 rounded-[24px] object-cover shadow-[0_18px_40px_rgba(93,76,172,0.16)]"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Mike from WELS
                </p>
                <p className="mt-2 max-w-xl text-base leading-7 text-slate-600">
                  A quick note is all it takes.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:min-w-[360px]">
              <a
                href="mailto:support@welsfoundation.org"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/14 bg-white/80 px-4 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
              >
                <Mail size={16} />
                support@welsfoundation.org
              </a>
              <a
                href="tel:7867350200"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/14 bg-white/80 px-4 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
              >
                <Phone size={16} />
                786.735.0200
              </a>
            </div>
          </div>

          <div className="mt-1 text-left md:mt-8 md:mx-auto md:max-w-2xl">
            <MauticContactForm
              formKicker=""
              formTitle="Tell us a little about you."
              successTitle="You're all set."
              successMessage="Mike from WELS will reach out soon. He usually handles support and will help with the next step."
            />
          </div>
        </motion.div>
      </section>

      <footer className="mx-auto max-w-4xl px-6 pb-16 text-center">
        <motion.div {...reveal()} className="space-y-3">
          <a
            href="https://welsfoundation.org/"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue transition hover:opacity-80"
          >
            WELS Systems Foundation
          </a>
          <p className="text-lg font-semibold text-slate-600">
            Thank you, Champions for Children 2026.
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
