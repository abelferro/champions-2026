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
  Sparkles,
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
  { name: "Families First Program" },
  { name: "Little SEALS Program" },
  { name: "The Children's Trust Parent Club" },
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
        <h2 className="mt-4 text-4xl font-black tracking-tight text-brand-ink md:text-5xl">
          {title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      </motion.div>
      <div className="mt-10 md:mt-12">{children}</div>
    </section>
  );
}

function PortraitPlaceholder({ featured = false }: { featured?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`portrait-placeholder ${featured ? "portrait-placeholder-featured" : ""}`}
    >
      <div className="portrait-placeholder__glow" />
      <div className="portrait-placeholder__shape">
        <UserRound size={featured ? 88 : 54} className="text-white/88" />
      </div>
    </div>
  );
}

function LogoPlaceholder() {
  return (
    <div aria-hidden="true" className="logo-placeholder">
      <div className="logo-placeholder__ring" />
      <div className="logo-placeholder__mark" />
      <div className="logo-placeholder__mark logo-placeholder__mark--small" />
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
          className="wels-outline hidden text-sm font-bold text-brand-ink md:inline-flex"
        >
          Start a conversation
        </a>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-4 md:pb-18">
        <motion.div
          {...reveal()}
          className="champions-hero relative overflow-hidden rounded-[40px] px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom,rgba(84,110,255,0.2),transparent_35%)]" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/24 bg-white/14 px-5 py-2 text-sm font-extrabold uppercase tracking-[0.22em] text-white/92 backdrop-blur-md">
              <Sparkles size={16} />
              Champions for Children 2026
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-[0.94] tracking-tight text-white md:text-7xl lg:text-[5.6rem]">
              Thank You,
              <span className="block">Champions!</span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/88 md:text-xl">
              Celebrating the people and programs shaping the future of early
              learning.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#honorees"
                className="gradient-shift-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-[0_18px_36px_rgba(50,108,252,0.2)]"
                style={{ backgroundImage: buttonGradient }}
              >
                Meet the honorees
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="wels-outline border-white/26 bg-white/10 text-sm font-bold text-white"
              >
                Start the conversation
              </a>
            </div>

            <motion.article
              {...cardMotion}
              className="mx-auto mt-10 max-w-4xl rounded-[36px] border border-white/26 bg-white/14 p-6 text-center shadow-[0_34px_90px_rgba(76,23,88,0.28)] backdrop-blur-xl md:p-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/22 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-white/88">
                <Award size={16} />
                Featured recognition
              </div>
              <div className="mx-auto mt-6 max-w-[320px]">
                <PortraitPlaceholder featured />
              </div>
              <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
                {honorees[0].name}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl leading-8 text-white/90 md:text-2xl md:leading-9">
                {honorees[0].honor}
              </p>
            </motion.article>
          </div>
        </motion.div>
      </section>

      <Section
        id="honorees"
        kicker="Honorees"
        title="Recognizing the people behind the progress."
        description="Three more leaders whose work keeps early learning moving forward every day."
        centered
      >
        <div className="grid gap-4 md:grid-cols-3">
          {honorees.slice(1).map((person, index) => (
            <motion.article
              key={person.name}
              {...reveal(index * 0.06)}
              {...cardMotion}
              className="wels-card interactive-panel p-6"
            >
              <div className="rounded-[28px] border border-white/70 bg-white/40 p-4">
                <PortraitPlaceholder />
              </div>
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-pink">
                Award honoree
              </p>
              <h3 className="mt-3 text-3xl font-black leading-tight text-brand-ink">
                {person.name}
              </h3>
              <p className="mt-3 text-lg leading-8 text-slate-600">
                {person.honor}
              </p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="programs"
        kicker="Programs of the Year"
        title="Community impact you can feel."
        description="Programs whose presence, trust, and care are helping children and families move forward."
        centered
      >
        <div className="grid gap-4 md:grid-cols-3">
          {programsOfTheYear.map((program, index) => (
            <motion.article
              key={program.name}
              {...reveal(index * 0.06)}
              {...cardMotion}
              className="wels-card interactive-panel p-6 text-center"
            >
              <div className="rounded-[28px] border border-white/70 bg-white/40 p-5">
                <LogoPlaceholder />
              </div>
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-blue">
                Program of the Year
              </p>
              <h3 className="mt-3 text-3xl font-black leading-tight text-brand-ink">
                {program.name}
              </h3>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="system"
        kicker="Powered by WELS"
        title="Behind every recognition, there is a system that keeps progress moving."
        description="WELS connects records, growth, and support so recognition can lead to a real next step."
      >
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...reveal()} className="wels-card p-8 md:p-9">
            <div className="space-y-4">
              {systemBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-pink" />
                  <p className="text-base leading-7 text-slate-600">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#journey"
                className="gradient-shift-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-[0_18px_36px_rgba(50,108,252,0.18)]"
                style={{ backgroundImage: buttonGradient }}
              >
                See how WELS works
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-brand-blue/16 bg-white/75 px-6 py-3 text-sm font-bold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
              >
                Talk with WELS
              </a>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {impactStats.map((item, index) => (
              <motion.div
                key={item.label}
                {...reveal(index * 0.08)}
                {...cardMotion}
                className="wels-card interactive-panel p-5"
              >
                <div className="h-1.5 w-16 rounded-full bg-[linear-gradient(90deg,#326cfc_0%,#e44081_100%)]" />
                <p className="mt-5 text-4xl font-black tracking-tight text-brand-ink">
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-brand-pink">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="journey"
        kicker="How WELS Supports Your Journey"
        title="One connected experience for educators, partners, and teams."
        description="WELS brings profile, training, workforce visibility, and shared support into one clearer journey."
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
              <h3 className="mt-4 text-xl font-black text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div {...reveal()} className="wels-card p-8 md:p-9">
            <p className="section-kicker">Connected Portals</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-brand-ink">
              Built for every part of the ecosystem.
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-600">
              WELS supports the people around each educator journey, not just
              the records inside it.
            </p>

            <div className="mt-6 rounded-[28px] border border-brand-blue/10 bg-[linear-gradient(180deg,rgba(50,108,252,0.06),rgba(228,64,129,0.04))] p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Shared visibility",
                  "Clearer next steps",
                  "Connected reporting",
                  "Less friction",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-white/80 bg-white/82 px-4 py-3 text-sm font-bold text-brand-ink"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

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
                <h3 className="mt-4 text-lg font-black text-brand-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <motion.div {...reveal()} className="mx-auto max-w-4xl text-center">
          <p className="section-kicker">Start the Conversation</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-brand-ink md:text-5xl">
            Tell us a bit about you and we&apos;ll connect you to the right next
            step.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Mike from WELS and the team will follow up with the conversation
            that best fits your goals.
          </p>

          <div className="mt-8 wels-card flex flex-col gap-5 p-6 text-left md:flex-row md:items-center md:justify-between md:p-7">
            <div className="flex items-center gap-4">
              <img
                src={mikeUrl}
                alt="Mike from WELS"
                className="h-20 w-20 rounded-[24px] object-cover shadow-[0_18px_40px_rgba(93,76,172,0.16)]"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-brand-blue">
                  Mike from WELS
                </p>
                <p className="mt-2 max-w-xl text-base leading-7 text-slate-600">
                  A quick note is enough to get started.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:min-w-[360px]">
              <a
                href="mailto:support@welsfoundation.org"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/14 bg-white/80 px-4 py-3 text-sm font-bold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
              >
                <Mail size={16} />
                support@welsfoundation.org
              </a>
              <a
                href="tel:7867350200"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/14 bg-white/80 px-4 py-3 text-sm font-bold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
              >
                <Phone size={16} />
                786.735.0200
              </a>
            </div>
          </div>

          <div className="mt-8 text-left">
            <MauticContactForm
              formKicker="Start the conversation"
              formTitle="Tell us a bit about you and we'll connect you to the right next step."
              successKicker="Thanks for reaching out"
              successTitle="We have your note."
              successMessage="Mike from WELS and the team will follow up soon with the right next step."
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
