import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import holygrailrLogo from "@/assets/holygrailr-logo.svg";
import briktradeLogo from "@/assets/briktrade-logo.svg";
import sportfolioLogo from "@/assets/sportfolio-logo.svg";
import nowiqLogo from "@/assets/nowiq-logo.svg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Kinisis Labs" },
      { name: "description", content: "Products from Kinisis Labs." },
    ],
  }),
  component: ProductsLayout,
});

const products = [
  { to: "/products/holygrailr", label: "HolyGrailr" },
  { to: "/products/briktrade", label: "Briktrade" },
  { to: "/products/sportfolio-cards", label: "Sportfolio Cards" },
  { to: "/products/now-iq", label: "Now-IQ" },
] as const;

function ProductsLayout() {
  const matchRoute = useMatchRoute();
  const isIndex = !!matchRoute({ to: "/products", fuzzy: false });

  if (!isIndex) return <Outlet />;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-primary">Our products</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Explore the products we're building at Kinisis Labs.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {products.map((p) => {
            const logo =
              p.to === "/products/holygrailr"
                ? { src: holygrailrLogo, alt: "HolyGrailR — The Ultimate TCG Marketplace" }
                : p.to === "/products/briktrade"
                ? { src: briktradeLogo, alt: "BrikTrade — Buy, Sell & Collect LEGO" }
                : p.to === "/products/sportfolio-cards"
                ? { src: sportfolioLogo, alt: "Sportfolio Cards — The Global Sports Card Marketplace" }
                : p.to === "/products/now-iq"
                ? { src: nowiqLogo, alt: "Now-IQ" }
                : null;
            return (
              <Link
                key={p.to}
                to={p.to}
                className="group rounded-lg border border-border/60 overflow-hidden text-left transition-colors hover:border-foreground/40 hover:bg-accent/30"
              >
                {logo ? (
                  <img src={logo.src} alt={logo.alt} className="w-full h-auto block" />
                ) : (
                  <div className="px-5 py-6">
                    <span className="text-lg font-medium">{p.label}</span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
