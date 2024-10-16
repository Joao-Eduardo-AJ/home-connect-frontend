import { Button, Typography } from "@/app/_components";
import { CheckCircle, Trash } from "@phosphor-icons/react/dist/ssr";
import { HtmlHTMLAttributes, useRef } from "react";
import { createPortal } from "react-dom";
import { tv, VariantProps } from "tailwind-variants";

interface IModalDelete extends HtmlHTMLAttributes<HTMLDivElement> {
  action?: () => void;
  onClose: () => void;
  open: boolean;
  selected: number | string;
}

export function ModalDelete({
  action,
  onClose,
  open,
  selected,
  ...props
}: IModalDelete) {
  const backdropRef = useRef<HTMLDivElement>(null);

  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
    if (
      backdropRef.current &&
      !backdropRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  }

  return createPortal(
    <div
      {...props}
      className={`${open ? "visible bg-opacity-50" : "invisible bg-opacity-0"} fixed inset-0 z-20 flex items-center justify-center bg-primary transition-all duration-200`}
      onClick={handleBackdropClick}
    >
      <div
        ref={backdropRef}
        className={`${open ? "" : "scale-110 opacity-0"} flex w-[432px] flex-col items-center gap-6 rounded-2xl bg-white p-10 text-center transition-all duration-200`}
      >
        <div className="relative w-16 rounded-2xl bg-danger-light p-4">
          <Trash className="text-danger" size={32} />
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="h6">{`Delete ${selected} users`}</Typography>
          <Typography variant="p">{`Are you sure you want to delete ${selected} users?`}</Typography>
        </div>
        <div className="flex w-full gap-[14px]">
          <Button
            variant={{ type: "outlined", color: "primary" }}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant={{ color: "danger" }}
            onClick={() => action && action()}
          >{`Delete`}</Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
