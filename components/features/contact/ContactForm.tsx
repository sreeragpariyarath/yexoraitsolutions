"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { BUDGET_OPTIONS, CONTACT_CONTENT, COUNTRY_OPTIONS, SERVICE_OPTIONS } from "../../../data/contact";
import { CornerButton } from "../../ui/CornerButton";
import { Checkbox, TextAreaField, TextField, focusField } from "../../ui/FormField";
import { SelectField } from "../../ui/SelectField";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  budget: string;
  message: string;
  agreed: boolean;
  website: string; // honeypot: hidden from people, filled in by bots
};

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const INITIAL_VALUES: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  service: "",
  budget: "",
  message: "",
  agreed: false,
  website: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;

function validate(values: ContactFormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.firstName.trim()) errors.firstName = "Please enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Please enter your last name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) errors.phone = "Please enter a valid phone number.";
  if (!values.service) errors.service = "Please choose a service.";
  if (!values.message.trim()) errors.message = "Please tell us a little about your project.";
  if (!values.agreed) errors.agreed = "Please accept the terms and privacy policy.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const update = <K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (submitAttempted) setErrors(validate(next));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      focusField(firstInvalid);
      return;
    }

    // TODO: send `values` to the form backend (Web3Forms / Formspree / etc.) before launch.
    // Until then nothing is delivered — this only shows the success state. Skip sending when
    // `values.website` (the honeypot) is filled in.
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div role="status" className="flex min-h-80 flex-col items-start justify-center gap-6 rounded-lg bg-white p-8 sm:p-10">
        <p className="font-bebas text-5xl uppercase leading-none sm:text-6xl">
          {CONTACT_CONTENT.success.title}, {values.firstName.trim()}.
        </p>
        <p className="max-w-md text-base leading-relaxed text-black/70">{CONTACT_CONTENT.success.text}</p>
        <CornerButton
          onClick={() => {
            setValues(INITIAL_VALUES);
            setErrors({});
            setSubmitAttempted(false);
            setStatus("idle");
          }}
        >
          Send another message
        </CornerButton>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} aria-label="Contact form" className="grid gap-8 sm:grid-cols-2 sm:gap-x-8">
      <TextField
        name="firstName"
        label="First name"
        required
        autoComplete="given-name"
        value={values.firstName}
        onChange={(value) => update("firstName", value)}
        error={errors.firstName}
      />
      <TextField
        name="lastName"
        label="Last name"
        required
        autoComplete="family-name"
        value={values.lastName}
        onChange={(value) => update("lastName", value)}
        error={errors.lastName}
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
        value={values.email}
        onChange={(value) => update("email", value)}
        error={errors.email}
      />
      <TextField
        name="phone"
        label="Contact number"
        type="tel"
        autoComplete="tel"
        placeholder="+91 98765 43210"
        value={values.phone}
        onChange={(value) => update("phone", value)}
        error={errors.phone}
      />
      <SelectField
        name="country"
        label="Country"
        options={COUNTRY_OPTIONS}
        value={values.country}
        onChange={(value) => update("country", value)}
      />
      <SelectField
        name="service"
        label="Service"
        required
        options={SERVICE_OPTIONS}
        value={values.service}
        onChange={(value) => update("service", value)}
        error={errors.service}
      />
      <SelectField
        name="budget"
        label="Budget (USD)"
        options={BUDGET_OPTIONS}
        value={values.budget}
        onChange={(value) => update("budget", value)}
        className="sm:col-span-2"
      />
      <TextAreaField
        name="message"
        label="Message"
        required
        placeholder="Tell us about your project, goals and timeline."
        value={values.message}
        onChange={(value) => update("message", value)}
        error={errors.message}
        className="sm:col-span-2"
      />

      {/* Honeypot: kept out of view and out of the tab order for people. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        <Checkbox
          name="agreed"
          required
          checked={values.agreed}
          onChange={(checked) => update("agreed", checked)}
          error={errors.agreed}
        >
          I agree to the{" "}
          <Link href="/terms" className="font-medium text-[#111] underline underline-offset-4 hover:text-accent">
            Terms &amp; Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="font-medium text-[#111] underline underline-offset-4 hover:text-accent">
            Privacy Policy
          </Link>
          .
        </Checkbox>
      </div>

      <div className="sm:col-span-2">
        <CornerButton type="submit">Send message</CornerButton>
      </div>
    </form>
  );
}
