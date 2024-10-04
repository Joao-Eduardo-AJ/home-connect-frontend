import { HtmlHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const typography = tv({
  base: "cursor-default text-primary",
  variants: {
    type: {
      "header-default": "font-rethink leading-[130%] font-bold text-[32px]",
      "content-default": "font-inter leading-[120%]"
    }
  }
});
interface ITypography extends HtmlHTMLAttributes<HTMLParagraphElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "strong" | "span";
}

export function Typography({
  variant: Element = "p",
  children,
  ...props
}: ITypography) {
  const Tag = Element;
  const isHeader =
    Element !== "p" && Element !== "strong" && Element !== "span";

  return (
    <Tag
      {...props}
      className={`${typography({
        type: isHeader ? "header-default" : "content-default"
      })} ${props.className}`}
    >
      {children}
    </Tag>
  );
}
