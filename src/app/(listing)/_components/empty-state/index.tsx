import { Button, Typography } from "@/app/_components";
import { PlusCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import noDataFound from "@/../public/no-data-found.svg";

interface IEmptyState {
  addRecord: () => void;
}

export const EmptyState = ({ addRecord }: IEmptyState) => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg bg-white">
    <Image
      src={noDataFound}
      width={336}
      height={336}
      alt="no users found"
      priority
    />
    <Typography>No users found</Typography>
    <Button variant={{ type: "text", color: "highlight" }}>
      <PlusCircle
        size={20}
        className="-mr-2"
        weight="bold"
        onClick={addRecord}
      />
      Add Requirement
    </Button>
  </div>
);
