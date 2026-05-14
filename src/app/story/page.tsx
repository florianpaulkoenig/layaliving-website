import Link from "next/link";
import "../pages.css";

export const metadata = {
  title: "Our Story — Laya Living",
  description:
    "We are Elin, Vivien, Lucio, and Florian — passionate travellers who wanted to share the feeling of a home away from home.",
};

export default function StoryPage() {
  return (
    <div className="page-story page-contact">
      <header className="ph">
        <div className="ph-kicker">Our Story</div>
        <h1>
          Passionate travellers, <span className="it-accent">at heart</span>.
        </h1>
        <p className="lede">
          We are Elin, Vivien, Lucio, and Florian — four friends who love
          discovering the world and believe the best stays feel like coming
          home.
        </p>
      </header>

      <div className="contact">
        <aside className="contact-info">
          <h2>Who we are.</h2>

          <div className="contact-block">
            <div className="k">The Team</div>
            <div className="v">Elin, Vivien,<br />Lucio & Florian</div>
          </div>

          <div className="contact-block">
            <div className="k">Based in</div>
            <div className="v v--small">Lucerne, Switzerland</div>
          </div>

          <div className="contact-block">
            <div className="k">Languages</div>
            <div className="v v--small">Deutsch · English · Italiano · Français</div>
          </div>

          <div className="contact-block" style={{ marginTop: "auto" }}>
            <div className="k">Contact</div>
            <div className="v v--small">
              <a href="mailto:info@layaliving.ch">info@layaliving.ch</a>
            </div>
          </div>
        </aside>

        <div className="contact-aside">
          <blockquote>
            We wanted to share the feeling of arriving somewhere that feels
            like <span className="it-accent">home</span>.
          </blockquote>

          <p style={{ fontSize: 15, color: "var(--ink-2)", maxWidth: "52ch", margin: 0 }}>
            We — Elin, Vivien, Lucio, and Florian — are passionate travellers
            and love discovering new places. On our travels, we have always
            found it special to arrive at a rental that feels like home. We
            want to share this feeling with others.
          </p>

          <p style={{ fontSize: 15, color: "var(--ink-2)", maxWidth: "52ch", margin: 0 }}>
            That&rsquo;s why we founded LAYA Living and now offer one of our
            apartments in Lucerne as vacation accommodation. This allows our
            guests to not only experience the city, but also feel welcome and
            at home from the moment they arrive — just as we like it when we
            travel.
          </p>

          <div style={{ marginTop: "auto", display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/book" className="h-btn">
              Reserve your stay →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
