"use client";

import {
  BarChart3,
  Briefcase,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  CircleHelp,
  GraduationCap,
  Handshake,
  Phone,
  UserRound,
  Users,
  Wallet,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type ContactFormProps = {
  formKicker: string;
  formTitle: string;
  successKicker: string;
  successTitle: string;
  successMessage: string;
};

type FormState = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  organization: string;
  role: string;
  interest1: string[];
  f_message: string;
};

type FieldKey = keyof FormState;
type StepNumber = 1 | 2 | 3;

type InterestOption = {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

const FORM_ACTION = "https://marketing.bwelz.org/form/submit?formId=12";
const MAUTIC_SCRIPT =
  "https://marketing.bwelz.org/media/js/mautic-form.js?vf43116e0";
const mikeUrl =
  "https://welsfoundation.org/wp-content/uploads/2022/03/mike-bwelz-360px.jpg";
const buttonGradient =
  "linear-gradient(90deg, var(--color-brand-blue, #326cfc) 0%, var(--color-brand-pink, #eb4d8f) 50%, var(--color-brand-blue, #326cfc) 100%)";

const initialState: FormState = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  organization: "",
  role: "",
  interest1: [],
  f_message: "",
};

const stepSequence: StepNumber[] = [1, 2, 3];

const interestOptions: InterestOption[] = [
  {
    value: "schedule-demo",
    label: "Schedule a demo",
    description: "See the platform in action with a guided walkthrough.",
    icon: CalendarDays,
  },
  {
    value: "professional-portal",
    label: "Professional Portal",
    description: "Manage educator records and next steps in one place.",
    icon: UserRound,
  },
  {
    value: "workforce-development",
    label: "Workforce Development",
    description: "Support growth across teams, roles, and programs.",
    icon: Users,
  },
  {
    value: "training-credentials",
    label: "Training & Credentials",
    description: "Track learning, coursework, and completions clearly.",
    icon: GraduationCap,
  },
  {
    value: "scholarships-incentives",
    label: "Scholarships / Incentives",
    description: "Connect funding and support to educator progress.",
    icon: Wallet,
  },
  {
    value: "data-reporting",
    label: "Data & Reporting",
    description: "Turn collected information into practical visibility.",
    icon: BarChart3,
  },
  {
    value: "partnership-opportunities",
    label: "Partnerships",
    description: "Explore collaboration and implementation support.",
    icon: Handshake,
  },
  {
    value: "general-information",
    label: "General Information",
    description: "Start the conversation if you are still exploring.",
    icon: CircleHelp,
  },
];

const roleOptions = [
  { value: "", label: "Select your role" },
  { value: "agency-leader", label: "Agency leader" },
  { value: "provider-leader", label: "Provider leader" },
  { value: "educator", label: "Educator" },
  { value: "quality-specialist", label: "Quality specialist" },
  { value: "data-operations", label: "Data / operations leader" },
  { value: "partner-organization", label: "Partner organization" },
  { value: "other", label: "Other" },
] as const;

const stepContent = {
  1: {
    label: "About you",
    helper: "Step 1 of 3 • A quick intro so we know where to start.",
  },
  2: {
    label: "Your team",
    helper: "Step 2 of 3 • Help us route you to the right next step.",
  },
  3: {
    label: "Your goals",
    helper: "Step 3 of 3 • Choose what matters most and add context if helpful.",
  },
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function MauticContactForm({
  formKicker,
  formTitle,
  successKicker,
  successTitle,
  successMessage,
}: ContactFormProps) {
  const [currentStep, setCurrentStep] = useState<StepNumber>(1);
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showMessageField, setShowMessageField] = useState(false);

  useEffect(() => {
    const win = window as Window & {
      MauticSDKLoaded?: boolean;
      MauticSDK?: { onLoad: () => void };
      MauticDomain?: string;
      MauticLang?: { submittingMessage: string };
    };

    if (!win.MauticSDKLoaded) {
      win.MauticSDKLoaded = true;
      win.MauticDomain = "https://marketing.bwelz.org";
      win.MauticLang = { submittingMessage: "Please wait..." };

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = MAUTIC_SCRIPT;
      script.onload = () => {
        win.MauticSDK?.onLoad();
      };
      document.head.appendChild(script);
      return;
    }

    win.MauticSDK?.onLoad();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("has-success-overlay", showSuccess);
    return () => {
      document.body.classList.remove("has-success-overlay");
    };
  }, [showSuccess]);

  useEffect(() => {
    if (!showSuccess) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowSuccess(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showSuccess]);

  function updateField<K extends FieldKey>(key: K, value: FormState[K]) {
    setFormData((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSubmissionError("");
  }

  function validateStep(step: StepNumber) {
    const nextErrors: Partial<Record<FieldKey, string>> = {};

    if (step === 1) {
      if (!formData.first_name.trim()) {
        nextErrors.first_name = "Please enter your first name.";
      }

      if (!formData.email.trim()) {
        nextErrors.email = "Please enter your email.";
      } else if (!emailPattern.test(formData.email.trim())) {
        nextErrors.email = "Please enter a valid email address.";
      }
    }

    if (step === 2 && !formData.organization.trim()) {
      nextErrors.organization = "Please enter your organization.";
    }

    if (step === 3 && formData.interest1.length === 0) {
      nextErrors.interest1 = "Please choose at least one area of interest.";
    }

    setErrors((current) => ({ ...current, ...nextErrors }));
    return Object.keys(nextErrors).length === 0;
  }

  function handleNext(nextStep: Extract<StepNumber, 2 | 3>) {
    if (!validateStep(currentStep)) {
      return;
    }

    setCurrentStep(nextStep);
  }

  function handlePrevious(previousStep: Extract<StepNumber, 1 | 2>) {
    setSubmissionError("");
    setCurrentStep(previousStep);
  }

  function toggleInterest(value: string) {
    const nextSelection = formData.interest1.includes(value)
      ? formData.interest1.filter((item) => item !== value)
      : [...formData.interest1, value];

    updateField("interest1", nextSelection);
  }

  function handleMessageInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
    updateField("f_message", event.target.value);

    const element = event.currentTarget;
    element.style.height = "auto";
    element.style.height = `${Math.min(element.scrollHeight, 160)}px`;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionError("");

    if (!validateStep(3)) {
      return;
    }

    setIsSubmitting(true);

    const body = new FormData();
    body.append("mauticform[first_name]", formData.first_name.trim());
    body.append("mauticform[last_name]", formData.last_name.trim());
    body.append("mauticform[email]", formData.email.trim());
    body.append("mauticform[phone_number]", formData.phone_number.trim());
    body.append("mauticform[organization]", formData.organization.trim());
    body.append("mauticform[role]", formData.role.trim());
    formData.interest1.forEach((value) =>
      body.append("mauticform[interest1][]", value),
    );
    body.append("mauticform[f_message]", formData.f_message.trim());
    body.append("mauticform[submit]", "");
    body.append("mauticform[formId]", "12");
    body.append("mauticform[return]", "");
    body.append("mauticform[formName]", "welslandingcapture");

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      setFormData(initialState);
      setErrors({});
      setCurrentStep(1);
      setShowMessageField(false);
      setShowSuccess(true);
    } catch {
      setSubmissionError("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_48px_rgba(15,23,42,0.08)]">
        <div className="p-5 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              {formKicker}
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
              {formTitle}
            </h3>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Step {currentStep} of 3
          </p>
        </div>

        <ol className="mt-6 flex items-center">
          {stepSequence.map((step, index) => {
            const isActive = step === currentStep;
            const isComplete = step < currentStep;

            return (
              <li
                key={step}
                className={`flex items-center ${step === 3 ? "flex-1 justify-end" : "flex-[1_1_0%]"}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-sm font-bold transition ${
                      isActive
                        ? "border-brand-ink bg-brand-ink text-white"
                        : isComplete
                          ? "border-brand-ink bg-brand-ink text-white"
                          : "border-slate-300 bg-white text-slate-400"
                    }`}
                    aria-current={isActive ? "step" : undefined}
                  >
                    {isComplete ? <Check size={18} /> : step}
                  </span>
                  <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 md:inline">
                    {stepContent[step].label}
                  </span>
                </div>
                {index < stepSequence.length - 1 && (
                  <span
                    className={`mx-3 h-px flex-1 rounded-full ${
                      isComplete ? "bg-brand-ink/40" : "bg-slate-200"
                    }`}
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>

        {submissionError && (
          <div className="mt-5 rounded-[18px] border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
            {submissionError}
          </div>
        )}

        <form
          id="mauticform_welslandingcapture"
          className="mt-6"
          method="post"
          action={FORM_ACTION}
          data-mautic-form="welslandingcapture"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="min-h-[420px] md:min-h-[400px]">
            <AnimatePresence mode="wait" initial={false}>
              {currentStep === 1 && (
                <motion.section
                  key="step-1"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="grid content-start gap-4 md:grid-cols-2"
                >
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-brand-ink">
                      First Name
                    </label>
                    <input
                      id="mauticform_input_welslandingcapture_first_name"
                      name="mauticform[first_name]"
                      type="text"
                      autoComplete="given-name"
                      placeholder="Jane"
                      value={formData.first_name}
                      onChange={(event) =>
                        updateField("first_name", event.target.value)
                      }
                      className={`min-h-[56px] w-full rounded-[18px] border px-4 py-3 text-base text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 ${
                        errors.first_name
                          ? "border-rose-300 bg-rose-50"
                          : "border-slate-200 bg-white"
                      }`}
                    />
                    {errors.first_name && (
                      <p className="mt-2 text-sm font-semibold text-rose-600">
                        {errors.first_name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-brand-ink">
                      Last Name
                    </label>
                    <input
                      id="mauticform_input_welslandingcapture_last_name"
                      name="mauticform[last_name]"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Smith"
                      value={formData.last_name}
                      onChange={(event) =>
                        updateField("last_name", event.target.value)
                      }
                      className="min-h-[56px] w-full rounded-[18px] border border-slate-200 bg-white px-4 py-3 text-base text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-blue/10"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-brand-ink">
                      Email
                    </label>
                    <input
                      id="mauticform_input_welslandingcapture_email"
                      name="mauticform[email]"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      className={`min-h-[56px] w-full rounded-[18px] border px-4 py-3 text-base text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 ${
                        errors.email
                          ? "border-rose-300 bg-rose-50"
                          : "border-slate-200 bg-white"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm font-semibold text-rose-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </motion.section>
              )}

              {currentStep === 2 && (
                <motion.section
                  key="step-2"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="grid content-start gap-4 md:grid-cols-2"
                >
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-brand-ink">
                      Organization
                    </label>
                    <input
                      id="mauticform_input_welslandingcapture_organization"
                      name="mauticform[organization]"
                      type="text"
                      autoComplete="organization"
                      placeholder="Organization name"
                      value={formData.organization}
                      onChange={(event) =>
                        updateField("organization", event.target.value)
                      }
                      className={`min-h-[56px] w-full rounded-[18px] border px-4 py-3 text-base text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 ${
                        errors.organization
                          ? "border-rose-300 bg-rose-50"
                          : "border-slate-200 bg-white"
                      }`}
                    />
                    {errors.organization && (
                      <p className="mt-2 text-sm font-semibold text-rose-600">
                        {errors.organization}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-brand-ink">
                      Role
                    </label>
                    <div className="relative">
                      <select
                        id="mauticform_input_welslandingcapture_role"
                        name="mauticform[role]"
                        value={formData.role}
                        onChange={(event) =>
                          updateField("role", event.target.value)
                        }
                        className="min-h-[56px] w-full appearance-none rounded-[18px] border border-slate-200 bg-white px-4 py-3 pr-12 text-base text-brand-ink focus:outline-none focus:ring-4 focus:ring-brand-blue/10"
                      >
                        {roleOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-brand-ink">
                      Phone
                    </label>
                    <div className="relative">
                      <input
                        id="mauticform_input_welslandingcapture_phone_number"
                        name="mauticform[phone_number]"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="(555) 555-5555"
                        value={formData.phone_number}
                        onChange={(event) =>
                          updateField("phone_number", event.target.value)
                        }
                        className="min-h-[56px] w-full rounded-[18px] border border-slate-200 bg-white px-4 py-3 pl-11 text-base text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-blue/10"
                      />
                      <Phone
                        size={16}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                    </div>
                  </div>
                </motion.section>
              )}

              {currentStep === 3 && (
                <motion.section
                  key="step-3"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="grid content-start gap-4"
                >
                  <fieldset>
                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <legend className="text-sm font-semibold text-brand-ink">
                        Interests
                      </legend>
                      <p className="text-sm text-slate-500">
                        Choose one or more areas of interest.
                      </p>
                    </div>

                    <div className="max-h-[55vh] overflow-y-auto pr-1 lg:max-h-[360px]">
                      <div className="grid gap-3 lg:grid-cols-2">
                        {interestOptions.map((option) => {
                          const selected = formData.interest1.includes(option.value);
                          const Icon = option.icon;

                          return (
                            <button
                              key={option.value}
                              type="button"
                              aria-pressed={selected}
                              onClick={() => toggleInterest(option.value)}
                              className={`min-h-[112px] rounded-[20px] border p-4 text-left transition active:scale-[0.98] ${
                                selected
                                  ? "border-brand-ink bg-brand-blue/5 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                                  : "border-slate-200 bg-white hover:border-slate-300"
                              }`}
                            >
                              <div className="flex h-full items-start gap-4">
                                <div
                                  className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                                    selected
                                      ? "bg-brand-ink text-white"
                                      : "bg-slate-100 text-slate-500"
                                  }`}
                                >
                                  <Icon size={22} />
                                </div>

                                <div className="min-w-0 flex-1">
                                  <p className="text-base font-bold leading-tight text-brand-ink">
                                    {option.label}
                                  </p>
                                  <p className="mt-1 text-sm leading-6 text-slate-500">
                                    {option.description}
                                  </p>
                                </div>

                                <div
                                  className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
                                    selected
                                      ? "border-brand-ink bg-brand-ink text-white"
                                      : "border-slate-300 bg-white text-transparent"
                                  }`}
                                >
                                  <Check size={14} />
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="sr-only" aria-hidden="true">
                      {formData.interest1.map((value) => (
                        <input
                          key={value}
                          type="hidden"
                          name="mauticform[interest1][]"
                          value={value}
                          readOnly
                        />
                      ))}
                    </div>

                    {errors.interest1 && (
                      <p className="mt-2 text-sm font-semibold text-rose-600">
                        {errors.interest1}
                      </p>
                    )}
                  </fieldset>

                  <div className="rounded-[20px] border border-slate-200 bg-slate-50/50">
                    <button
                      type="button"
                      onClick={() => setShowMessageField((current) => !current)}
                      className="flex min-h-[52px] w-full items-center justify-between gap-3 px-4 text-left text-sm font-semibold text-brand-ink"
                      aria-expanded={showMessageField}
                    >
                      <span>Add more details (optional)</span>
                      <ChevronDown
                        size={18}
                        className={`transition ${showMessageField ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {showMessageField && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="overflow-hidden border-t border-slate-200"
                        >
                          <div className="p-4">
                            <textarea
                              id="mauticform_input_welslandingcapture_f_message"
                              name="mauticform[f_message]"
                              rows={4}
                              placeholder="Tell us a little more about what you need."
                              value={formData.f_message}
                              onChange={handleMessageInput}
                              className="min-h-[80px] max-h-[160px] w-full resize-none rounded-[18px] border border-slate-200 bg-white px-4 py-3 text-base text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-blue/10"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>

          <input type="hidden" name="mauticform[formId]" value="12" />
          <input type="hidden" name="mauticform[return]" value="" />
          <input
            type="hidden"
            name="mauticform[formName]"
            value="welslandingcapture"
          />

          <div className="sticky bottom-0 -mx-5 mt-6 border-t border-slate-200 bg-white/95 px-5 py-4 backdrop-blur md:static md:mx-0 md:border-t-0 md:bg-transparent md:px-0 md:py-0">
            <p className="mb-4 text-sm leading-6 text-slate-500">
              {stepContent[currentStep].helper}
            </p>

            <div
              className={`grid gap-3 ${currentStep > 1 ? "grid-cols-[auto_1fr]" : "grid-cols-1"}`}
            >
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => handlePrevious((currentStep - 1) as 1 | 2)}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <ChevronLeft size={16} />
                  Back
                </button>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={() => handleNext((currentStep + 1) as 2 | 3)}
                  className="gradient-shift-button inline-flex min-h-[52px] items-center justify-center rounded-full px-6 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(50,108,252,0.18)]"
                  style={{ backgroundImage: buttonGradient }}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gradient-shift-button inline-flex min-h-[52px] items-center justify-center rounded-full px-6 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(50,108,252,0.18)] disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ backgroundImage: buttonGradient }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-[999] grid min-h-dvh place-items-center bg-[rgba(248,247,255,0.74)] p-5 backdrop-blur-xl">
          <div className="relative w-full max-w-[760px] overflow-hidden rounded-[34px] border border-white/80 bg-white/96 px-8 py-12 text-center shadow-[0_36px_90px_rgba(50,108,252,0.22)] md:px-12 md:py-16">
            <button
              type="button"
              aria-label="Close"
              onClick={() => setShowSuccess(false)}
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={20} />
            </button>

            <img
              src={mikeUrl}
              alt="Mike from WELS"
              className="mx-auto h-24 w-24 rounded-[28px] object-cover shadow-[0_18px_40px_rgba(93,76,172,0.16)]"
              loading="lazy"
            />

            <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-ink text-white shadow-[0_18px_34px_rgba(29,27,69,0.18)]">
              <CheckCircle2 size={28} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              {successKicker}
            </p>
            <h3 className="mx-auto mt-3 max-w-[12ch] text-4xl font-bold tracking-tight text-brand-ink md:text-5xl">
              {successTitle}
            </h3>
            <p className="mx-auto mt-5 max-w-[32ch] text-lg leading-8 text-slate-600">
              {successMessage}
            </p>
            <p className="mx-auto mt-4 max-w-[34ch] text-base leading-7 text-slate-500">
              Mike from WELS and our team will be in touch shortly. Thank you
              for taking a moment to share your goals with us.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="gradient-shift-button inline-flex min-h-[54px] items-center justify-center rounded-full px-8 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(50,108,252,0.18)]"
                style={{ backgroundImage: buttonGradient }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
