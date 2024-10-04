import { Typography } from "@/app/_components";
import { HtmlHTMLAttributes } from "react";

interface ITable extends HtmlHTMLAttributes<HTMLTableElement> {
  captionOpened?: boolean;
}

export const Root = ({ captionOpened, ...props }: ITable) => (
  <table
    {...props}
    className={` ${captionOpened ? "mt-[72px]" : ""} relative transition-all duration-500`}
  />
);

interface ICaption extends HtmlHTMLAttributes<HTMLTableCaptionElement> {
  open: boolean;
}

export const Caption = ({ open, ...props }: ICaption) => (
  <caption
    {...props}
    className={`${open ? "h-14 border" : "h-0"} absolute -top-4 flex w-full -translate-y-full items-center justify-between overflow-hidden rounded-lg border-primary-border bg-white px-4 transition-all duration-500`}
  />
);

export const Row = ({ ...props }: HtmlHTMLAttributes<HTMLTableRowElement>) => (
  <tr {...props} className="px-3 odd:bg-tertiary even:bg-white" />
);

export const Head = ({
  children,
  ...props
}: HtmlHTMLAttributes<HTMLParagraphElement>) => (
  <th {...props} className="h-8 px-3">
    <Typography className="truncate text-start font-rethink text-sm font-medium text-secondary">
      {children}
    </Typography>
  </th>
);

export const Data = ({
  children,
  ...props
}: HtmlHTMLAttributes<HTMLParagraphElement>) => (
  <td className="max-w-24 px-3 xl:max-w-32 1.5xl:max-w-40 2xl:max-w-full">
    <Typography {...props} className="truncate text-sm font-semibold">
      {children}
    </Typography>
  </td>
);
