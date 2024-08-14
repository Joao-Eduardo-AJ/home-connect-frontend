"use client";

import { Button, Input, Logo, Typography } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

import homePreview from "../../public/home-preview.svg";

function Home() {
  const router = useRouter();
  function handleSubmit() {
    router.push("/users");
  }

  return (
    <main className="flex h-dvh">
      <section className="relative flex w-full items-center justify-center">
        <div className="absolute left-6 top-6 flex items-center gap-1">
          <Logo />
          <Typography variant="h1" className="text-xl">
            HomeConnect
          </Typography>
        </div>
        <article className="grid w-full max-w-[496px] gap-10 rounded-2xl bg-white p-10">
          <header className="grid gap-2 text-center">
            <Typography variant="h2">Log into your account</Typography>
            <Typography className="text-secondary">
              Contact your manager to have your access
            </Typography>
          </header>
          <div className="grid gap-4">
            <Input
              variant={{ type: "outlined" }}
              name="email"
              label="Email"
              placeholder="Email"
            />
            <Input
              variant={{ type: "outlined" }}
              name="password"
              label="Password"
              placeholder="Password"
            />
            <Button onClick={handleSubmit}>Login</Button>
          </div>
          <footer className="grid text-center">
            <Typography variant="span" className="text-sm text-secondary">
              {`By continuing, you agree to Scrut`}
            </Typography>
            <Typography variant="span" className="text-sm text-secondary">
              {`Automation's Terms of service and Privacy Policy`}
            </Typography>
          </footer>
        </article>
      </section>
      <aside className="row relative grid w-full grid-rows-12 justify-center overflow-hidden bg-highlight">
        <div className="z-10 row-start-3 text-center">
          <Typography variant="h3" className="text-white">
            Welcome!
          </Typography>
          <Typography className="text-white">
            Stay awere, stay ahead, stay compliant.
          </Typography>
        </div>
        <div className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-bg-ball rounded-full bg-highlight-aux blur-[128px]" />
        <Image
          src={homePreview}
          width={516}
          height={367}
          alt="home page preview"
          priority
          className="z-10 row-span-10 pt-14"
        />
      </aside>
    </main>
  );
}

export default Home;
