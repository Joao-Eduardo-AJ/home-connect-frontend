import NavAside from "./_components/nav-aside";

export default function ListingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-dvh">
      <NavAside />
      {children}
    </main>
  );
}
