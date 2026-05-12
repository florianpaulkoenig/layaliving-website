/**
 * Sanity Studio — embedded at /studio
 * Login with your Sanity account to edit content.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-dynamic";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
