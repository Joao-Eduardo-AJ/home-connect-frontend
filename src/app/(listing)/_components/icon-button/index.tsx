import { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium";
}

export const IconButton = ({ size, ...props }: IconButtonProps) => (
  <button
    {...props}
    className={`rounded-full ${size === "medium" ? "p-3" : "p-2"} transition-all duration-500 hover:brightness-95 ${props.className}`}
  />
);
