import { Bell, PlusCircle } from "@phosphor-icons/react/dist/ssr";
import { IconButton, MainListing } from "../_components";
import { Button, SearchInput, Typography } from "@/app/_components";
import Image from "next/image";
import noDataFound from "@/../public/no-data-found.svg";

function Users() {
  return (
    <MainListing>
      <IconButton className="group self-end bg-gray-scale-50">
        <Bell
          size={20}
          className="duration-500 group-hover:scale-110 group-hover:animate-bell-icon"
        />
      </IconButton>
      <div className="flex items-center justify-between">
        <Typography variant="h2">Users</Typography>
        <div className="flex gap-4">
          <SearchInput placeholder="Search by name" />
          <Button>
            <PlusCircle size={20} className="-mr-2" weight="bold" />
            Add new user
          </Button>
        </div>
      </div>
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
          <PlusCircle size={20} className="-mr-2" weight="bold" />
          Add Requirement
        </Button>
      </div>
    </MainListing>
  );
}
export default Users;
