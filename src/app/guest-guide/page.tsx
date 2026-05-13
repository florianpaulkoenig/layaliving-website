import type { Metadata } from "next";
import "../home.css";
import "../pages.css";
import { GuestGuideView } from "@/components/guest-guide/GuestGuideView";

export const metadata: Metadata = {
  title: "Guest Guide — Laya Living",
  description: "Everything you need for your stay at Laya Living, Kriens.",
  robots: { index: false, follow: false },
};

export default function GuestGuidePage() {
  return <GuestGuideView />;
}
