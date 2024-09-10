"use client";
import { InputHTMLAttributes, useRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export function SearchInput({ ...props }: InputProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    wrapperRef.current?.classList.add("focused");
  };
  const handleBlur = () => {
    if (inputRef.current?.value) return;
    wrapperRef.current?.classList.remove("focused");
  };
  return (
    <div
      ref={wrapperRef}
      className="search-input-wrapper relative z-10 flex h-11 max-w-60 rounded-lg bg-white after:bg-disabled"
    >
      <input
        {...props}
        ref={inputRef}
        className="bg-[rgba(0,0,0,0)] px-4 text-sm text-disabled-gray outline-none transition-all delay-100 duration-300"
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
      />
    </div>
  );
}
