import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kinisis Labs — Engineering motion into intelligent systems" },
      {
        name: "description",
        content:
          "Kinisis Labs builds intelligent systems and engineering tools that turn motion into insight.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--gradient-hero)" }}>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pt-24 pb-32 text-center">
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight">
            Engineering in{" "}
            <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">
              Motion
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Kinisis Labs designs and delivers apps at the intersection of engineering, automation,
            and applied intelligence — turning movement and signal into decisions.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-6 sm:grid-cols-3">
          {[
            { t: "Precision", d: "Systems engineered with rigor — from sensor to inference." },
            { t: "Velocity", d: "Small team, modern tooling, shipping at startup pace." },
            { t: "Clarity", d: "Software that explains itself to the people who depend on it." },
          ].map((f) => (
            <div
              key={f.t}
              className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
