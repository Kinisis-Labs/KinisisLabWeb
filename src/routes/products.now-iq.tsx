import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { useState } from "react";
import nowiqLogo from "@/assets/nowiq-logo.svg";
import "./nowiq.css";

export const Route = createFileRoute("/products/now-iq")({
  head: () => ({
    meta: [
      { title: "Now-IQ — Program Management Intelligence for ServiceNow | Kinisis Labs" },
      {
        name: "description",
        content:
          "Now-IQ is the all-in-one platform for managing ServiceNow deployments and upgrades — from planning through go-live. AI-powered, purpose-built.",
      },
      { property: "og:title", content: "Now-IQ — Program Management Intelligence for ServiceNow" },
      {
        property: "og:description",
        content: "Fewer spreadsheets. Smarter oversight. Zero surprises.",
      },
    ],
  }),
  component: NowIQPage,
});

function SignupForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<{ text: string; color: string }>({ text: "", color: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    console.log("Now-IQ early access signup:", value);
    setEmail("");
    setMsg({ text: "✓ You're on the list. We'll be in touch.", color: "var(--niq-green2)" });
    setTimeout(() => setMsg({ text: "", color: "" }), 6000);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="niq-cta-row">
        <input
          type="email"
          placeholder="Enter your work email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Request Access</button>
      </div>
      <p className="niq-cta-note" style={{ color: msg.color }}>
        {msg.text}
      </p>
      <p className="niq-cta-legal">No spam. One notification at launch. Unsubscribe anytime.</p>
    </form>
  );
}

function NowIQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="niq-root">
          {/* Logo header */}
          <div className="niq-logo-band">
            <Link to="/products/now-iq" className="niq-logo-link" aria-label="Now-IQ">
              <img src={nowiqLogo} alt="Now-IQ logo" />
            </Link>
          </div>

          {/* Hero */}
          <section className="niq-hero">
            <div className="niq-hero-inner">
              <div>
                <div className="niq-eyebrow">
                  <span className="niq-dot" /> Coming Soon — Early Access Open
                </div>
                <h1>
                  Program Management
                  <br />
                  <span className="niq-hl">Intelligence</span>
                  <br />
                  for ServiceNow
                </h1>
                <p className="niq-lead">
                  Now-IQ is the all-in-one platform for managing ServiceNow deployments and upgrades
                  — from planning through go-live. Fewer spreadsheets. Smarter oversight. Zero
                  surprises.
                </p>
                <div className="niq-actions">
                  <a href="#notify" className="niq-btn-primary">
                    Request Early Access
                  </a>
                  <a href="#features" className="niq-btn-ghost">
                    See Features
                  </a>
                </div>
                <div className="niq-trust">
                  <div className="niq-trust-badge">
                    <svg viewBox="0 0 16 16">
                      <path d="M8 1L10.5 6 16 6.8 12 10.7 13 16 8 13.3 3 16 4 10.7 0 6.8 5.5 6z" />
                    </svg>
                    Built for ServiceNow™
                  </div>
                  <div className="niq-trust-sep" />
                  <div className="niq-trust-badge">
                    <svg viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="7" />
                    </svg>
                    AI-Powered
                  </div>
                  <div className="niq-trust-sep" />
                  <div className="niq-trust-badge">
                    <svg viewBox="0 0 16 16">
                      <path
                        d="M2 8 L6 12 L14 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    Enterprise Ready
                  </div>
                </div>
              </div>

              {/* Pipeline visual */}
              <div className="niq-visual">
                <div className="niq-visual-label">Active Deployment — Q2 Platform Upgrade</div>
                <div className="niq-pv">
                  {[
                    { name: "Planning & Scope", state: "done" },
                    { name: "Development & Build", state: "done" },
                    { name: "Testing & QA", state: "done" },
                    { name: "Staging & UAT", state: "done" },
                    { name: "Production Deployment", state: "active" },
                    { name: "Post-Upgrade Review", state: "pending" },
                  ].map((s) => (
                    <div key={s.name} className={`niq-pv-stage niq-${s.state}`}>
                      <span className={`niq-pv-dot niq-dot-${s.state}`} />
                      <span className="niq-pv-name">{s.name}</span>
                      <span className={`niq-pv-status niq-status-${s.state}`}>
                        {s.state === "done"
                          ? "Complete"
                          : s.state === "active"
                            ? "In Progress"
                            : "Upcoming"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="niq-visual-footer">
                  <span className="niq-visual-footer-label">Overall Progress — 67%</span>
                  <div className="niq-progress-wrap">
                    <div className="niq-progress-fill" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="niq-stats-bar">
            <div className="niq-stats-inner">
              {[
                { num: "8", label: "Core platform capabilities" },
                { num: "AI", label: "Test case generation & risk scoring" },
                { num: "360°", label: "Resource, risk & program visibility" },
                { num: "Soon", label: "Web · Enterprise SSO" },
              ].map((s) => (
                <div key={s.label} className="niq-stat-item">
                  <span className="niq-stat-num">{s.num}</span>
                  <span className="niq-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* USP */}
          <section className="niq-usp-section">
            <div className="niq-section-wrap">
              <div className="niq-usp-grid">
                <div className="niq-usp-text">
                  <div className="niq-section-eyebrow">The Problem</div>
                  <h2>
                    ServiceNow deployments are complex.
                    <br />
                    Your tools <em>shouldn't be.</em>
                  </h2>
                  <p>
                    Most organizations manage their ServiceNow deployments across a patchwork of
                    spreadsheets, email threads, and generic project tools — none of which
                    understand the ServiceNow lifecycle.
                  </p>
                  <p>
                    Missed upgrade windows, scope creep, misaligned stakeholders, and post-go-live
                    surprises are the result. Now-IQ was built to eliminate all of that.
                  </p>
                </div>
                <div className="niq-usp-card">
                  <blockquote>
                    "The first program management platform purpose-built for ServiceNow deployments
                    and upgrades — from kickoff to post-go-live."
                  </blockquote>
                  <div className="niq-usp-checks">
                    {[
                      "Purpose-built for the ServiceNow™ lifecycle — not a generic PM tool",
                      "AI-powered risk scoring and deployment readiness assessments",
                      "Real-time visibility across all workstreams and stakeholders",
                      "Upgrade management built in — not bolted on",
                      "Resource scheduling to manage team capacity across every stage",
                      "AI-generated test cases from your stories and config — no manual effort",
                    ].map((t) => (
                      <div key={t} className="niq-usp-check">
                        <div className="niq-check-icon">✓</div>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="niq-features-section" id="features">
            <div className="niq-section-wrap">
              <div className="niq-section-eyebrow">Platform Features</div>
              <h2 className="niq-section-title">Everything your program needs</h2>
              <p className="niq-section-sub">
                From initial scoping to post-upgrade review, Now-IQ gives program managers,
                architects, and stakeholders a single source of truth.
              </p>
              <div className="niq-features-grid">
                {[
                  {
                    n: "01",
                    i: "🗂️",
                    t: "Program Dashboard",
                    d: "A real-time command center for your entire ServiceNow program. Track milestones, workstreams, risks, and team status at a glance — no more chasing updates.",
                  },
                  {
                    n: "02",
                    i: "🚀",
                    t: "Deployment Pipeline Manager",
                    d: "Manage every stage of your deployment — from development through production — with structured gates, checklists, and go/no-go readiness scoring built in.",
                  },
                  {
                    n: "03",
                    i: "🔄",
                    t: "Upgrade Management",
                    d: "Plan and execute ServiceNow™ platform upgrades with confidence. Track patch compatibility, customization impact, and upgrade readiness across every environment.",
                  },
                  {
                    n: "04",
                    i: "⚠️",
                    t: "Risk & Issue Tracking",
                    d: "Surface risks before they become blockers. Log, assign, and track issues with severity scoring and automated escalation paths tied directly to your deployment stages.",
                  },
                  {
                    n: "05",
                    i: "👥",
                    t: "Stakeholder Reporting",
                    d: "Auto-generate executive status reports, RAID logs, and deployment summaries. Keep every stakeholder informed without spending hours building slide decks.",
                  },
                  {
                    n: "06",
                    i: "🤖",
                    t: "AI Readiness Intelligence",
                    d: "Let AI analyze your deployment health, flag gaps in test coverage, predict go-live risk, and recommend next actions — so you stay ahead of issues instead of reacting to them.",
                  },
                  {
                    n: "07",
                    i: "👥",
                    t: "Resource Scheduling",
                    d: "Plan and manage your team across every stage of the deployment. Assign resources to workstreams, visualize capacity, track availability, and avoid bottlenecks before they stall your program.",
                  },
                  {
                    n: "08",
                    i: "🧪",
                    t: "AI Test Case Generator",
                    d: "Automatically generate test cases from your ServiceNow™ configuration, user stories, and acceptance criteria. Cut test planning time dramatically and ensure nothing gets missed before go-live.",
                  },
                ].map((f) => (
                  <div key={f.n} className="niq-feature-block">
                    <div className="niq-feature-num">{f.n}</div>
                    <span className="niq-feature-icon">{f.i}</span>
                    <h3>{f.t}</h3>
                    <p>{f.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pipeline */}
          <section className="niq-pipeline-section" id="pipeline">
            <div className="niq-section-wrap">
              <div className="niq-section-eyebrow">How It Works</div>
              <h2 className="niq-section-title">End-to-end deployment lifecycle</h2>
              <p className="niq-section-sub">
                Now-IQ structures your entire ServiceNow program around six deployment stages — each
                with its own gates, tasks, and AI-powered readiness checks.
              </p>
              <div className="niq-pipeline-steps">
                {[
                  {
                    i: "📋",
                    t: "Plan",
                    d: "Scope, timeline, resources and stakeholder alignment",
                    s: "done",
                  },
                  {
                    i: "🔨",
                    t: "Build",
                    d: "Development tracking, sprint management and code readiness",
                    s: "done",
                  },
                  {
                    i: "🧪",
                    t: "Test",
                    d: "Test coverage, defect management and sign-off tracking",
                    s: "done",
                  },
                  {
                    i: "🎯",
                    t: "Stage",
                    d: "UAT, change advisory, and go-live gate assessment",
                    s: "done",
                  },
                  {
                    i: "🚀",
                    t: "Deploy",
                    d: "Production push, cutover runbook, and live monitoring",
                    s: "active",
                  },
                  {
                    i: "📈",
                    t: "Upgrade",
                    d: "Post-go-live review, platform upgrade planning and optimization",
                    s: "pending",
                  },
                ].map((p) => (
                  <div key={p.t} className="niq-pipeline-step">
                    <div className={`niq-step-circle niq-step-${p.s}`}>{p.i}</div>
                    <div className="niq-step-title">{p.t}</div>
                    <div className="niq-step-desc">{p.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI */}
          <section className="niq-ai-section">
            <div className="niq-section-wrap">
              <div className="niq-ai-grid">
                <div className="niq-ai-content">
                  <div className="niq-section-eyebrow">AI Intelligence</div>
                  <h2>
                    Stop guessing.
                    <br />
                    Start <em>knowing.</em>
                  </h2>
                  <p>
                    ServiceNow deployments fail not because teams lack effort, but because they lack
                    visibility. Now-IQ's AI layer continuously analyzes your program data to surface
                    risks, predict bottlenecks, and recommend actions before problems escalate.
                  </p>
                  <p>
                    From automated readiness scoring to predictive go-live risk — intelligence is
                    baked into every stage of your program.
                  </p>
                </div>
                <div className="niq-ai-cards">
                  {[
                    {
                      i: "📊",
                      t: "Deployment Readiness Score",
                      d: "Real-time AI scoring across test coverage, open issues, UAT sign-off, and environment stability",
                      b: "niq-ab-green",
                    },
                    {
                      i: "🔮",
                      t: "Go-Live Risk Prediction",
                      d: "Predictive analysis flags high-risk deployments days before cutover — while there's still time to act",
                      b: "niq-ab-teal",
                    },
                    {
                      i: "⚡",
                      t: "Automated Status Intelligence",
                      d: "AI generates program health summaries and stakeholder reports from your live data — no manual effort",
                      b: "niq-ab-both",
                    },
                    {
                      i: "🧪",
                      t: "AI Test Case Generation",
                      d: "Generate comprehensive test cases automatically from user stories, acceptance criteria, and your ServiceNow™ config — covering scenarios your team might miss",
                      b: "niq-ab-green",
                    },
                  ].map((c) => (
                    <div key={c.t} className="niq-ai-card">
                      <span className="niq-ai-card-icon">{c.i}</span>
                      <div className="niq-ai-card-text">
                        <h4>{c.t}</h4>
                        <p>{c.d}</p>
                        <div className={`niq-ai-bar ${c.b}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ServiceNow */}
          <section className="niq-sn-section" id="servicenow">
            <div className="niq-sn-inner">
              <div className="niq-sn-text">
                <div className="niq-sn-badge">🔗 Built for ServiceNow™</div>
                <h2>
                  Purpose-built for the
                  <br />
                  ServiceNow<span className="niq-sn-tm">™</span> ecosystem
                </h2>
                <p>
                  Now-IQ isn't a generic project management tool forced into a ServiceNow context.
                  It was designed from the ground up around how ServiceNow programs actually work —
                  the modules, the upgrade cycles, the CMDB dependencies, and the stakeholder
                  dynamics unique to the platform.
                </p>
                <p>
                  Whether you're implementing ITSM, HRSD, CSM, or managing your annual platform
                  upgrade, Now-IQ speaks your language.
                </p>
              </div>
              <div>
                <p className="niq-sn-modules-label">Supported Modules</p>
                <div className="niq-sn-modules">
                  {["ITSM", "HRSD", "CSM", "ITOM", "SecOps", "GRC", "FSM", "Platform Upgrades"].map(
                    (m) => (
                      <div key={m} className="niq-sn-module">
                        <span className="niq-sn-module-dot" />
                        {m}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="niq-cta-section" id="notify">
            <div className="niq-cta-inner">
              <div className="niq-cta-eyebrow">Early Access</div>
              <h2>
                Your deployments
                <br />
                deserve <em>better.</em>
              </h2>
              <p>
                Join the waitlist for Now-IQ and be among the first program managers to deploy with
                full intelligence behind every decision.
              </p>
              <div className="niq-cta-form">
                <SignupForm />
              </div>
              <p className="niq-cta-disclaimer">
                ServiceNow™ is a trademark of ServiceNow, Inc. Now-IQ is an independent product by
                Kinisis Labs and is not affiliated with or endorsed by ServiceNow, Inc.
              </p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
