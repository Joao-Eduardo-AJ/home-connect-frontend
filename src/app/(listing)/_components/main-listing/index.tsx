import { HTMLAttributes } from "react";

export const MainListing = ({ ...props }: HTMLAttributes<HTMLElement>) => (
  <main {...props} className="flex h-dvh w-full flex-col gap-10 px-10 py-6" />
);
