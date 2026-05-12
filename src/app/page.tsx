import { Hero } from "@/components/home/Hero";
import { Spec } from "@/components/home/Spec";
import { Apartment } from "@/components/home/Apartment";
import { Pull } from "@/components/home/Pull";
import { Seasons } from "@/components/home/Seasons";
import { Availability } from "@/components/home/Availability";
import { Families } from "@/components/home/Families";
import { MapSection } from "@/components/home/Map";
import { Guestbook } from "@/components/home/Guestbook";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { fetchFaqGroups, fetchSiteContent } from "../../sanity/lib/queries";
import "./home.css";

export default async function Home() {
  // Fetch from Sanity — returns null if not yet configured, falls back gracefully
  const [sanityFaq, sanityContent] = await Promise.all([
    fetchFaqGroups(),
    fetchSiteContent(),
  ]);

  return (
    <div className="home-redesign">
      <Hero heroParagraph={sanityContent?.heroParagraph} />
      <Spec />
      <Apartment />
      <Pull />
      <Seasons sanitySeasons={sanityContent?.seasons} />
      <Availability />
      <Families />
      <MapSection />
      <Guestbook sanityReviews={sanityContent?.guestReviews} />
      <Faq sanityGroups={sanityFaq} />
      <Cta />
    </div>
  );
}
