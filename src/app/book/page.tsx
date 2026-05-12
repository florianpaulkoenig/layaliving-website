import { LodgifyEmbed } from "@/components/LodgifyEmbed";
import { LodgifyButton } from "@/components/LodgifyEmbed";
import "../pages.css";

export const metadata = {
  title: "Reserve — Laya Living",
  description:
    "We'd love to welcome you. Check live availability and book our apartment directly.",
};

export default function BookPage() {
  return (
    <div className="page-book-lodgify">
      <div className="wrap">
        <p className="kicker">Reserve your stay</p>
        <h1 className="mt-4 text-5xl text-balance">
          We&apos;d love to <em className="it-accent">welcome you</em>.
        </h1>
        <p className="mt-6 text-ink-soft">
          Book directly and we&apos;ll take care of the rest. Our calendar is
          always up to date — pick your dates, and we look forward to hosting
          you in Lucerne.
        </p>
      </div>

      <div className="book-lodgify-frame">
        <LodgifyEmbed />
      </div>

      <div className="wrap mt-6">
        <LodgifyButton label="Open in new tab →" />
      </div>
    </div>
  );
}
