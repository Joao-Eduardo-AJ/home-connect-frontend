"use client";

import { Button, Logo, Typography } from "@/app/_components";
import {
  Handshake,
  SidebarSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { IconButton } from "../icon-button";

export default function NavAside() {
  const router = useRouter();

  return (
    <aside className="flex min-w-[268px] flex-col gap-10 bg-white px-4 py-6 transition-all duration-300">
      <div className="flex items-center justify-between pl-3">
        <div className="flex">
          <Logo />
          <div className="grid items-center">
            <Typography variant="h3" className="leading-[6px]">
              Home
            </Typography>
            <Typography variant="h3" className="leading-[6px]">
              Connect
            </Typography>
          </div>
        </div>
        <IconButton className="bg-white">
          <SidebarSimple size={20} />
        </IconButton>
      </div>
      <nav>
        <Button
          variant={{ justify: "start" }}
          onClick={() => router.push("/users")}
        >
          <UsersThree size={20} weight="fill" /> Users
        </Button>
        <Button
          variant={{ type: "text", color: "primary", justify: "start" }}
          onClick={() => router.push("/clients")}
          className="w-full after:left-2 after:top-[98%] after:translate-x-0"
        >
          <Handshake size={20} /> Clients
        </Button>
      </nav>
    </aside>
  );
}
