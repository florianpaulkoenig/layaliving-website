export const metadata = { title: "Impressum — Laya Living" };

export default function ImpressumPage() {
  return (
    <section className="wrap max-w-prose py-20 md:py-28">
      <h1 className="text-5xl">Impressum</h1>
      <div className="mt-10 space-y-6 text-ink">
        <div>
          <h2 className="mb-2 text-lg">Betreiber</h2>
          <address className="not-italic text-ink-muted">
            Laya Living<br />
            Nidfeldstrasse 2G<br />
            6010 Kriens — Luzern<br />
            Schweiz
          </address>
        </div>
        <div>
          <h2 className="mb-2 text-lg">Kontakt</h2>
          <p className="text-ink-muted">
            E-Mail:{" "}
            <a
              href="mailto:info@layaliving.ch"
              className="underline underline-offset-4"
            >
              info@layaliving.ch
            </a>
          </p>
        </div>
        <p className="text-sm text-ink-muted">
          Inhalte dieser Seite wurden mit grösster Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen
          wir dennoch keine Gewähr.
        </p>
      </div>
    </section>
  );
}
