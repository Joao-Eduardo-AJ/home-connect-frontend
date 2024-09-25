import { Button } from "@/app/_components";
import { PencilSimple } from "@phosphor-icons/react";
import { CheckCircle, Trash } from "@phosphor-icons/react/dist/ssr";
import { HtmlHTMLAttributes, useState } from "react";
import { createPortal } from "react-dom";
import { VariantProps, tv } from "tailwind-variants";

const buttonModalWrapper = tv({
  base: "relative w-16 rounded-2xl p-4",
  variants: {
    type: {
      edit: "bg-success-light",
      delete: "bg-danger-light"
    }
  },
  defaultVariants: {
    type: "edit"
  }
});

interface ButtonModalWrapperProps extends HtmlHTMLAttributes<HTMLDivElement> {
  buttonText: string;
  variant?: VariantProps<typeof buttonModalWrapper>;
}

export function ButtonModalWrapper({
  buttonText,
  variant,
  ...props
}: ButtonModalWrapperProps) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(prev => !prev);

  function getButton() {
    switch (variant?.type) {
      case "delete":
        return (
          <Button
            variant={{ type: "text", color: "danger" }}
            onClick={toggleOpen}
          >
            <Trash size={20} className="-mr-2" />
            {buttonText}
          </Button>
        );
      default:
        return (
          <Button
            variant={{ type: "text", color: "primary" }}
            onClick={toggleOpen}
          >
            <PencilSimple size={20} className="-mr-2" />
            {buttonText}
          </Button>
        );
    }
  }

  function getIcon() {
    switch (variant?.type) {
      case "delete":
        return <Trash className="text-danger" size={32} />;
      default:
        return <CheckCircle className="text-success" size={32} />;
    }
  }

  return (
    <>
      {getButton()}
      {open &&
        createPortal(
          <div
            {...props}
            className="absolute top-0 z-20 flex h-full w-full items-center justify-center bg-primary bg-opacity-50"
            onClick={toggleOpen}
          >
            <div className="flex w-[432px] flex-col items-center gap-6 rounded-2xl bg-white p-10 text-center">
              <div className={buttonModalWrapper(variant)}>{getIcon()}</div>
              {props.children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
