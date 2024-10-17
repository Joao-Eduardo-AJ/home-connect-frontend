import { Button, Typography } from "@/app/_components";
import { X } from "@phosphor-icons/react/dist/ssr";
import { cloneElement, ReactElement, ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IconButton } from "../icon-button";

interface IButtonModalAsideWrapper {
  button: ReactElement<any, any>;
  children: ReactNode;
  type: "create" | "edit";
}

export function ButtonModalAsideWrapper({
  button,
  children,
  type
}: IButtonModalAsideWrapper) {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const backdropRef = useRef<HTMLDivElement>(null);
  if (typeof document === "undefined") return <></>;

  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
    if (
      backdropRef.current &&
      !backdropRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  }

  return (
    <>
      {cloneElement(button, { onClick: onOpen })}
      {createPortal(
        <div
          className={`fixed inset-0 z-20 flex justify-end bg-primary ${open ? "visible bg-opacity-50" : "invisible bg-opacity-0"} transition-all duration-200`}
          onClick={handleBackdropClick}
        >
          <aside
            ref={backdropRef}
            className={`flex h-dvh flex-col bg-white ${open ? (type === "edit" ? "w-[434px] p-10" : "w-[598px] p-10") : "w-0 p-0"} transition-all duration-500`}
          >
            <div className="flex items-center justify-between whitespace-nowrap border-b pb-3">
              <Typography variant="h4" className="text-2xl">
                {type}
              </Typography>
              <IconButton onClick={onClose}>
                <X size={24} />
              </IconButton>
            </div>
            {children}
          </aside>
        </div>,
        document.body
      )}
    </>
  );
}
