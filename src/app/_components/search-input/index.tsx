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
      className="search-input-wrapper before:border-disabled after:bg-disabled relative z-10 flex h-11 rounded-lg bg-white focus:before:border-primary-border"
    >
      <input
        {...props}
        ref={inputRef}
        className="focus text-disabled bg-[rgba(0,0,0,0)] px-4 text-sm outline-none"
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
      />
    </div>
  );
}
