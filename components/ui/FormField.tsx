import type { ReactNode } from "react";

export const FIELD_LABEL_CLASS = "text-xs font-semibold uppercase tracking-[0.14em] text-black/60";

// Hairline underline that thickens on focus (via box-shadow, so nothing shifts) and turns red on error.
export const controlClass = (hasError: boolean) =>
  `mt-2 w-full border-0 border-b bg-transparent px-0 py-3 text-base text-[#111] placeholder:text-black/35 transition-[border-color,box-shadow] focus:outline-none ${
    hasError
      ? "border-red-600 focus:shadow-[0_1px_0_0_#dc2626]"
      : "border-black/20 focus:border-[#111] focus:shadow-[0_1px_0_0_#111]"
  }`;

export type FieldBaseProps = {
  name: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
};

export const fieldId = (name: string) => `contact-${name}`;

export function FieldShell({ name, label, required, error, className = "", children }: FieldBaseProps & { children: ReactNode }) {
  return (
    <div className={className}>
      <label id={`${fieldId(name)}-label`} htmlFor={fieldId(name)} className={FIELD_LABEL_CLASS}>
        {label}
        {required && (
          <span aria-hidden="true" className="text-[#2f6bff]">
            {" "}*
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${fieldId(name)}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export const describedBy = (name: string, error?: string) => (error ? `${fieldId(name)}-error` : undefined);

type TextFieldProps = FieldBaseProps & {
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  autoComplete?: string;
};

export function TextField({ value, onChange, type = "text", placeholder, autoComplete, ...base }: TextFieldProps) {
  return (
    <FieldShell {...base}>
      <input
        id={fieldId(base.name)}
        name={base.name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={base.required}
        aria-invalid={Boolean(base.error)}
        aria-describedby={describedBy(base.name, base.error)}
        className={controlClass(Boolean(base.error))}
      />
    </FieldShell>
  );
}


type TextAreaFieldProps = FieldBaseProps & {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
};

export function TextAreaField({ value, onChange, placeholder, rows = 5, ...base }: TextAreaFieldProps) {
  return (
    <FieldShell {...base}>
      <textarea
        id={fieldId(base.name)}
        name={base.name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        required={base.required}
        aria-invalid={Boolean(base.error)}
        aria-describedby={describedBy(base.name, base.error)}
        className={`${controlClass(Boolean(base.error))} resize-y`}
      />
    </FieldShell>
  );
}

type CheckboxProps = {
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

export function Checkbox({ name, checked, onChange, required, error, children }: CheckboxProps) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={fieldId(name)}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy(name, error)}
          className="mt-0.5 size-4 shrink-0 cursor-pointer accent-[#111] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
        />
        <label htmlFor={fieldId(name)} className="text-sm leading-relaxed text-black/70">
          {children}
        </label>
      </div>
      {error && (
        <p id={`${fieldId(name)}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function focusField(name: string) {
  document.getElementById(fieldId(name))?.focus();
}
