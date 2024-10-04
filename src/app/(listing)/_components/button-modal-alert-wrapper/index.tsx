import { Button } from "@/app/_components";
import { PencilSimple } from "@phosphor-icons/react";
import { CheckCircle, Trash } from "@phosphor-icons/react/dist/ssr";
import {
  cloneElement,
  HtmlHTMLAttributes,
  ReactElement,
  useRef,
  useState
} from "react";
import { createPortal } from "react-dom";
import { VariantProps, tv } from "tailwind-variants";

const buttonModalAlertWrapper = tv({
  base: "relative w-16 rounded-2xl p-4",
  variants: {
    type: {
      success: "bg-success-light",
      danger: "bg-danger-light"
    }
  },
  defaultVariants: {
    type: "success"
  }
});

interface IButtonModalAlertWrapper extends HtmlHTMLAttributes<HTMLDivElement> {
  button: ReactElement<any, any>;
  variant?: VariantProps<typeof buttonModalAlertWrapper>;
}

export function ButtonModalAlertWrapper({
  button,
  variant,
  ...props
}: IButtonModalAlertWrapper) {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const backdropRef = useRef<HTMLDivElement>(null);

  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
    if (
      backdropRef.current &&
      !backdropRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  }

  function getIcon() {
    switch (variant?.type) {
      case "danger":
        return <Trash className="text-danger" size={32} />;
      default:
        return <CheckCircle className="text-success" size={32} />;
    }
  }

  return (
    <>
      {cloneElement(button, { onClick: onOpen })}
      {createPortal(
        <div
          {...props}
          className={`${open ? "visible bg-opacity-50" : "invisible bg-opacity-0"} fixed inset-0 z-20 flex items-center justify-center bg-primary transition-all duration-200`}
          onClick={handleBackdropClick}
        >
          <div
            ref={backdropRef}
            className={`${open ? "" : "scale-110 opacity-0"} flex w-[432px] flex-col items-center gap-6 rounded-2xl bg-white p-10 text-center transition-all duration-200`}
          >
            <div className={buttonModalAlertWrapper(variant)}>{getIcon()}</div>
            {props.children}
            <div className="flex w-full gap-[14px]">
              <Button
                variant={{ type: "outlined", color: "primary" }}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button variant={{ color: "danger" }}>{`Delete`}</Button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
