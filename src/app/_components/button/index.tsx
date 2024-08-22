"use client";
import { ButtonHTMLAttributes, MouseEvent, useRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

// Unfortunately, we can't do variant grouping in tailwind CSS.
// So... I just used globals.css to style the "before" and "after"
// of this component, as well as its hovers.
const button = tv({
  base: "button-base flex items-center gap-4 px-4 py-3 font-rethink font-bold relative overflow-hidden disabled:opacity-50",
  variants: {
    type: {
      contained: "button-contained bg-primary rounded-lg w-full",
      outlined:
        "button-outlined before:border-primary-border after:border-primary-border hover:before:border-l hover:before:border-b hover:after:border-t hover:after:border-r w-full",
      text: "button-text w-full"
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end"
    },
    color: {
      primary: "text-primary after:bg-primary",
      white: "text-white before:bg-hovered-light",
      danger: "text-danger after:bg-danger before:bg-hovered-dark",
      highlight: "text-highlight after:bg-highlight after:ease-in"
    },
    size: {
      default: "h-11",
      bigger: ""
    }
  },
  compoundVariants: [
    {
      type: "contained",
      color: "danger",
      class: "bg-danger text-white"
    },
    {
      type: "outlined",
      class: "after:bg-opacity-0"
    }
  ],

  defaultVariants: {
    type: "contained",
    justify: "center",
    color: "white",
    size: "default"
  }
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof button>;
}

export function Button({ variant, ...props }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  function onMouseHover() {
    if (variant?.type !== "outlined") return;
    setTimeout(() => ref.current?.classList.toggle("before:rounded-lg"), 250);
    setTimeout(() => ref.current?.classList.toggle("after:rounded-lg"), 250);
  }

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
      onMouseEnter={onMouseHover}
      onMouseLeave={onMouseHover}
      onMouseMove={e => onMouseMove(e)}
      className={button(variant)}
    />
  );
}
