"use client";

import Script from "next/script";

type Props = {
  language?: "en" | "de";
  className?: string;
};

/**
 * Lodgify Book-Now-Box embed, styled to match the Laya brand palette.
 * The widget loads its own renderer from app.lodgify.com; we just set
 * the container data-attributes and override the CSS custom properties
 * that control its visual style.
 */
export function LodgifyBookNowBox({ language = "en", className }: Props) {
  const rentalId = process.env.NEXT_PUBLIC_LODGIFY_RENTAL_ID;
  const websiteId = process.env.NEXT_PUBLIC_LODGIFY_WEBSITE_ID;
  const slug = process.env.NEXT_PUBLIC_LODGIFY_SLUG;

  return (
    <>
      <style>{`
        #lodgify-book-now-box {
          width: 100%;
          --ldg-bnb-background: #FBF8F3;
          --ldg-bnb-box-shadow: 0 1px 0 0 rgba(42, 39, 36, 0.08);
          --ldg-bnb-padding: 20px;
          --ldg-bnb-border-radius: 2px;
          --ldg-bnb-button-border-radius: 2px;
          --ldg-bnb-color-primary: #2A2724;
          --ldg-bnb-color-primary-lighter: #3a3530;
          --ldg-bnb-color-primary-darker: #1a1815;
          --ldg-bnb-color-primary-contrast: #FBF8F3;
          --ldg-component-calendar-cell-selection-bg-color: #8A9E94;
          --ldg-component-calendar-cell-selection-color: #FFFFFF;
          --ldg-component-calendar-cell-selected-bg-color: #D4E0DC;
          --ldg-component-calendar-cell-selected-color: #2A2724;
          --ldg-bnb-font-family: inherit;
          --ldg-bnb-input-background: #FFFFFF;
        }
      `}</style>
      <div
        id="lodgify-book-now-box"
        data-rental-id={rentalId}
        data-website-id={websiteId}
        data-slug={slug}
        data-language-code={language}
        data-new-tab="true"
        data-version="stable"
        data-has-guests-breakdown=""
        className={className}
      />
      <Script
        src="https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js"
        strategy="afterInteractive"
      />
    </>
  );
}
