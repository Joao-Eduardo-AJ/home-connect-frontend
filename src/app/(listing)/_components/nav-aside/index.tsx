"use client";

import { Button, Logo, Typography } from "@/app/_components";
import {
  Handshake,
  SidebarSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

export default function NavAside() {
  const router = useRouter();

  return (
    <aside className="flex h-dvh min-w-[268px] flex-col gap-10 bg-white px-4 py-6 transition-all duration-300">
      <div className="flex items-center justify-between pl-3">
        <div className="flex">
          <Logo />
          <div className="grid items-center">
            <Typography variant="h3" className="text-base leading-3">
              Home
            </Typography>
            <Typography variant="h3" className="text-base leading-3">
              Connect
            </Typography>
          </div>
        </div>
        <button className="rounded-full p-3 transition-all duration-500 hover:bg-gray-scale-50">
          <SidebarSimple size={20} />
        </button>
      </div>
      <nav>
        <Button
          variant={{ justify: "start" }}
          onClick={() => router.push("/users")}
        >
          <UsersThree size={20} /> Users
        </Button>
        <Button
          variant={{ type: "text", color: "primary", justify: "start" }}
          onClick={() => router.push("/clients")}
        >
          <Handshake size={20} /> Clients
        </Button>
      </nav>
    </aside>
  );
}
