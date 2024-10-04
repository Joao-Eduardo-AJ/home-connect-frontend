import { InputHTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const inputLabel = tv({
  base: "flex text-sm text-primary font-rethink whitespace-nowrap",
  variants: {
    type: {
      outlined: "flex-col",
      text: "items-center border-b last:border-0"
    }
  },
  defaultVariants: {
    type: "text"
  }
});

const span = tv({
  variants: {
    type: {
      outlined: "font-bold",
      text: "font-light text-secondary"
    }
  },
  defaultVariants: {
    type: "text"
  }
});

const input = tv({
  base: "pl-4 py-3 font-light outline-none w-full",
  variants: {
    type: {
      outlined: "border border-primary-border h-11 rounded-lg",
      text: "text-end bg-[rgba(0,0,0,0)] h-[42px]"
    }
  },
  defaultVariants: {
    type: "text"
  }
});

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: VariantProps<typeof input>;
  label: string;
}

export const Input = ({ variant, label, ...props }: InputProps) => (
  <label className={inputLabel(variant)}>
    <span className={span(variant)}>{label}</span>
    <input {...props} className={input(variant)} />
  </label>
);
