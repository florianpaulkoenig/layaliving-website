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
import "./home.css";

export default function Home() {
  return (
    <div className="home-redesign">
      <Hero />
      <Spec />
      <Apartment />
      <Pull />
      <Seasons />
      <Availability />
      <Families />
      <MapSection />
      <Guestbook />
      <Faq />
      <Cta />
    </div>
  );
}
