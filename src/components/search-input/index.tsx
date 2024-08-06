"use client";
import {
  InputHTMLAttributes,
  LegacyRef,
  RefAttributes,
  RefObject,
  useRef
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
const SearchInput = ({ ...props }: InputProps) => {
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
      className="search-input-wrapper relative z-10 flex h-11 rounded-lg bg-white before:border-disabled after:bg-disabled focus:before:border-primary-border"
    >
      <input
        {...props}
        ref={inputRef}
        className="focus bg-[rgba(0,0,0,0)] px-4 text-sm text-disabled outline-none"
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
      />
    </div>
  );
};

export default SearchInput;
