import Button from "@/components/button";
import Typography from "@/components/typography";

export default function Home() {
  return (
    <main>
      <Typography variant="h1" className="text-[32px]">
        Hello World!
      </Typography>
      <Typography variant="p" className="text-xl">
        Inter
      </Typography>
      <div className="m-auto flex w-44 flex-col items-center justify-center gap-4">
        <Button>Contained</Button>
        <Button variant={{ type: "text", color: "primary" }}>Text</Button>
        <Button variant={{ color: "danger" }}>Danger</Button>
        <Button variant={{ type: "text", color: "danger" }}>Danger</Button>
        <Button variant={{ type: "outlined", color: "primary" }}>Cancel</Button>
        <Button variant={{ type: "text", color: "highlight" }}>Add user</Button>
      </div>
    </main>
  );
}
