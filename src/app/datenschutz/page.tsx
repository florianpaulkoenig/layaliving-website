export const metadata = { title: "Datenschutz — Laya Living" };

export default function DatenschutzPage() {
  return (
    <section className="wrap max-w-prose py-20 md:py-28">
      <h1 className="text-5xl">Datenschutz</h1>
      <div className="mt-10 space-y-6 text-ink-muted">
        <p>
          Wir erfassen nur die Daten, die du uns aktiv übermittelst (z.B. bei
          einer Buchungsanfrage oder via E-Mail). Diese Daten werden
          ausschliesslich zur Bearbeitung deiner Anfrage verwendet und nicht
          an Dritte weitergegeben.
        </p>
        <p>
          Diese Website verwendet keine Tracking-Cookies. Für die Buchung
          nutzen wir Lodgify als Buchungsplattform — deren Datenschutz-
          bestimmungen findest du auf{" "}
          <a
            href="https://www.lodgify.com/privacy-policy"
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            lodgify.com/privacy-policy
          </a>
          .
        </p>
        <p className="text-sm">
          Fragen zum Datenschutz: <a
            href="mailto:info@layaliving.ch"
            className="underline underline-offset-4"
          >info@layaliving.ch</a>
        </p>
      </div>
    </section>
  );
}
