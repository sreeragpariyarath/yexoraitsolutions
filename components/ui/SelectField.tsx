"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Check, ChevronDown } from "lucide-react";
import { FieldShell, controlClass, describedBy, fieldId, type FieldBaseProps } from "./FormField";

type SelectFieldProps = FieldBaseProps & {
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder?: string;
};

// Styled select-only combobox (WAI-ARIA pattern): focus stays on the trigger button and the
// highlighted option is exposed through aria-activedescendant.
export function SelectField({ value, onChange, options, placeholder = "Select…", ...base }: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const id = fieldId(base.name);
  const listId = `${id}-listbox`;
  const optionId = (index: number) => `${id}-option-${index}`;

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (open && activeIndex >= 0) {
      document.getElementById(`${id}-option-${activeIndex}`)?.scrollIntoView({ block: "nearest" });
    }
  }, [open, activeIndex, id]);

  const openList = () => {
    setActiveIndex(Math.max(options.indexOf(value), 0));
    setOpen(true);
  };

  const choose = (index: number) => {
    onChange(options[index]);
    setOpen(false);
    buttonRef.current?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (open) setActiveIndex((index) => Math.min(index + 1, options.length - 1));
        else openList();
        break;
      case "ArrowUp":
        event.preventDefault();
        if (open) setActiveIndex((index) => Math.max(index - 1, 0));
        else openList();
        break;
      case "Home":
        if (open) {
          event.preventDefault();
          setActiveIndex(0);
        }
        break;
      case "End":
        if (open) {
          event.preventDefault();
          setActiveIndex(options.length - 1);
        }
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (open && activeIndex >= 0) choose(activeIndex);
        else openList();
        break;
      case "Escape":
        if (open) {
          event.preventDefault();
          setOpen(false);
        }
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        // Type-to-jump: first option starting with the typed character.
        if (event.key.length === 1) {
          const match = options.findIndex((option) => option.toLowerCase().startsWith(event.key.toLowerCase()));
          if (match >= 0) {
            if (!open) setOpen(true);
            setActiveIndex(match);
          }
        }
    }
  };

  return (
    <FieldShell {...base}>
      <div ref={rootRef} className="relative">
        <button
          ref={buttonRef}
          id={id}
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={`${id}-label ${id}`}
          aria-activedescendant={open && activeIndex >= 0 ? optionId(activeIndex) : undefined}
          aria-required={base.required}
          aria-invalid={Boolean(base.error)}
          aria-describedby={describedBy(base.name, base.error)}
          onClick={() => (open ? setOpen(false) : openList())}
          onKeyDown={onKeyDown}
          className={`${controlClass(Boolean(base.error))} flex cursor-pointer items-center justify-between gap-3 text-left`}
        >
          <span className={value ? "" : "text-black/35"}>{value || placeholder}</span>
          <ChevronDown
            aria-hidden="true"
            size={18}
            className={`shrink-0 text-black/50 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <ul
          id={listId}
          role="listbox"
          aria-labelledby={`${id}-label`}
          data-lenis-prevent
          onMouseDown={(event) => event.preventDefault()}
          className={`absolute inset-x-0 top-full z-30 mt-2 max-h-72 origin-top overflow-y-auto rounded-lg border border-black/10 bg-white py-2 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.18)] transition-[opacity,translate,visibility] duration-200 ease-out ${
            open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
          }`}
        >
          {options.map((option, index) => {
            const isSelected = option === value;
            const isActive = index === activeIndex;
            return (
              <li
                key={option}
                id={optionId(index)}
                role="option"
                aria-selected={isSelected}
                onClick={() => choose(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5 text-base transition-colors ${
                  isActive ? "bg-black/5" : ""
                } ${isSelected ? "font-medium text-[#111]" : "text-black/75"}`}
              >
                {option}
                {isSelected && <Check aria-hidden="true" size={16} className="shrink-0 text-accent" />}
              </li>
            );
          })}
        </ul>
      </div>
    </FieldShell>
  );
}
