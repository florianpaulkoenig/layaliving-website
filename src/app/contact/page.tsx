import Image from "next/image";
import Link from "next/link";
import "../pages.css";

export const metadata = {
  title: "Contact — Laya Living",
  description:
    "Get in touch with Laya Living — questions, special requests, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="page-contact">
      <header className="ph">
        <div className="ph-kicker">Contact</div>
        <h1>
          Say <span className="it-accent">hello</span>.
        </h1>
        <p className="lede">
          Questions about availability, the neighbourhood, or something
          special for your stay? We usually reply within a few hours.
        </p>
      </header>

      <div className="contact">
        <aside className="contact-info">
          <h2>Come find us.</h2>

          <div className="contact-block">
            <div className="k">E-mail</div>
            <div className="v">
              <a href="mailto:info@layaliving.ch">info@layaliving.ch</a>
            </div>
            <p>The fastest way to reach us. Write in any language below.</p>
          </div>

          <div className="contact-block">
            <div className="k">Address</div>
            <div className="v v--small">
              Nidfeldstrasse 2G<br />
              6010 Kriens — Lucerne<br />
              Switzerland
            </div>
          </div>

          <div className="contact-block">
            <div className="k">Languages</div>
            <div className="v v--small">Deutsch · English · Italiano · Français</div>
          </div>

          <div className="contact-block" style={{ marginTop: "auto" }}>
            <div className="k">Response time</div>
            <div className="v v--small">
              Usually within{" "}
              <span className="it-accent">3 hours</span>, always within the day.
            </div>
          </div>
        </aside>

        <div className="contact-aside">
          <blockquote>
            We read every message. We reply to every message. Most of the time,
            the <span className="it-accent">same day</span>.
          </blockquote>

          <p style={{ fontSize: 15, color: "var(--ink-2)", maxWidth: "48ch", margin: 0 }}>
            If you&rsquo;re ready to pick dates,{" "}
            <Link href="/book" className="it-accent" style={{ borderBottom: "1px solid var(--accent)" }}>
              the booking calendar is here
            </Link>
            . Otherwise, write us a line — we enjoy a long email about a short
            weekend.
          </p>

          <div className="fig">
            <Image
              src="/images/lucerne-riverside.jpg"
              alt="Lucerne riverside at dusk"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
