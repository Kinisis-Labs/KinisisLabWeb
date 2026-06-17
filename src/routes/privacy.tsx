import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Kinisis Labs" },
      { name: "description", content: "How Kinisis Labs collects, uses, and protects your information." },
    ],
  }),
  component: PrivacyPage,
});

const PRIVACY_EMAIL = "privacy@kinisislabs.com";

function Section({ num, title, children }: { num?: number; title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border/80 bg-card/60 p-8 backdrop-blur space-y-3 text-muted-foreground leading-relaxed">
      {title && (
        <h2 className="flex items-center gap-3 pb-3 border-b border-border/60 text-lg font-semibold text-foreground">
          {num !== undefined && (
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--gradient-accent)] text-xs font-bold text-primary-foreground">
              {num}
            </span>
          )}
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 py-16 text-center" style={{ background: "var(--gradient-hero)" }}>
          <h1 className="text-5xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-muted-foreground">How we collect, use, and protect your information</p>
          <div className="mt-5 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
            Last updated: May 8, 2026
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6 py-16 space-y-5">
          <Section>
            <p>
              Kinisis Labs ("we," "us," or "our") is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our applications and website at{" "}
              <a className="text-primary hover:underline" href="https://kinisislabs.com">kinisislabs.com</a>{" "}
              (collectively, the "Service").
            </p>
            <p>
              Please read this policy carefully. By using the Service, you agree to the collection
              and use of information in accordance with this policy. If you do not agree, please
              discontinue use of the Service.
            </p>
          </Section>

          <Section num={1} title="Information We Collect">
            <p>We collect only the information necessary to provide and improve the Service.</p>
            <p className="font-semibold text-foreground">Account Information</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email address (used to create and identify your account)</li>
              <li>Username or display name (if provided)</li>
              <li>Password (stored in hashed/encrypted form — we never store plain-text passwords)</li>
            </ul>
            <p className="font-semibold text-foreground">Usage Information</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Features and pages accessed within the app</li>
              <li>Date and time of activity</li>
              <li>Device type and operating system (for compatibility purposes)</li>
            </ul>
            <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/10 p-4 text-sm text-foreground">
              We do <strong>not</strong> collect payment or financial information. We do{" "}
              <strong>not</strong> use third-party analytics services (e.g. Google Analytics). We do{" "}
              <strong>not</strong> sell your personal data to any third party.
            </div>
          </Section>

          <Section num={2} title="How We Use Your Information">
            <p>We use the information we collect solely to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Create and manage your account</li>
              <li>Authenticate you when you sign in</li>
              <li>Provide, operate, and improve the Service</li>
              <li>Send essential account notifications (e.g. password reset, security alerts)</li>
              <li>Respond to your support requests and inquiries</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <p>
              We will not use your email address for marketing communications without your explicit
              consent, and you may opt out at any time.
            </p>
          </Section>

          <Section num={3} title="How We Share Your Information">
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Service Providers:</strong> Trusted infrastructure
                providers (e.g. cloud hosting) who process data solely on our behalf and under strict
                confidentiality agreements.
              </li>
              <li>
                <strong className="text-foreground">Legal Requirements:</strong> When required by law,
                court order, or governmental authority, or to protect the rights and safety of our
                users and the public.
              </li>
              <li>
                <strong className="text-foreground">Business Transfer:</strong> In the event of a
                merger, acquisition, or sale of assets, your information may be transferred. We will
                notify you before your data becomes subject to a different privacy policy.
              </li>
            </ul>
          </Section>

          <Section num={4} title="Data Retention">
            <p>
              We retain your personal information for as long as your account is active or as needed
              to provide the Service. If you delete your account, we will delete or anonymize your
              personal data within <strong className="text-foreground">30 days</strong>, except where
              we are required to retain it for legal or compliance purposes.
            </p>
          </Section>

          <Section num={5} title="Data Security">
            <p>
              We implement industry-standard technical and organizational measures to protect your
              information against unauthorized access, alteration, disclosure, or destruction. These
              include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Encrypted data transmission (HTTPS/TLS)</li>
              <li>Hashed and salted password storage</li>
              <li>Access controls limiting who within our team can access user data</li>
              <li>Regular security reviews of our systems</li>
            </ul>
            <p>
              No method of transmission or storage is 100% secure. While we strive to protect your
              data, we cannot guarantee absolute security.
            </p>
          </Section>

          <Section num={6} title="Your Rights">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal data ("right to be forgotten")</li>
              <li><strong className="text-foreground">Portability:</strong> Request a machine-readable export of your data</li>
              <li><strong className="text-foreground">Objection:</strong> Object to certain types of data processing</li>
              <li><strong className="text-foreground">Withdrawal of Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a className="text-primary hover:underline" href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
              We will respond within 30 days.
            </p>
          </Section>

          <Section num={7} title="Children's Privacy">
            <p>
              Our Service is not directed to children under the age of 13 (or 16 where applicable
              under local law). We do not knowingly collect personal information from children. If
              you believe we have inadvertently collected information from a child, please contact
              us immediately at{" "}
              <a className="text-primary hover:underline" href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>{" "}
              and we will delete it promptly.
            </p>
          </Section>

          <Section num={8} title="Third-Party Links">
            <p>
              Our Service may contain links to third-party websites or services. We have no control
              over and assume no responsibility for the privacy practices or content of those sites.
              We encourage you to review the privacy policy of any third-party site you visit.
            </p>
          </Section>

          <Section num={9} title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the
              "Last updated" date at the top of this page. For significant changes, we will notify
              you via email or a prominent notice within the app prior to the change taking effect.
            </p>
            <p>
              Your continued use of the Service after any changes constitutes your acceptance of the
              updated policy.
            </p>
          </Section>

          {/* Contact card */}
          <div className="rounded-xl p-10 text-center" style={{ background: "var(--gradient-accent)" }}>
            <h2 className="text-2xl font-semibold text-primary-foreground">Questions or Requests?</h2>
            <p className="mt-2 text-primary-foreground/80">
              If you have any questions about this Privacy Policy or wish to exercise your data rights, reach out to us directly.
            </p>
            <a
              href={`mailto:${PRIVACY_EMAIL}`}
              className="mt-6 inline-block rounded-md bg-background/95 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background"
            >
              {PRIVACY_EMAIL}
            </a>
          </div>

        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
