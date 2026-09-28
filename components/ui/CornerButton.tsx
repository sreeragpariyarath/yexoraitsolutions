import type { ButtonHTMLAttributes, ReactNode } from "react";
import { CORNER_FRAME_CLASS, CornerFrame } from "./CornerFrame";

type CornerButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  children: ReactNode;
};

export function CornerButton({ children, type = "button", ...props }: CornerButtonProps) {
  return (
    <button
      type={type}
      className={`${CORNER_FRAME_CLASS} cursor-pointer disabled:cursor-not-allowed disabled:opacity-50`}
      {...props}
    >
      <CornerFrame />
      <span className="relative">{children}</span>
    </button>
  );
}
