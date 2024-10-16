import { Button, Typography } from "@/app/_components";
import { CheckCircle, Trash } from "@phosphor-icons/react/dist/ssr";
import { act, HtmlHTMLAttributes, useRef } from "react";
import { createPortal } from "react-dom";

interface IModalSuccess extends HtmlHTMLAttributes<HTMLDivElement> {
  action?: () => void;
  onClose: () => void;
  open: boolean;
  selected: number | string;
}

export function ModalSuccess({
  action,
  onClose,
  open,
  selected,
  ...props
}: IModalSuccess) {
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
        <div className="relative w-16 rounded-2xl bg-success-light p-4">
          <CheckCircle className="text-success" size={32} />
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="h6">{`User edited successfully`}</Typography>
        </div>
        <div className="flex w-full gap-[14px]">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
