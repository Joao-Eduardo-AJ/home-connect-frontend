import { ButtonHTMLAttributes } from "react";

export const IconButton = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className={`rounded-full p-3 transition-all duration-500 hover:brightness-95 ${props.className}`}
  />
);
