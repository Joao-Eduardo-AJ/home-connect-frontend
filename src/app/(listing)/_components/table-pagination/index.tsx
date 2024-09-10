"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { ButtonHTMLAttributes, HTMLAttributes, useRef, useState } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const NavButton = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="flex h-10 w-10 items-center justify-center rounded-lg border border-disabled bg-gray-scale-50 text-primary transition-all duration-300 hover:brightness-95 disabled:text-disabled-gray disabled:brightness-100"
  />
);

const Button = ({ selected, ...props }: IButton) => (
  <button
    {...props}
    className={`${selected ? "bg-primary font-semibold text-white" : "bg-gray-scale-50 text-secondary hover:brightness-95"} min-h-10 min-w-10 rounded-lg transition-all duration-300`}
  />
);

interface ITablePagination {
  count: number;
}

export const TablePagination = ({ count }: ITablePagination) => {
  const [page, setPage] = useState(0);
  const [linesPerPage, setLinesPerPage] = useState(10);
  const ref = useRef<HTMLDivElement>(null);

  const handlePage = (newPage: number) => {
    setPage(newPage);
    handleScrollToIndex(newPage);
  };

  const handleScrollToIndex = (newPage: number) => {
    if (ref.current) {
      const left = (newPage - 1) * 44;
      ref.current.scrollTo({
        left,
        behavior: "smooth"
      });
    }
  };

  const lastPage = Math.ceil(count / linesPerPage);

  return (
    <div className="flex gap-1 self-end">
      <NavButton disabled={page === 0} onClick={() => handlePage(page - 1)}>
        <CaretLeft size={20} className="nav-icon" />
      </NavButton>
      {page > 1 && lastPage > 4 && (
        <Button onClick={() => handlePage(0)}>{1}</Button>
      )}
      <div
        ref={ref}
        className={`flex ${lastPage === 4 ? "max-w-[216px]" : lastPage === 3 || page <= 1 || page >= lastPage - 2 ? "max-w-[172px]" : "max-w-32"} snap-x snap-mandatory gap-1 overflow-x-hidden scroll-smooth whitespace-nowrap`}
      >
        {Array.from({ length: lastPage }, (_, i) => (
          <Button key={i} onClick={() => handlePage(i)} selected={page === i}>
            {i + 1}
          </Button>
        ))}
      </div>
      {page < lastPage - 2 && lastPage > 4 && (
        <Button onClick={() => handlePage(lastPage - 1)}>{lastPage}</Button>
      )}
      <NavButton
        disabled={page + 1 === lastPage}
        onClick={() => handlePage(page + 1)}
      >
        <CaretRight size={20} className="nav-icon" />
      </NavButton>
    </div>
  );
};
