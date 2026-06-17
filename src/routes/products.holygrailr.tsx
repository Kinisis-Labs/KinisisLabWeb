import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { useState } from "react";
import "./holygrailr.css";

export const Route = createFileRoute("/products/holygrailr")({
  head: () => ({
    meta: [
      { title: "HolyGrailR — The Ultimate TCG Marketplace | Kinisis Labs" },
      {
        name: "description",
        content:
          "HolyGrailR is the first all-in-one TCG marketplace — buy, sell, manage your collection, and connect with the community. Coming soon.",
      },
      { property: "og:title", content: "HolyGrailR — The Ultimate TCG Marketplace" },
      {
        property: "og:description",
        content: "The first all-in-one platform for Trading Card Game collectors and players.",
      },
    ],
  }),
  component: HolyGrailrPage,
});

function SignupForm({ ctaLabel, large = false }: { ctaLabel: string; large?: boolean }) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<{ text: string; color: string }>({ text: "", color: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    // TODO: wire to backend / Azure function
    console.log("Early access signup:", value);
    setEmail("");
    setMsg({ text: "🎉 You're on the list! We'll notify you at launch.", color: "#4ade80" });
    setTimeout(() => setMsg({ text: "", color: "" }), 6000);
  }

  return (
    <form className="hg-signup" onSubmit={onSubmit}>
      <div className={`hg-signup-row${large ? " hg-signup-row-lg" : ""}`}>
        <input
          type="email"
          placeholder="Enter your email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">{ctaLabel}</button>
      </div>
      <p className="hg-signup-note" style={{ color: msg.color || undefined }}>
        {msg.text}
      </p>
      <p className="hg-signup-legal">
        No spam. Just one email when we launch. Unsubscribe anytime.
      </p>
    </form>
  );
}

function HolyGrailrPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="hg-root flex-1">
        {/* Hero */}
        <div className="hg-hero">
          <div className="hg-hero-inner">
            <div className="hg-hero-badge">⚔️ Coming Soon</div>
            <h1>HolyGrailR</h1>
            <p className="hg-tagline">The Ultimate TCG Marketplace</p>
            <p className="hg-lead">
              The first all-in-one platform for Trading Card Game collectors and players. Buy, sell,
              manage your collection, and connect with the community — all in one place.
            </p>
            <SignupForm ctaLabel="Notify Me at Launch" />
            <div style={{ marginTop: 20 }}>
              <a href="#features" className="hg-btn-secondary">
                See Features
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="hg-stats-strip">
          <div className="hg-stats-inner">
            <div className="hg-stat">
              <div className="hg-stat-num">1st</div>
              <div className="hg-stat-label">All-in-one TCG platform</div>
            </div>
            <div className="hg-stat">
              <div className="hg-stat-num">AI</div>
              <div className="hg-stat-label">Powered card pricing</div>
            </div>
            <div className="hg-stat">
              <div className="hg-stat-num">3-in-1</div>
              <div className="hg-stat-label">Collection · Market · Community</div>
            </div>
            <div className="hg-stat">
              <div className="hg-stat-num">Soon</div>
              <div className="hg-stat-label">Web · iOS · Android</div>
            </div>
          </div>
        </div>

        {/* USP */}
        <div className="hg-usp-strip">
          <div className="hg-usp-inner">
            <div className="hg-usp-text">
              <h2>
                The TCG world was fragmented.
                <br />
                We fixed it.
              </h2>
              <p>
                Until now, collectors and players had to juggle multiple apps just to manage their
                hobby — one app to track their collection, another to buy and sell cards, and yet
                another to connect with fellow enthusiasts.
              </p>
              <p>
                HolyGrailR changes everything. We built the platform TCG fans have always deserved:
                a single, powerful app that handles it all.
              </p>
            </div>
            <div className="hg-usp-highlight">
              <p>
                "The first in-app marketplace and community space built specifically for TCG — all
                in one."
              </p>
              <p className="hg-sub">
                No more app-switching. No more fragmented experiences. Everything you need to
                collect, trade, and connect lives right here.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div id="features">
          <div className="hg-section-wrap">
            <div className="hg-section-label">What You Can Do</div>
            <h2 className="hg-section-title">Everything a TCG fan needs</h2>
            <p className="hg-section-sub">
              Whether you're a casual collector or a serious trader, HolyGrailR has the tools to
              level up your game.
            </p>

            <div className="hg-features-grid">
              <div className="hg-feature-card hg-fc-gold">
                <span className="hg-feature-icon">🃏</span>
                <h3>Collection Manager</h3>
                <p>
                  Upload and organize your entire card collection in one place. Track condition,
                  set, rarity, and value with ease. Your binder — digitized.
                </p>
              </div>
              <div className="hg-feature-card hg-fc-orange">
                <span className="hg-feature-icon">🏪</span>
                <h3>In-App Marketplace</h3>
                <p>
                  Buy and sell cards directly within the app. No redirects, no third-party checkout
                  — the first true TCG marketplace built into the platform itself.
                </p>
              </div>
              <div className="hg-feature-card hg-fc-purple">
                <span className="hg-feature-icon">🤖</span>
                <h3>AI-Powered Pricing</h3>
                <p>
                  Let intelligent pricing do the work. Our AI analyzes real market data to give you
                  accurate, up-to-date valuations for buying and selling.
                </p>
              </div>
              <div className="hg-feature-card hg-fc-blue">
                <span className="hg-feature-icon">💬</span>
                <h3>Community Boards</h3>
                <p>
                  Connect with TCG fans, share your pulls, debate meta, and swap knowledge on
                  dedicated community boards. Your people are here.
                </p>
              </div>
              <div className="hg-feature-card hg-fc-green">
                <span className="hg-feature-icon">📈</span>
                <h3>Portfolio Tracking</h3>
                <p>
                  Watch the value of your collection grow in real time. Know what you own, what it's
                  worth, and when it's time to sell.
                </p>
              </div>
              <div className="hg-feature-card hg-fc-pink">
                <span className="hg-feature-icon">🔍</span>
                <h3>Search & Discovery</h3>
                <p>
                  Find any card across any set with powerful search and filtering. Browse listings
                  or build your want list for easy hunting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hg-divider" />

        {/* AI Callout */}
        <div className="hg-ai-section" style={{ paddingTop: 80 }}>
          <div className="hg-ai-callout">
            <div className="hg-ai-orbs">
              <div className="hg-ai-orb hg-ai-orb-1" />
              <div className="hg-ai-orb hg-ai-orb-2" />
              <div className="hg-ai-orb hg-ai-orb-3" />
            </div>
            <div className="hg-ai-badge">⚡ AI Intelligence</div>
            <h2>
              Pricing that keeps up
              <br />
              with the market
            </h2>
            <p>
              Card values shift constantly. Our AI pricing engine continuously analyzes market
              trends and recent sales so every listing and purchase is grounded in real data —
              giving buyers confidence and sellers the best possible returns.
            </p>
          </div>
        </div>

        {/* Platform availability */}
        <div className="hg-section-wrap">
          <div className="hg-section-label">Availability</div>
          <h2 className="hg-section-title">Play anywhere</h2>
          <p className="hg-section-sub">
            HolyGrailR is launching soon across web, iOS, and Android. Be the first to know when we
            go live.
          </p>

          <div className="hg-platform-row">
            <div className="hg-platform-pill">
              <span className="hg-icon">🌐</span>
              <span>Web App</span>
              <span className="hg-status hg-status-soon">Coming Soon</span>
            </div>
            <div className="hg-platform-pill">
              <span className="hg-icon">🍎</span>
              <span>iOS App</span>
              <span className="hg-status hg-status-soon">Coming Soon</span>
            </div>
            <div className="hg-platform-pill">
              <span className="hg-icon">🤖</span>
              <span>Android App</span>
              <span className="hg-status hg-status-soon">Coming Soon</span>
            </div>
          </div>

          <div className="hg-age-notice">
            <span className="hg-icon">ℹ️</span>
            <p>
              <strong>Open to all ages.</strong> HolyGrailR is designed for TCG fans of all ages.
              Browsing, collecting, and managing your collection is available to everyone.
              Participation in the marketplace and community boards is restricted to users
              <strong> 18 years of age or older</strong>.
            </p>
          </div>
        </div>

        <div className="hg-divider" />

        {/* CTA */}
        <div className="hg-cta-section">
          <h2>
            Your collection
            <br />
            deserves a home.
          </h2>
          <p>Be among the first to experience the hobby the way it was meant to be.</p>
          <SignupForm ctaLabel="Get Early Access" large />
          <p className="hg-cta-from">
            A product by Kinisis Labs — Built for collectors, by builders.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
