import { HTMLAttributes } from "react";

export const SectionListing = ({ ...props }: HTMLAttributes<HTMLElement>) => (
  <section {...props} className="flex w-full flex-col gap-10 px-10 py-6" />
);
