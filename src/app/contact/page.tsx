export const metadata = {
  title: "Contact — Laya Living",
  description: "Get in touch with Laya Living — questions, special requests, or just to say hello.",
};

export default function ContactPage() {
  return (
    <section className="wrap py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="kicker">Contact</p>
        <h1 className="mt-4 text-5xl sm:text-6xl">
          Say <em className="italic text-sage-dark">hello</em>.
        </h1>
        <p className="mt-6 text-pretty text-lg text-ink-muted">
          Questions about availability, the neighbourhood, or something
          special for your stay? We usually reply within a few hours.
        </p>

        <div className="mt-10 space-y-5 text-left sm:text-center">
          <div>
            <p className="kicker">E-mail</p>
            <p className="mt-2 text-xl">
              <a
                href="mailto:info@layaliving.ch"
                className="underline-offset-4 hover:underline"
              >
                info@layaliving.ch
              </a>
            </p>
          </div>
          <div>
            <p className="kicker">Adresse</p>
            <address className="mt-2 text-lg not-italic text-ink">
              Nidfeldstrasse 2G<br />
              6010 Kriens — Lucerne<br />
              Switzerland
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
