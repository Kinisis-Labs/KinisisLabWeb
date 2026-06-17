import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "ea2ca9f3-7be4-4df2-a292-b14739e1d7d7");
    formData.append("subject", "New contact from kinisislabs.com");
    formData.append("from_name", "Kinisis Labs Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <form className="mt-12 space-y-4" onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Your name" className="rounded-md border border-border bg-input/40 px-4 py-3 text-sm focus:border-primary focus:outline-none" />
        <input required type="email" name="email" placeholder="Email address" className="rounded-md border border-border bg-input/40 px-4 py-3 text-sm focus:border-primary focus:outline-none" />
      </div>
      <textarea required name="message" rows={5} placeholder="Tell us a bit about what you're working on…" className="w-full rounded-md border border-border bg-input/40 px-4 py-3 text-sm focus:border-primary focus:outline-none" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
      {status === "success" && (
        <p className="text-sm text-primary">Thanks — your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">{errorMsg}</p>
      )}
    </form>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kinisis Labs" },
      { name: "description", content: "Get in touch with Kinisis Labs about engineering, partnerships, or product inquiries." },
      { property: "og:title", content: "Contact Kinisis Labs" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--gradient-hero)" }}>
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-primary">Contact</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight">Let's talk.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Whether it's an engineering challenge, a partnership, or just curiosity about what we're
          building — we'd love to hear from you.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:contact@kinisislabs.com"
            className="rounded-xl border border-border/80 bg-card/60 p-6 transition-colors hover:bg-card"
          >
            <h3 className="font-semibold">Email</h3>
            <p className="mt-2 text-sm text-muted-foreground">contact@kinisislabs.com</p>
          </a>
          <div className="rounded-xl border border-border/80 bg-card/60 p-6">
            <h3 className="font-semibold">General inquiries</h3>
            <p className="mt-2 text-sm text-muted-foreground">We aim to reply within two business days.</p>
          </div>
        </div>

        <ContactForm />

      </main>
      <SiteFooter />
    </div>
  );
}
