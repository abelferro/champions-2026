"use client";

import { CheckCircle2, ChevronLeft, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

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

const FORM_ACTION = "https://marketing.bwelz.org/form/submit?formId=12";
const MAUTIC_SCRIPT =
  "https://marketing.bwelz.org/media/js/mautic-form.js?vf43116e0";

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

const interestOptions = [
  { value: "schedule-demo", label: "Schedule a demo" },
  { value: "professional-portal", label: "Professional Portal" },
  { value: "workforce-development", label: "Workforce Development" },
  { value: "training-credentials", label: "Training & Credentials" },
  { value: "scholarships-incentives", label: "Scholarships / Incentives" },
  {
    value: "badges-quality-recognition",
    label: "Badges / Quality Recognition",
  },
  { value: "data-reporting", label: "Data & Reporting" },
  {
    value: "partnership-opportunities",
    label: "Partnership Opportunities",
  },
  { value: "general-information", label: "General Information" },
];

const stepContent = {
  1: {
    title: "Tell us about you.",
    helper: "We use this to personalize the conversation.",
  },
  2: {
    title: "Tell us about your organization.",
    helper: "This helps us route you to the right WELS conversation.",
  },
  3: {
    title: "What can WELS help you with?",
    helper: "Choose one or more interests and add any extra context.",
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
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const accentColor = useMemo(
    () => "var(--color-brand-blue, var(--color-brand-pink, #326cfc))",
    [],
  );

  const accentGradient = useMemo(
    () =>
      "linear-gradient(90deg, var(--color-brand-blue, #326cfc) 0%, var(--color-brand-pink, #eb4d8f) 62%, var(--color-brand-yellow, var(--color-brand-pink, #eb4d8f)) 100%)",
    [],
  );

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

  function validateStep(step: 1 | 2 | 3) {
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

  function handleNext(nextStep: 2 | 3) {
    if (!validateStep(currentStep)) {
      return;
    }

    setCurrentStep(nextStep);
  }

  function handlePrevious(previousStep: 1 | 2) {
    setSubmissionError("");
    setCurrentStep(previousStep);
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
      setShowSuccess(true);
    } catch {
      setSubmissionError("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="rounded-[32px] border border-white/78 bg-white/95 p-6 shadow-[0_28px_70px_rgba(29,27,69,0.12)] md:p-8">
        <div className="flex flex-col gap-5">
          <div>
            <p
              className="text-sm font-extrabold uppercase tracking-[0.2em]"
              style={{ color: accentColor }}
            >
              {formKicker}
            </p>
            <h3 className="mt-3 text-4xl font-black tracking-tight text-brand-ink">
              {stepContent[currentStep].title ?? formTitle}
            </h3>
          </div>

          <div className="flex items-center">
            {[1, 2, 3].map((step, index) => {
              const isActive = step === currentStep;
              const isComplete = step < currentStep;

              return (
                <div
                  key={step}
                  className={`flex items-center ${step === 3 ? "flex-1" : "flex-[1_1_0%]"}`}
                >
                  <div
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-2xl font-black transition ${
                      isActive
                        ? "text-white shadow-[0_14px_26px_rgba(50,108,252,0.18)]"
                        : isComplete
                          ? "bg-slate-100 text-slate-700"
                          : "bg-slate-100 text-slate-400"
                    }`}
                    style={isActive ? { background: accentGradient } : undefined}
                    aria-current={isActive ? "step" : undefined}
                  >
                    {step}
                  </div>
                  {index < 2 && (
                    <div className="mx-3 h-[3px] flex-1 rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: currentStep > step ? "100%" : "0%",
                          background: accentGradient,
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {submissionError && (
          <div className="mt-6 rounded-[20px] border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-semibold text-rose-700">
            {submissionError}
          </div>
        )}

        <form
          id="mauticform_welslandingcapture"
          className="mt-8"
          method="post"
          action={FORM_ACTION}
          data-mautic-form="welslandingcapture"
          onSubmit={handleSubmit}
          noValidate
        >
          {currentStep === 1 && (
            <section className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm font-extrabold text-brand-ink">
                  Your first name
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
                  className={`w-full rounded-[24px] border px-5 py-4 text-lg text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 ${
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
                <label className="mb-3 block text-sm font-extrabold text-brand-ink">
                  Your last name
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
                  className="w-full rounded-[24px] border border-slate-200 bg-white px-5 py-4 text-lg text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-3 block text-sm font-extrabold text-brand-ink">
                  Your email
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
                  className={`w-full rounded-[24px] border px-5 py-4 text-lg text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 ${
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
            </section>
          )}

          {currentStep === 2 && (
            <section className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-3 block text-sm font-extrabold text-brand-ink">
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
                  className={`w-full rounded-[24px] border px-5 py-4 text-lg text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 ${
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
                <label className="mb-3 block text-sm font-extrabold text-brand-ink">
                  Role
                </label>
                <input
                  id="mauticform_input_welslandingcapture_role"
                  name="mauticform[role]"
                  type="text"
                  placeholder="Your role"
                  value={formData.role}
                  onChange={(event) => updateField("role", event.target.value)}
                  className="w-full rounded-[24px] border border-slate-200 bg-white px-5 py-4 text-lg text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-extrabold text-brand-ink">
                  Phone number
                </label>
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
                  className="w-full rounded-[24px] border border-slate-200 bg-white px-5 py-4 text-lg text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100"
                />
              </div>
            </section>
          )}

          {currentStep === 3 && (
            <section className="grid gap-5">
              <div>
                <label className="mb-3 block text-sm font-extrabold text-brand-ink">
                  Interest
                </label>
                <select
                  id="mauticform_input_welslandingcapture_interest1"
                  name="mauticform[interest1][]"
                  multiple
                  size={6}
                  value={formData.interest1}
                  onChange={(event) =>
                    updateField(
                      "interest1",
                      Array.from(event.target.selectedOptions, (option) => option.value),
                    )
                  }
                  className={`w-full rounded-[24px] border px-5 py-4 text-base text-brand-ink focus:outline-none focus:ring-4 focus:ring-slate-100 ${
                    errors.interest1
                      ? "border-rose-300 bg-rose-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {interestOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-slate-500">
                  Choose one or more areas of interest.
                </p>
                {errors.interest1 && (
                  <p className="mt-2 text-sm font-semibold text-rose-600">
                    {errors.interest1}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-3 block text-sm font-extrabold text-brand-ink">
                  Message
                </label>
                <textarea
                  id="mauticform_input_welslandingcapture_f_message"
                  name="mauticform[f_message]"
                  rows={5}
                  placeholder="Tell us a little more about what you need."
                  value={formData.f_message}
                  onChange={(event) =>
                    updateField("f_message", event.target.value)
                  }
                  className="w-full rounded-[24px] border border-slate-200 bg-white px-5 py-4 text-base text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100"
                />
              </div>
            </section>
          )}

          <p className="mt-5 text-base leading-7 text-slate-500">
            {stepContent[currentStep].helper}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => handlePrevious((currentStep - 1) as 1 | 2)}
                className="inline-flex min-h-[64px] items-center justify-center gap-2 rounded-[20px] border border-slate-200 px-6 text-base font-extrabold text-slate-600 transition hover:bg-slate-50"
              >
                <ChevronLeft size={18} />
                Back
              </button>
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={() => handleNext((currentStep + 1) as 2 | 3)}
                className="inline-flex min-h-[72px] flex-1 items-center justify-center rounded-[22px] px-6 text-xl font-black text-white shadow-[0_18px_34px_rgba(50,108,252,0.18)] transition hover:-translate-y-px"
                style={{ background: accentGradient }}
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-[72px] flex-1 items-center justify-center rounded-[22px] px-6 text-xl font-black text-white shadow-[0_18px_34px_rgba(50,108,252,0.18)] transition hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-60 disabled:transform-none"
                style={{ background: accentGradient }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>

          <input type="hidden" name="mauticform[formId]" value="12" />
          <input type="hidden" name="mauticform[return]" value="" />
          <input
            type="hidden"
            name="mauticform[formName]"
            value="welslandingcapture"
          />
        </form>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-[999] grid min-h-dvh place-items-center bg-[rgba(248,247,255,0.72)] p-5 backdrop-blur-xl">
          <div className="relative w-full max-w-[720px] rounded-[34px] border border-white/80 bg-white/96 px-8 py-12 text-center shadow-[0_36px_90px_rgba(50,108,252,0.22)] md:px-12 md:py-16">
            <button
              type="button"
              aria-label="Close"
              onClick={() => setShowSuccess(false)}
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={20} />
            </button>

            <div
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full shadow-[0_18px_40px_rgba(50,108,252,0.18)]"
              style={{ background: accentGradient }}
            >
              <CheckCircle2 size={42} className="text-white" />
            </div>

            <p
              className="mt-8 text-sm font-extrabold uppercase tracking-[0.2em]"
              style={{ color: accentColor }}
            >
              {successKicker}
            </p>
            <h3 className="mx-auto mt-4 max-w-[12ch] text-4xl font-black leading-[1.05] tracking-tight text-brand-ink md:text-5xl">
              {successTitle}
            </h3>
            <p className="mx-auto mt-5 max-w-[30ch] text-lg leading-8 text-slate-600">
              {successMessage}
            </p>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="inline-flex min-h-[62px] items-center justify-center rounded-[20px] px-8 text-lg font-black text-white shadow-[0_18px_34px_rgba(50,108,252,0.18)] transition hover:-translate-y-px"
                style={{ background: accentGradient }}
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
