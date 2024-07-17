"use client";
import { ButtonHTMLAttributes, MouseEvent, useRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex px-4 py-3 rounded-lg font-rethink font-bold w-full gap-2 relative overflow-hidden before:duration-1000 before:absolute before:top-[var(--y)] before:left-[var(--x)] before:w-[0%] before:h-[0%] before:rounded-full hover:before:w-[225%] hover:before:h-[800%] before:-translate-x-1/2 before:-translate-y-1/2",
  variants: {
    type: {
      contained: "bg-primary before:bg-hovered-light",
      outlined: "border border-borderPrimary before:bg-hovered-dark",
      text: "before:bg-hovered-dark p-0 w-auto"
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end"
    },
    color: {
      primary: "text-primary",
      white: "text-white",
      danger: "text-danger",
      highlight: "text-highlight"
    }
  },
  compoundVariants: [
    {
      type: "contained",
      color: "danger",
      class: "bg-danger text-white before:bg-hovered-dark"
    }
  ],

  defaultVariants: {
    type: "contained",
    justify: "center",
    color: "white"
  }
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof button>;
}

const Button = ({ variant, ...props }: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  function onMouseMove(e: MouseEvent<HTMLButtonElement | MouseEvent>) {
    const x = e.pageX - (ref.current?.offsetLeft || 0);
    const y = e.pageY - (ref.current?.offsetTop || 0);

    ref.current?.style.setProperty("--x", x + "px");
    ref.current?.style.setProperty("--y", y + "px");
  }

  return (
    <button
      {...props}
      ref={ref}
      onMouseMove={e => onMouseMove(e)}
      className={button(variant)}
    />
  );
};

export default Button;
