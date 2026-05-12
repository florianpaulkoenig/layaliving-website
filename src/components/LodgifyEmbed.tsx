"use client";

const LODGIFY_URL = "https://layaliving.lodgify.com/en/availability";

type Props = { className?: string };

export function LodgifyEmbed({ className }: Props) {
  return (
    <div className={className} style={{ width: "100%" }}>
      <iframe
        src={LODGIFY_URL}
        style={{
          width: "100%",
          height: 800,
          border: "none",
          display: "block",
        }}
        title="Check availability & book"
        loading="lazy"
      />
    </div>
  );
}

export function LodgifyButton({ label = "Check availability & book →" }: { label?: string }) {
  return (
    <a
      href={LODGIFY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="h-btn"
      style={{ alignSelf: "flex-start", display: "inline-block" }}
    >
      {label}
    </a>
  );
}
