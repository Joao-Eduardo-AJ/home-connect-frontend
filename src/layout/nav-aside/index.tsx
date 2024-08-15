import { Logo, Typography } from "@/components";

export function NavAside() {
  return (
    <aside className="grid w-[268px] gap-10 px-4 py-6">
      <div className="flex justify-between">
        <div className="flex">
          <Logo />
          <Typography variant="h3">Home Connect</Typography>
        </div>
        <div className="h-4 w-4 bg-black">a</div>
      </div>
      <nav></nav>
    </aside>
  );
}
