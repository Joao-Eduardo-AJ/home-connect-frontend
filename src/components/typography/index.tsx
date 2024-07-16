import { HtmlHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const typography = tv({
  base: "cursor-default text-primary",
  variants: {
    type: {
      "header-default":
        "font-rethink leading-[130%] tracking-tighter font-bold",
      "content-default": "font-inter leading-[120%]"
    }
  }
});
interface TypographyProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "strong";
}

const Typography = ({
  variant: Element = "p",
  children,
  ...props
}: TypographyProps) => {
  const Tag = Element;
  const isHeader = Element !== "p" && Element !== "strong";

  return (
    <Tag
      {...props}
      className={`${typography({
        type: isHeader ? "header-default" : "content-default"
      })} + ${props.className}`}
    >
      {children}
    </Tag>
  );
};

export default Typography;
