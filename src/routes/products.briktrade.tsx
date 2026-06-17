import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { useState } from "react";
import "./briktrade.css";

export const Route = createFileRoute("/products/briktrade")({
  head: () => ({
    meta: [
      { title: "BrikTrade — Buy, Sell & Collect LEGO® | Kinisis Labs" },
      {
        name: "description",
        content:
          "BrikTrade is the first all-in-one LEGO® marketplace — buy, sell, manage your collection, and connect with the community. Coming soon.",
      },
      { property: "og:title", content: "BrikTrade — Buy, Sell & Collect LEGO®" },
      {
        property: "og:description",
        content:
          "The first all-in-one platform for LEGO® collectors and builders.",
      },
    ],
  }),
  component: BrikTradePage,
});

function SignupForm({ ctaLabel, large = false }: { ctaLabel: string; large?: boolean }) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<{ text: string; color: string }>({ text: "", color: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    console.log("BrikTrade early access signup:", value);
    setEmail("");
    setMsg({ text: "🎉 You're on the list! We'll notify you at launch.", color: "#4ade80" });
    setTimeout(() => setMsg({ text: "", color: "" }), 6000);
  }

  return (
    <form className="bt-signup" onSubmit={onSubmit}>
      <div className={`bt-signup-row${large ? " bt-signup-row-lg" : ""}`}>
        <input
          type="email"
          placeholder="Enter your email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">{ctaLabel}</button>
      </div>
      <p className="bt-signup-note" style={{ color: msg.color || undefined }}>
        {msg.text}
      </p>
      <p className="bt-signup-legal">No spam. Just one email when we launch. Unsubscribe anytime.</p>
    </form>
  );
}

function BrikTradePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="bt-root flex-1">
        {/* Hero */}
        <div className="bt-hero">
          <div className="bt-hero-inner">
            <div className="bt-hero-badge">🧱 Coming Soon</div>
            <h1>BrikTrade</h1>
            <p className="bt-tagline">Buy · Sell · Collect · Build</p>
            <p className="bt-lead">
              The first all-in-one marketplace for LEGO® collectors and builders.
              Buy, sell, and manage your sets and parts with AI-powered pricing — all in one place.
            </p>
            <SignupForm ctaLabel="Notify Me at Launch" />
            <div style={{ marginTop: 20 }}>
              <a href="#features" className="bt-btn-secondary">See Features</a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bt-stats-strip">
          <div className="bt-stats-inner">
            <div className="bt-stat">
              <div className="bt-stat-num">1st</div>
              <div className="bt-stat-label">All-in-one LEGO® platform</div>
            </div>
            <div className="bt-stat">
              <div className="bt-stat-num">AI</div>
              <div className="bt-stat-label">Powered set & part pricing</div>
            </div>
            <div className="bt-stat">
              <div className="bt-stat-num">3-in-1</div>
              <div className="bt-stat-label">Collection · Market · Community</div>
            </div>
            <div className="bt-stat">
              <div className="bt-stat-num">Soon</div>
              <div className="bt-stat-label">Web · iOS · Android</div>
            </div>
          </div>
        </div>

        {/* USP */}
        <div className="bt-usp-strip">
          <div className="bt-usp-inner">
            <div className="bt-usp-text">
              <h2>LEGO® reselling was scattered.<br />We fixed it.</h2>
              <p>
                Collectors and resellers have always had to juggle spreadsheets, multiple apps, and outdated price guides
                just to figure out what their sets are worth — let alone find buyers or manage their inventory.
              </p>
              <p>
                BrikTrade brings everything under one roof. The smart, modern platform that LEGO® fans
                have been waiting for.
              </p>
            </div>
            <div className="bt-usp-highlight">
              <p>"The first platform built specifically for LEGO® collectors — marketplace, collection manager, and community all in one."</p>
              <p className="bt-sub">No more spreadsheets. No more switching apps. Whether you flip sets, hunt minifigs, or just love to build — BrikTrade has you covered.</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div id="features">
          <div className="bt-section-wrap">
            <div className="bt-section-label">What You Can Do</div>
            <h2 className="bt-section-title">Everything a LEGO® fan needs</h2>
            <p className="bt-section-sub">From casual collectors to serious resellers, BrikTrade has the tools to take your hobby to the next level.</p>

            <div className="bt-features-grid">
              <div className="bt-feature-card bt-fc-green">
                <span className="bt-feature-icon">🧱</span>
                <h3>Collection Manager</h3>
                <p>Catalog your entire LEGO® collection — sets, parts, and minifigs. Track condition, completeness, and real-time value all in one place.</p>
              </div>
              <div className="bt-feature-card bt-fc-yellow">
                <span className="bt-feature-icon">🏪</span>
                <h3>In-App Marketplace</h3>
                <p>Buy and sell sets and parts directly within the app. The first true LEGO® marketplace built into the platform — no redirects, no friction.</p>
              </div>
              <div className="bt-feature-card bt-fc-blue">
                <span className="bt-feature-icon">🤖</span>
                <h3>AI-Powered Pricing</h3>
                <p>Stop guessing what your sets are worth. Our AI analyzes real sales data to give you accurate, up-to-date pricing on sets, parts, and minifigs.</p>
              </div>
              <div className="bt-feature-card bt-fc-red">
                <span className="bt-feature-icon">📈</span>
                <h3>Portfolio Tracking</h3>
                <p>Watch your collection's value in real time. Know which sets are appreciating, what to sell now, and what to hold for maximum return.</p>
              </div>
              <div className="bt-feature-card bt-fc-purple">
                <span className="bt-feature-icon">💬</span>
                <h3>Community Boards</h3>
                <p>Connect with LEGO® fans worldwide. Share your hauls, discuss investment strategy, trade deals, and find rare parts from fellow enthusiasts.</p>
              </div>
              <div className="bt-feature-card bt-fc-orange">
                <span className="bt-feature-icon">🔍</span>
                <h3>Set & Part Search</h3>
                <p>Find any set, theme, or individual part with powerful search and filtering. Browse listings or add to your want list for instant alerts.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bt-divider" />

        {/* AI Callout */}
        <div className="bt-ai-section" style={{ paddingTop: 80 }}>
          <div className="bt-ai-callout">
            <div className="bt-ai-orbs">
              <div className="bt-ai-orb bt-ai-orb-1" />
              <div className="bt-ai-orb bt-ai-orb-2" />
              <div className="bt-ai-orb bt-ai-orb-3" />
            </div>
            <div className="bt-ai-badge">⚡ AI Intelligence</div>
            <h2>Finally know what your<br />bricks are worth</h2>
            <p>
              LEGO® set values shift constantly with retirements, trends, and seasonal demand. Our AI pricing engine
              tracks real market sales so every listing and purchase is grounded in live data —
              giving buyers confidence and sellers the edge they need.
            </p>
          </div>
        </div>

        {/* Platforms */}
        <div className="bt-section-wrap">
          <div className="bt-section-label">Availability</div>
          <h2 className="bt-section-title">Play anywhere</h2>
          <p className="bt-section-sub">BrikTrade is launching soon across web, iOS, and Android. Be the first to know.</p>

          <div className="bt-platform-row">
            <div className="bt-platform-pill">
              <span className="bt-icon">🌐</span>
              <span>Web App</span>
              <span className="bt-status bt-status-soon">Coming Soon</span>
            </div>
            <div className="bt-platform-pill">
              <span className="bt-icon">🍎</span>
              <span>iOS App</span>
              <span className="bt-status bt-status-soon">Coming Soon</span>
            </div>
            <div className="bt-platform-pill">
              <span className="bt-icon">🤖</span>
              <span>Android App</span>
              <span className="bt-status bt-status-soon">Coming Soon</span>
            </div>
          </div>

          <div className="bt-age-notice">
            <span className="bt-icon">ℹ️</span>
            <p>
              <strong>Open to all ages.</strong> BrikTrade is designed for LEGO® fans of all ages.
              Browsing and managing your collection is available to everyone.
              Participation in the marketplace and community boards is restricted to users
              <strong> 18 years of age or older</strong>.
            </p>
          </div>
        </div>

        <div className="bt-divider" />

        {/* CTA */}
        <div className="bt-cta-section">
          <h2>Your collection is worth<br />more than you think.</h2>
          <p>Be among the first LEGO® collectors on BrikTrade and start turning bricks into value.</p>
          <SignupForm ctaLabel="Get Early Access" large />
          <p className="bt-cta-from">A product by Kinisis Labs — Built for collectors, by builders.</p>
        </div>

        <div className="bt-disclaimer">
          <p>
            LEGO® is a registered trademark of the LEGO® Group. BrikTrade and Kinisis Labs are not
            affiliated with, endorsed by, or sponsored by the LEGO® Group.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
