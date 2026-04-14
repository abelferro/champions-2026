"use client";

import { motion, MotionConfig } from "motion/react";
import Image from "next/image";
import React, { useState, useRef } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  CalendarDays,
  FileBarChart2,
  FolderOpen,
  LayoutDashboard,
  MessageSquare,
  Settings,
} from "lucide-react";

const FloatingBlobs = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
  >
    <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-brand-blue/10 blur-[120px]" />
    <div className="absolute top-[10%] -right-[20%] w-[60%] h-[60%] rounded-full bg-brand-purple/10 blur-[120px]" />
    <div className="absolute bottom-[10%] left-[10%] w-[80%] h-[80%] rounded-full bg-brand-green/10 blur-[150px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-brand-pink/10 blur-[100px]" />
    <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full bg-brand-yellow/10 blur-[100px]" />
  </div>
);

const SectionTitle = ({
  children,
  subtitle,
  id,
}: {
  children: React.ReactNode;
  subtitle?: string;
  id?: string;
}) => (
  <div className="mb-16 text-center px-6">
    <motion.h2
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold tracking-tight mb-6 gradient-text"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg md:text-xl text-slate-900 max-w-3xl mx-auto leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const FeatureCard = ({
  iconSrc,
  iconAlt,
  title,
  description,
  delay = 0,
  compact = false,
}: {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  delay?: number;
  compact?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`glass flex w-full flex-col items-start rounded-[32px] ${
      compact ? "gap-3 p-7" : "gap-4 p-8"
    }`}
  >
    <Image
      src={iconSrc}
      alt={iconAlt}
      width={compact ? 56 : 64}
      height={compact ? 56 : 64}
      className={compact ? "h-14 w-14" : "h-16 w-16"}
    />
    <h3 className={compact ? "text-[1.05rem] font-semibold leading-tight" : "text-xl font-semibold"}>{title}</h3>
    <p className={compact ? "text-slate-900 leading-[1.45]" : "text-slate-900 leading-relaxed"}>{description}</p>
  </motion.div>
);

const FamiliesPreview = () => (
  <div className="relative h-full rounded-[32px] overflow-hidden border border-white/60 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
    <div className="flex flex-col gap-4 border-b border-slate-100 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <div className="flex min-w-0 items-center gap-3">
        <Image
          src={`${BASE}/images/Partner_Hub_Icon.png`}
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 rounded-full shrink-0"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-brand-blue">Smart Start</p>
          <p className="truncate text-[11px] text-slate-500">Family programs and applications</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-[11px] text-slate-500">
        <div className="rounded-full border border-slate-200 px-3 py-1">FAQ</div>
        <div className="rounded-full border border-slate-200 px-3 py-1">Language</div>
      </div>
    </div>

    <div className="bg-brand-blue px-5 py-5 text-white sm:px-6 sm:py-6">
      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.25fr] lg:items-center">
        <div>
          <p className="text-2xl font-semibold leading-tight sm:text-3xl">Smart Start</p>
        </div>
        <p className="max-w-lg text-sm leading-6 text-white/86 sm:text-base">
          Explore scholarships, Pre-K opportunities, and family support resources from one clear starting point.
        </p>
      </div>
    </div>

    <div className="grid gap-5 bg-white px-5 py-5 sm:px-6 sm:py-6 lg:gap-6">
      <div className="max-w-2xl">
        <p className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">Applications</p>
        <p className="mt-2 text-sm leading-5 text-slate-500 sm:text-[0.98rem] lg:max-w-xl">
          Choosing early care is one of the most important decisions you&apos;ll make for your child.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="border-b border-slate-100 pb-3 lg:border-b-0 lg:border-r lg:pr-5">
          <p className="text-lg font-semibold leading-tight text-slate-900 sm:text-xl">Family Childcare Scholarships</p>
          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-[0.98rem]">
            Scholarships for qualifying families, with support for children from birth through age five.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold leading-tight text-slate-900 sm:text-xl">Pre-K Program</p>
          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-[0.98rem]">
            Public Pre-K classes with one clear application timeline, eligibility guidance, and next steps in one place.
          </p>
        </div>
      </div>
    </div>

    <div className="mx-2 grid gap-3 rounded-[28px] border border-[#eef2fb] bg-linear-to-b from-[#f7fbff] via-[#f9fbff] to-[#fcfdff] px-5 py-4 sm:mx-3 sm:px-6 sm:py-5">
      <div className="rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl backdrop-blur">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Application Status</p>
        <div className="mt-2 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Application Submitted</p>
            <p className="text-xs text-slate-500">NC Pre-K Program • Today, 10:42 AM</p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl backdrop-blur">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Next Best Match</p>
        <p className="mt-2 text-sm font-semibold text-slate-900">3 providers near 27101</p>
        <p className="mt-1 text-xs text-slate-500">Filter by age, location, and schedule.</p>
      </div>
    </div>
  </div>
);

const ProvidersPreview = () => (
  <div className="relative h-full rounded-[32px] overflow-hidden border border-white/60 bg-slate-50 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
    <div className="flex flex-col gap-4 border-b border-slate-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
          <Image
            src={`${BASE}/images/Partner_Hub_Icon.png`}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 rounded-full"
          />
          <span>Partner Hub</span>
        </div>
        <p className="truncate text-sm font-semibold text-slate-900">Smart Start</p>
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <MessageSquare size={14} />
          <span>Message Center</span>
        </div>
      </div>
    </div>

    <div className="grid h-[calc(100%-81px)] md:grid-cols-[200px_1fr]">
      <div className="border-b border-slate-200 bg-white px-4 py-4 md:border-b-0 md:border-r md:px-4 md:py-5">
        <div className="flex gap-2 overflow-x-auto pb-1 md:block md:space-y-2 md:overflow-visible md:pb-0">
          {[
            { label: "Dashboard", icon: LayoutDashboard },
            { label: "Message Center", icon: MessageSquare },
            { label: "Reports", icon: FileBarChart2 },
            { label: "Attendance", icon: CalendarDays },
            { label: "Site/Provider", icon: Building2 },
            { label: "Administration", icon: Settings },
            { label: "Applications", icon: FolderOpen },
          ].map(({ label, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm md:shrink ${
                index === 0 ? "bg-brand-blue/8 font-semibold text-brand-blue" : "text-slate-700"
              }`}
            >
              <Icon size={16} className={index === 0 ? "text-brand-blue" : "text-slate-400"} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">Administrator Dashboard</p>
        <div className="mt-4 grid gap-3">
          <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <FileBarChart2 size={18} />
              </div>
              <p className="text-base font-semibold leading-tight text-slate-900 sm:text-lg">Reports</p>
            </div>
            <div className="mt-3 space-y-2 text-sm leading-tight">
              <p className="text-brand-blue">Reports</p>
              <p className="text-brand-blue">Attendance</p>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-purple/10 text-brand-purple">
                <Building2 size={18} />
              </div>
              <p className="text-base font-semibold leading-tight text-slate-900 sm:text-lg">Site/Provider Maintenance</p>
            </div>
            <div className="mt-3 space-y-2 text-sm leading-tight">
              <p className="text-brand-blue">Organizations</p>
              <p className="text-brand-blue">Sites</p>
              <p className="text-brand-blue">Users</p>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                <CalendarDays size={18} />
              </div>
              <p className="text-base font-semibold leading-tight text-slate-900 sm:text-lg">Attendance</p>
            </div>
            <div className="mt-3 space-y-2 text-sm leading-tight">
              <p className="text-brand-blue">Attendance</p>
              <p className="text-brand-blue">Children</p>
              <p className="text-brand-blue">Redetermination</p>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-pink/10 text-brand-pink">
                <FolderOpen size={18} />
              </div>
              <p className="text-base font-semibold leading-tight text-slate-900 sm:text-lg">Applications</p>
            </div>
            <div className="mt-3 space-y-2 text-sm leading-tight">
              <p className="text-brand-blue">Manage Children Applications</p>
              <p className="text-brand-blue">Manage Enrollments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SuccessModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center px-6"
    role="dialog"
    aria-modal="true"
    aria-labelledby="success-title"
  >
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
      onClick={onClose}
      aria-hidden="true"
    />
    {/* Card */}
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 20 }}
      className="relative bg-white rounded-3xl p-10 max-w-md w-full shadow-2xl text-center z-10"
    >
      <div aria-hidden="true" className="w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-br from-brand-blue via-brand-purple to-brand-pink flex items-center justify-center text-white shadow-lg">
        <CheckCircle2 size={40} />
      </div>
      <h2 id="success-title" className="text-2xl font-black text-slate-900 mb-3">
        Thanks for reaching out!
      </h2>
      <p className="text-slate-900 leading-relaxed mb-2">
        We got your info and we&apos;ll be in touch soon to schedule your demo.
      </p>
      <p className="text-slate-500 text-sm mb-8">
        In the meantime, feel free to share Partner Hub with anyone who might benefit.
      </p>
      <button
        onClick={onClose}
        className="px-8 py-3 rounded-2xl bg-linear-to-r from-brand-blue to-brand-purple text-white font-bold text-sm shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
      >
        Close
      </button>
    </motion.div>
  </motion.div>
);

export default function LandingPage() {
  const formRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    first_name: "", last_name: "", email: "", zip_code: "", phone_number: "", role: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const body = new FormData();
    body.append("mauticform[first_name]", formData.first_name);
    body.append("mauticform[last_name]", formData.last_name);
    body.append("mauticform[email]", formData.email);
    body.append("mauticform[zip_code]", formData.zip_code);
    body.append("mauticform[phone_number]", formData.phone_number);
    body.append("mauticform[role]", formData.role);
    body.append("mauticform[submit]", "");
    body.append("mauticform[formId]", "9");
    body.append("mauticform[return]", "");
    body.append("mauticform[formName]", "partnerhublandingcapture");

    try {
      await fetch("https://marketing.bwelz.org/form/submit?formId=9", {
        method: "POST",
        body,
        mode: "no-cors",
      });
    } catch {
      // no-cors swallows errors; submission still goes through
    }

    setIsSubmitting(false);
    setShowModal(true);
    setFormData({ first_name: "", last_name: "", email: "", zip_code: "", phone_number: "", role: "" });
  };

  return (
    <MotionConfig reducedMotion="user">
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}

      {/* Skip to main content — ADA keyboard nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-purple focus:text-white focus:rounded-lg focus:font-bold focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="relative min-h-screen font-sans selection:bg-brand-purple/30">
        <main id="main-content">
          {/* Hero Section */}
          <section
            aria-label="Partner Hub introduction"
            className="relative border-b border-brand-blue/10 pt-20 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden"
          >
            <FloatingBlobs />
            <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full opacity-15" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-green/20 blur-[120px] rounded-full opacity-10" />
            </div>

            <div className="max-w-4xl mx-auto text-center">
              {/* Logo badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-8"
              >
                <Image
                  src={`${BASE}/images/Partner_Hub_Primary_Logo_Stacked.png`}
                  alt="Partner Hub"
                  width={300}
                  height={160}
                  className="h-56 w-auto mx-auto"
                  priority
                />
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6 gradient-text"
              >
                Connecting Care
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-800 font-medium mb-4 max-w-2xl mx-auto"
              >
                One platform. Two experiences.{" "}
                <br className="hidden md:block" /> Built for families and providers.
              </motion.p>

              {/* Animated scroll indicator */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={scrollToForm}
                aria-label="Scroll down to learn more"
                className="flex flex-col items-center gap-2 mt-6 mx-auto w-fit focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple rounded-lg"
              >
                <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">Scroll</span>
                <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex items-start justify-center p-1.5">
                  <motion.div
                    animate={{ y: [0, 14, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 rounded-full bg-brand-purple"
                  />
                </div>
              </motion.button>
            </div>
          </section>

          {/* Families Section */}
          <section
            aria-labelledby="families-heading"
            className="py-24 md:py-28 px-6 relative overflow-hidden border-t border-brand-pink/25 bg-linear-to-b from-[#ffe9f3] via-[#fff1ed] to-[#fffaf7]"
          >
            <div aria-hidden="true" className="absolute top-0 right-0 w-72 h-72 bg-brand-pink/16 blur-[100px] rounded-full -z-10" />
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                id="families-heading"
                subtitle="Families can find care, apply for programs, and stay connected with their child's journey."
          >
                For Families
              </SectionTitle>

              <div className="grid gap-10 md:grid-cols-[1.22fr_0.78fr] md:items-stretch lg:gap-14">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  aria-hidden="true"
                  className="relative min-h-[560px] sm:min-h-[620px] md:min-h-0 md:self-stretch glass rounded-[40px] overflow-hidden p-4 md:p-5"
                >
                  <FamiliesPreview />
                </motion.div>

                <div className="grid gap-6 justify-items-start md:justify-items-center">
                  <FeatureCard
                    iconSrc={`${BASE}/icons/icon-applications.svg`}
                    iconAlt="Secure applications icon"
                    title="Secure Applications"
                    description="Securely upload required documents and submit applications for Pre-K and childcare scholarships."
                    delay={0.1}
                  />
                  <FeatureCard
                    iconSrc={`${BASE}/icons/icon-mapping.svg`}
                    iconAlt="CCR&R map icon"
                    title="CCR&R Map"
                    description="Find providers that meet the family's specific needs using our interactive resource map."
                    delay={0.2}
                  />
                  <FeatureCard
                    iconSrc={`${BASE}/icons/icon-communication.svg`}
                    iconAlt="Direct communication icon"
                    title="Direct Communication"
                    description="Check application status and communicate directly with providers through our secure messaging system."
                    delay={0.3}
                  />
                </div>
              </div>

              <div className="mt-16 flex justify-center">
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  onClick={scrollToForm}
                  aria-label="Apply or get started — scroll to sign up form"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#8d58c8] via-[#b567c7] to-[#eb7a9f] px-8 py-4 text-lg font-bold text-white shadow-[0_18px_45px_rgba(149,86,185,0.24)] ring-1 ring-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(149,86,185,0.3)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-purple"
                >
                  <span>See How It Works</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/18 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight aria-hidden="true" size={20} />
                  </span>
                </motion.button>
              </div>
            </div>
          </section>

          {/* Providers Section */}
          <section
            aria-labelledby="providers-heading"
            className="py-24 md:py-28 px-6 relative overflow-hidden border-t border-brand-blue/25 bg-linear-to-b from-[#e8f2ff] via-[#eef7ff] to-[#fafcff]"
          >
            <div aria-hidden="true" className="absolute bottom-0 left-0 w-72 h-72 bg-brand-blue/16 blur-[100px] rounded-full -z-10" />
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                id="providers-heading"
                subtitle="Manage attendance, payments, and support families from one centralized system."
          >
                For Providers
              </SectionTitle>

              <div className="grid gap-10 md:grid-cols-[1.22fr_0.78fr] md:items-stretch lg:gap-14">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  aria-hidden="true"
                  className="relative min-h-[560px] sm:min-h-[620px] md:min-h-0 md:self-stretch glass rounded-[40px] overflow-hidden p-4 md:p-5"
                >
                  <ProvidersPreview />
                </motion.div>

                <div className="grid gap-6 justify-items-start md:justify-items-center">
                  <FeatureCard
                    iconSrc={`${BASE}/icons/icon-attendance.svg`}
                    iconAlt="Attendance tracking icon"
                    title="Attendance Tracking"
                    description="Keep accurate attendance records with our easy-to-use digital system."
                    delay={0.1}
                    compact
                  />
                  <FeatureCard
                    iconSrc={`${BASE}/icons/icon-invoices.svg`}
                    iconAlt="Payment management icon"
                    title="Payment Management"
                    description="Manage provider payments and track invoices with full transparency and automated reporting."
                    delay={0.2}
                    compact
                  />
                  <FeatureCard
                    iconSrc={`${BASE}/icons/icon-data.svg`}
                    iconAlt="Site management icon"
                    title="Site Management"
                    description="Manage multiple sites, run comprehensive reports, and ensure compliance across your organization."
                    delay={0.3}
                    compact
                  />
                </div>
              </div>

              <div className="mt-16 flex justify-center">
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  onClick={scrollToForm}
                  aria-label="Access Provider Tools — scroll to sign up form"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#2a6bec] via-[#5e8df0] to-[#8cb3ff] px-8 py-4 text-lg font-bold text-white shadow-[0_18px_45px_rgba(42,107,236,0.24)] ring-1 ring-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(42,107,236,0.3)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-blue"
                >
                  <span>Request a Walkthrough</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/18 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight aria-hidden="true" size={20} />
                  </span>
                </motion.button>
              </div>
            </div>
          </section>

          {/* Supporting Section */}
          <section
            aria-labelledby="supporting-heading"
            className="py-24 px-6 text-center relative overflow-hidden border-t border-brand-green/25 bg-linear-to-b from-[#eefde7] via-[#f7fff1] to-[#fcfff9] isolate"
          >
            {/* NC Map background */}
            <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <img
                src={`${BASE}/images/north_carolina_map.svg`}
                alt=""
                className="w-full max-w-4xl opacity-15 select-none p-12 md:p-16"
              />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
              <motion.h2
                id="supporting-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Supporting communities in North Carolina
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-900 mb-8 leading-relaxed"
              >
                Connecting families with care to ensure they have the relational and concrete supports they need to thrive.
              </motion.p>
            </div>
          </section>

          {/* CTA + Form Section */}
          <section
            ref={formRef}
            id="get-started"
            aria-labelledby="cta-heading"
            className="py-24 px-6 overflow-hidden relative border-t border-brand-purple/25 bg-linear-to-b from-[#f5ebff] via-[#fbf4ff] to-[#fffafe]"
          >
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] bg-brand-purple/15 blur-[120px] rounded-full" />
              <div className="absolute -bottom-1/4 -right-1/4 w-[80%] h-[80%] bg-brand-blue/10 blur-[120px] rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-pink/10 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <motion.h2
                  id="cta-heading"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold mb-4 text-slate-900"
                >
                  Want to see Partner Hub?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-slate-900"
                >
                  We&apos;d love to walk you through it. Drop your info and we&apos;ll reach out to schedule a quick demo.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-[40px] border border-slate-200 shadow-2xl"
              >
                <form
                  onSubmit={handleSubmit}
                  aria-label="Partner Hub sign up form"
                  autoComplete="on"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-semibold text-slate-900 mb-2">First Name</label>
                      <input
                        id="first_name" name="given-name" required aria-required="true"
                        type="text" autoComplete="given-name" placeholder="Jane"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple outline-none transition-all"
                        value={formData.first_name}
                        onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-semibold text-slate-900 mb-2">Last Name</label>
                      <input
                        id="last_name" name="family-name" required aria-required="true"
                        type="text" autoComplete="family-name" placeholder="Doe"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple outline-none transition-all"
                        value={formData.last_name}
                        onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                    <input
                      id="email" name="email" required aria-required="true"
                      type="email" autoComplete="email" placeholder="jane@example.com"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone_number" className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
                      <input
                        id="phone_number" name="tel" required aria-required="true"
                        type="tel" autoComplete="tel" placeholder="(555) 000-0000"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple outline-none transition-all"
                        value={formData.phone_number}
                        onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="zip_code" className="block text-sm font-semibold text-slate-900 mb-2">ZIP Code</label>
                      <input
                        id="zip_code" name="zip" required aria-required="true"
                        type="text" autoComplete="postal-code" placeholder="27101"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple outline-none transition-all"
                        value={formData.zip_code}
                        onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-slate-900 mb-2">I&apos;m interested as a…</label>
                    <select
                      id="role" required aria-required="true"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple outline-none transition-all appearance-none"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option value="">Who are you?</option>
                      <option value="Parent">Parent / Family</option>
                      <option value="Provider">Care Provider</option>
                      <option value="Teacher">Teacher / Educator</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-linear-to-r from-brand-blue via-brand-purple to-brand-pink text-white rounded-2xl font-bold text-base shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple transition-opacity"
                  >
                    {isSubmitting ? "Sending…" : <>Request a Demo <ArrowRight aria-hidden="true" size={18} /></>}
                  </button>
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-xs pt-1">
                    <ShieldCheck aria-hidden="true" size={14} />
                    <span>100% secure. We never share your personal information.</span>
                  </div>
                </form>
              </motion.div>

              <footer className="mt-12 text-center">
                <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                  <Image
                    src={`${BASE}/images/Partner_Hub_Primary_Logo_Inline.png`}
                    alt="Partner Hub"
                    width={280}
                    height={56}
                    className="h-12 w-auto"
                  />
                  <div className="flex gap-4" aria-label="Program affiliations">
                    <div className="px-4 py-2 rounded-lg bg-white shadow-sm text-xs font-medium text-slate-900">NC Pre-K</div>
                    <div className="px-4 py-2 rounded-lg bg-white shadow-sm text-xs font-medium text-slate-900">Smart Start</div>
                  </div>
                </div>
              </footer>
            </div>

            <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/20 blur-[120px] rounded-full -z-0" />
            <div aria-hidden="true" className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/10 blur-[120px] rounded-full -z-0" />
          </section>
        </main>
      </div>
    </MotionConfig>
  );
}
