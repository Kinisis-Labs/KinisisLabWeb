import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kinisis Labs" },
      { name: "description", content: "Kinisis Labs is a small engineering studio building intelligent systems for motion, automation, and industry." },
      { property: "og:title", content: "About Kinisis Labs" },
      { property: "og:description", content: "A small engineering studio building intelligent systems." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-primary">About us</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight">A studio for intelligent systems.</h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Kinisis Labs — from <em>kinisis</em>, the Greek word for movement — is an engineering
            studio focused on the software that turns motion, sensor data, and operational signal
            into useful action.
          </p>
          <p>
            We work across applied AI, automation, and applications. Our background spans
            IT systems, integrations, web platforms, and mobile applications — and we bring that
            range to every product we build.
          </p>
          <p>
            We're a small team by design. We pick problems carefully, deliver quality, and stay close to
            the people using what we make.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border/80 bg-card/60 p-6">
            <h3 className="font-semibold">Our focus</h3>
            <p className="mt-2 text-sm text-muted-foreground">Applied intelligence, automation tooling, and engineering software.</p>
          </div>
          <div className="rounded-xl border border-border/80 bg-card/60 p-6">
            <h3 className="font-semibold">Our approach</h3>
            <p className="mt-2 text-sm text-muted-foreground">Rigor over hype. Small surface area. Clear interfaces. Real users.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
