import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { useState } from "react";
import "./sportfolio.css";

export const Route = createFileRoute("/products/sportfolio-cards")({
  head: () => ({
    meta: [
      { title: "Sportfolio Cards — The Global Sports Card Marketplace | Kinisis Labs" },
      {
        name: "description",
        content:
          "Sportfolio Cards is the first truly global sports card marketplace — buy, sell, and manage cards from every sport and every nation. Coming soon.",
      },
      { property: "og:title", content: "Sportfolio Cards — The Global Sports Card Marketplace" },
      {
        property: "og:description",
        content: "The world's first truly global card marketplace — powered by AI pricing intelligence.",
      },
    ],
  }),
  component: SportfolioPage,
});

function SignupForm({
  ctaLabel,
  placeholder = "Enter your email address",
  variant = "hero",
}: {
  ctaLabel: string;
  placeholder?: string;
  variant?: "hero" | "cta";
}) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<{ text: string; color: string }>({ text: "", color: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    console.log("Sportfolio Cards signup:", value);
    setEmail("");
    setMsg({ text: "🎉 You're on the list! We'll notify you at launch.", color: "#f0c84a" });
    setTimeout(() => setMsg({ text: "", color: "" }), 6000);
  }

  const isCta = variant === "cta";
  const rowClass = isCta ? "sf-cta-signup-row" : "sf-signup-input-row";
  const noteClass = isCta ? "sf-cta-note" : "sf-signup-note";
  const legalClass = isCta ? "sf-cta-legal" : "sf-signup-legal";

  return (
    <form onSubmit={onSubmit}>
      <div className={rowClass}>
        <input
          type="email"
          placeholder={placeholder}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">{ctaLabel}</button>
      </div>
      <p className={noteClass} style={{ color: msg.color || undefined }}>
        {msg.text}
      </p>
      <p className={legalClass}>No spam. Just one email when we launch. Unsubscribe anytime.</p>
    </form>
  );
}

const tickerSports = [
  "Soccer","Basketball","Football","Baseball","Hockey","Tennis",
  "Cricket","Formula 1","Rugby","Boxing","Golf","MMA",
];

function SportfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="sf-root flex-1">
        {/* Hero */}
        <div className="sf-hero">
          <div className="sf-hero-left">
            <div className="sf-hero-eyebrow">
              <div className="sf-line" />
              <span>🌍 Coming Soon</span>
            </div>
            <h1 className="sf-h1">
              <span className="sf-line1">SPORTFOLIO</span>
              <span className="sf-line2">CARDS</span>
            </h1>
            <p className="sf-hero-sub">The Global Sports Card Marketplace</p>
            <p className="sf-hero-lead">
              Buy, sell, and manage sports cards from every sport and every nation.
              The world's first truly global card marketplace — powered by AI pricing intelligence.
            </p>
            <div className="sf-signup-wrap">
              <SignupForm ctaLabel="Notify Me" placeholder="Enter your email for early access" />
            </div>
            <div className="sf-hero-scroll-hint">
              <div className="sf-scroll-line" />
              <span>Scroll to explore</span>
            </div>
          </div>

          <div className="sf-hero-right">
            <span className="sf-hero-star">★</span>
            <div className="sf-card-mosaic">
              <div className="sf-sport-card-visual sf-cv1"><span>⚽</span><span className="sf-card-label">Soccer</span></div>
              <div className="sf-sport-card-visual sf-cv2"><span>🏈</span><span className="sf-card-label">Football</span></div>
              <div className="sf-sport-card-visual sf-cv3"><span>🏀</span><span className="sf-card-label">Basketball</span></div>
              <div className="sf-sport-card-visual sf-cv4"><span>⚾</span><span className="sf-card-label">Baseball</span></div>
              <div className="sf-sport-card-visual sf-cv5"><span>🏒</span><span className="sf-card-label">Hockey</span></div>
              <div className="sf-sport-card-visual sf-cv6"><span>🎾</span><span className="sf-card-label">Tennis</span></div>
            </div>
            <div className="sf-sports-count-badge">
              <span className="sf-num">12+</span>
              <span className="sf-label">Sports</span>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="sf-ticker-strip">
          <div className="sf-ticker-track">
            {[...tickerSports, ...tickerSports].map((s, i) => (
              <span key={i} className="sf-ticker-item">{s}</span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="sf-stats-bar">
          <div className="sf-stats-bar-inner">
            <div className="sf-stat-item">
              <span className="sf-stat-num">1st</span>
              <span className="sf-stat-label">Global sports card platform</span>
            </div>
            <div className="sf-stat-item">
              <span className="sf-stat-num">12+</span>
              <span className="sf-stat-label">Sports covered</span>
            </div>
            <div className="sf-stat-item">
              <span className="sf-stat-num">AI</span>
              <span className="sf-stat-label">Powered card pricing</span>
            </div>
            <div className="sf-stat-item">
              <span className="sf-stat-num">Soon</span>
              <span className="sf-stat-label">Web · iOS · Android</span>
            </div>
          </div>
        </div>

        {/* USP */}
        <div className="sf-usp-section">
          <div className="sf-section-wrap">
            <div className="sf-usp-grid">
              <div className="sf-usp-text">
                <div className="sf-usp-label">The Problem</div>
                <h2>Sports cards are <em>global</em>.<br />The tools weren't.</h2>
                <p>Collectors worldwide have been forced into fragmented tools — North America-focused platforms that ignore the rest of the world, no unified pricing across sports, and zero community for international fans.</p>
                <p>A Messi collector in Argentina, a cricket fan in India, an F1 enthusiast in the UK — they all deserved better. Sportfolio Cards is that better.</p>
              </div>
              <div className="sf-usp-shield">
                <p className="sf-usp-shield-quote">The first platform built for every sport card collector, in every nation, on every continent.</p>
                <div className="sf-usp-details">
                  <div className="sf-usp-detail"><div className="sf-usp-detail-icon">🌍</div>True global marketplace — not just North America</div>
                  <div className="sf-usp-detail"><div className="sf-usp-detail-icon">🃏</div>Every sport in one collection manager</div>
                  <div className="sf-usp-detail"><div className="sf-usp-detail-icon">🤖</div>AI pricing tuned to each sport's market</div>
                  <div className="sf-usp-detail"><div className="sf-usp-detail-icon">💬</div>Community across borders and time zones</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="sf-features-section">
          <div className="sf-section-wrap">
            <div className="sf-features-header">
              <p className="sf-section-eyebrow">Platform Features</p>
              <h2>Everything a card collector needs</h2>
              <p>From managing your collection to closing a deal — Sportfolio Cards handles it all.</p>
            </div>

            <div className="sf-feature-row">
              <div className="sf-feature-block sf-fb-navy">
                <div className="sf-feature-num">01</div>
                <span className="sf-feature-emoji">🃏</span>
                <h3>Collection Manager</h3>
                <p>Catalog every card you own — across every sport, every year, every grading company. Track condition, population, and real-time market value in one place.</p>
              </div>
              <div className="sf-feature-block sf-fb-dark">
                <div className="sf-feature-num">02</div>
                <span className="sf-feature-emoji">🏪</span>
                <h3>Global Marketplace</h3>
                <p>Buy and sell directly within the app with collectors from around the world. The first in-app marketplace built specifically for sports cards — no separate listing sites needed.</p>
              </div>
              <div className="sf-feature-block sf-fb-mid">
                <div className="sf-feature-num">03</div>
                <span className="sf-feature-emoji">🤖</span>
                <h3>AI Pricing Engine</h3>
                <p>Get accurate valuations on any card across any sport — powered by AI that tracks real sales data globally. No more guessing, no more outdated price guides.</p>
              </div>
            </div>
            <div className="sf-feature-row">
              <div className="sf-feature-block sf-fb-mid">
                <div className="sf-feature-num">04</div>
                <span className="sf-feature-emoji">📈</span>
                <h3>Portfolio Tracking</h3>
                <p>Watch your collection's value move in real time. Spot trends across sports, see which players are surging, and know exactly when to buy or hold.</p>
              </div>
              <div className="sf-feature-block sf-fb-navy">
                <div className="sf-feature-num">05</div>
                <span className="sf-feature-emoji">🌐</span>
                <h3>Global Community</h3>
                <p>Connect with collectors from every country. Share your pulls, debate player investments, and discover deals from collectors worldwide on community boards.</p>
              </div>
              <div className="sf-feature-block sf-fb-dark">
                <div className="sf-feature-num">06</div>
                <span className="sf-feature-emoji">🔍</span>
                <h3>Search & Want List</h3>
                <p>Find any player, any sport, any era with powerful global search. Add cards to your want list and get instant alerts the moment they're listed.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage */}
        <div className="sf-coverage-section">
          <div className="sf-section-wrap">
            <div className="sf-coverage-grid">
              <div className="sf-coverage-left">
                <p className="sf-section-eyebrow">Global Coverage</p>
                <h2>Every sport.<br /><em>Every nation.</em></h2>
                <p>Sportfolio Cards was built for the global collector — not just the North American market. Whether you collect Premier League stars, IPL legends, or F1 icons, you're home.</p>
              </div>
              <div className="sf-sports-list">
                {([
                  ["⚽","Soccer / Football","global"],
                  ["🏀","Basketball","global"],
                  ["🏈","American Football","na"],
                  ["⚾","Baseball","intl"],
                  ["🏒","Ice Hockey","intl"],
                  ["🎾","Tennis","global"],
                  ["🏏","Cricket","global"],
                  ["🏎️","Formula 1","global"],
                  ["🏉","Rugby","intl"],
                  ["🥊","Boxing / MMA","global"],
                  ["⛳","Golf","global"],
                  ["➕","More sports coming","intl"],
                ] as const).map(([emoji, name, tag]) => {
                  const tagLabel =
                    tag === "global" ? "Global" : tag === "na" ? "N. America" : name === "More sports coming" ? "Expanding" : "International";
                  return (
                    <div key={name} className="sf-sport-row">
                      <span className="sf-emoji">{emoji}</span>
                      <span className="sf-name">{name}</span>
                      <span className={`sf-tag sf-tag-${tag}`}>{tagLabel}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* AI */}
        <div className="sf-ai-section">
          <div className="sf-ai-inner">
            <div className="sf-ai-content">
              <div className="sf-ai-badge">⚡ AI Intelligence</div>
              <h2>Global pricing<br />that <em>actually works</em></h2>
              <p>Sports card values are driven by injuries, trades, championships, and global trends that play out differently in every market. A generic price guide can't keep up.</p>
              <p>Our AI pricing engine tracks real sales data across every sport, every market, and every currency — giving you accurate valuations whether you're in New York, London, Mumbai, or São Paulo.</p>
            </div>
            <div className="sf-ai-metrics">
              <div className="sf-ai-metric">
                <span className="sf-ai-metric-icon">📊</span>
                <div className="sf-ai-metric-content">
                  <h4>Real-Time Market Data</h4>
                  <p>Live sales tracking across every sport and marketplace</p>
                  <div className="sf-ai-metric-bar sf-bar-gold" />
                </div>
              </div>
              <div className="sf-ai-metric">
                <span className="sf-ai-metric-icon">🌍</span>
                <div className="sf-ai-metric-content">
                  <h4>Multi-Market Intelligence</h4>
                  <p>Pricing tuned to regional demand and local market trends</p>
                  <div className="sf-ai-metric-bar sf-bar-blue" />
                </div>
              </div>
              <div className="sf-ai-metric">
                <span className="sf-ai-metric-icon">⚡</span>
                <div className="sf-ai-metric-content">
                  <h4>Instant Valuations</h4>
                  <p>Accurate estimates in seconds — no waiting, no guessing</p>
                  <div className="sf-ai-metric-bar sf-bar-green" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Launch */}
        <div className="sf-launch-section">
          <div className="sf-launch-inner">
            <div className="sf-launch-grid">
              <div>
                <p className="sf-section-eyebrow">Availability</p>
                <h2 className="sf-launch-h2">Launching soon<br />everywhere.</h2>
                <p className="sf-launch-p">Sportfolio Cards is coming to web, iOS, and Android. Sign up above to be first in line.</p>
                <div className="sf-platform-cards">
                  <div className="sf-platform-card"><span className="sf-platform-icon">🌐</span><div className="sf-platform-info"><h4>Web App</h4><p>Full platform in your browser</p></div><span className="sf-platform-badge">Coming Soon</span></div>
                  <div className="sf-platform-card"><span className="sf-platform-icon">🍎</span><div className="sf-platform-info"><h4>iOS App</h4><p>Native iPhone & iPad experience</p></div><span className="sf-platform-badge">Coming Soon</span></div>
                  <div className="sf-platform-card"><span className="sf-platform-icon">🤖</span><div className="sf-platform-info"><h4>Android App</h4><p>Google Play release</p></div><span className="sf-platform-badge">Coming Soon</span></div>
                </div>
              </div>
              <div>
                <p className="sf-section-eyebrow">Age & Access</p>
                <h2 className="sf-launch-h2">Open to all,<br />safely.</h2>
                <p className="sf-launch-p" style={{ marginBottom: 24 }}>Sportfolio Cards is designed for sports card fans of all ages, with appropriate controls for marketplace activity.</p>
                <div className="sf-age-notice">
                  <span className="sf-icon">ℹ️</span>
                  <p>Browsing and managing your collection is open to <strong>everyone</strong>. Participation in the marketplace and community boards requires users to be <strong>18 years of age or older</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="sf-cta-section">
          <div className="sf-cta-inner">
            <h2>The world's cards.<br /><span>One platform.</span></h2>
            <p>Be among the first collectors on Sportfolio Cards and experience sports collecting the way it was always meant to be.</p>
            <div className="sf-cta-form">
              <SignupForm ctaLabel="Get Early Access" variant="cta" />
            </div>
            <p className="sf-cta-from">A product by Kinisis Labs — Built for collectors, by builders.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
