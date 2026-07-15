import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Lazar Jovičić",
  description: "Blog posts on QA, automation, and shipping reliable software. Coming soon.",
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <p className="font-mono text-lg text-foreground">Available soon!</p>
    </main>
  );
}
