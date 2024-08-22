import {
  Handshake,
  SidebarSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import { Button, Logo, Typography } from "../_components";
import NavAside from "./_components/nav-aside";

export default function ListingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <NavAside />
      {children}
    </main>
  );
}
