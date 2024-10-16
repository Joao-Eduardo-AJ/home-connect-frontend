import { Typography } from "@/app/_components";
import { ButtonHTMLAttributes, cloneElement } from "react";
import { IconButton } from "../icon-button";

interface ICreationStep extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: JSX.Element;
  reached: boolean;
  title: string;
}

export function CreationStep({
  Icon,
  reached,
  title,
  ...props
}: ICreationStep) {
  return (
    <div className="flex items-center gap-3 after:w-10 after:border-b after:border-primary-border last:after:content-none">
      <IconButton
        {...props}
        size="medium"
        className={`border ${reached ? "bg-primary" : "border-primary-border bg-white"}`}
      >
        {cloneElement(Icon, {
          size: 20,
          color: reached ? "#FFFFFF" : "#606A73",
          weight: reached ? "fill" : "regular"
        })}
      </IconButton>
      <Typography
        variant="h6"
        className={`whitespace-nowrap ${!reached ? "text-secondary" : ""}`}
      >
        {title}
      </Typography>
    </div>
  );
}
