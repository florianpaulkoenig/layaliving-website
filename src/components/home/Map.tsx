"use client";

import Link from "next/link";
import { useState } from "react";
import { APIProvider, Map, Marker, InfoWindow } from "@vis.gl/react-google-maps";
import { RECOMMENDATIONS } from "@/lib/recommendations-data";
import { CATEGORIES } from "@/types/recommendation";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

// Personal-favourite recommendations that have coordinates
const PICKS = RECOMMENDATIONS.filter(
  (r) => r.published && r.tags.includes("personal-favorites") && r.lat != null && r.lng != null
);

const CATEGORY_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c.title]));

// Custom map style matching the site's cream-and-sage palette
const MAP_STYLES: google.maps.MapTypeStyle[] = [
  { elementType: "geometry",            stylers: [{ color: "#f0ebe0" }] },
  { elementType: "labels.text.fill",    stylers: [{ color: "#1d1a15" }] },
  { elementType: "labels.text.stroke",  stylers: [{ color: "#f5f0e8" }] },
  { featureType: "water", elementType: "geometry",          stylers: [{ color: "#9fbfbc" }] },
  { featureType: "water", elementType: "labels.text.fill",  stylers: [{ color: "#4a7a78" }] },
  { featureType: "road",  elementType: "geometry",          stylers: [{ color: "#e8e2d8" }] },
  { featureType: "road",  elementType: "geometry.stroke",   stylers: [{ color: "#d4cbbf" }] },
  { featureType: "road.highway", elementType: "geometry",        stylers: [{ color: "#d4c8b4" }] },
  { featureType: "road.highway", elementType: "geometry.stroke",  stylers: [{ color: "#b8b0a0" }] },
  { featureType: "poi",       elementType: "geometry",  stylers: [{ color: "#e8e2d8" }] },
  { featureType: "poi",       elementType: "labels",    stylers: [{ visibility: "off" }] },
  { featureType: "poi.park",  elementType: "geometry",  stylers: [{ color: "#c8d8c4" }] },
  { featureType: "poi.park",  elementType: "labels.text.fill", stylers: [{ color: "#4a6b58" }] },
  { featureType: "landscape",         elementType: "geometry", stylers: [{ color: "#f0ebe0" }] },
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#ddd8c8" }] },
  { featureType: "administrative",    elementType: "geometry.stroke", stylers: [{ color: "#c4bdb0" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#1d1a15" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#e0d8c8" }] },
  { featureType: "transit", elementType: "labels",   stylers: [{ visibility: "off" }] },
];

// Circle marker — path: 0 == google.maps.SymbolPath.CIRCLE, no google.* call needed
function markerIcon(active: boolean) {
  return {
    path: 0, // CIRCLE
    fillColor: active ? "#1d1a15" : "#f5f0e8",
    fillOpacity: 1,
    strokeColor: "#1d1a15",
    strokeWeight: 2,
    scale: 8,
  };
}

export function MapSection() {
  const [active, setActive] = useState<number | null>(null);
  const activeRec = active != null ? PICKS.find((r) => r.id === active) : null;

  return (
    <section className="h-section">
      <div className="sec-head">
        <div className="sec-num">V — Our Lucerne</div>
        <h2 className="sec-title">
          Wine &amp; dine at <span className="it">hidden gems</span>.
        </h2>
        <p className="sec-lede">
          Lucerne&apos;s culinary scene is full of hidden gems — and we&apos;ll
          help you discover them. On this website and in the apartment, you&apos;ll
          find a curated guide to our favourite local spots, from cozy wine bars
          to family-run eateries off the tourist trail.
        </p>
      </div>

      <div className="map-wrap">
        {/* Google Map */}
        <div className="map-canvas">
          <APIProvider apiKey={API_KEY}>
            <Map
              defaultCenter={{ lat: 47.044, lng: 8.299 }}
              defaultZoom={12}
              disableDefaultUI
              gestureHandling="cooperative"
              styles={MAP_STYLES}
              style={{ width: "100%", height: "100%" }}
            >
              {PICKS.map((r) => (
                <Marker
                  key={r.id}
                  position={{ lat: r.lat!, lng: r.lng! }}
                  icon={markerIcon(r.id === active)}
                  onClick={() => setActive(r.id === active ? null : r.id)}
                />
              ))}

              {activeRec && activeRec.lat != null && activeRec.lng != null && (
                <InfoWindow
                  position={{ lat: activeRec.lat, lng: activeRec.lng }}
                  onCloseClick={() => setActive(null)}
                  pixelOffset={[0, -44]}
                >
                  <div style={{ fontFamily: "inherit", maxWidth: 200 }}>
                    <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "#6b6356", marginBottom: 2 }}>
                      {CATEGORY_LABEL[activeRec.category] ?? activeRec.category}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#1d1a15", marginBottom: 4 }}>{activeRec.name}</div>
                    {activeRec.tagline && (
                      <div style={{ fontSize: 12, color: "#6b6356", marginBottom: 6 }}>{activeRec.tagline}</div>
                    )}
                    <Link
                      href={`/recommendations/${activeRec.category}/${activeRec.slug}`}
                      style={{ fontSize: 12, color: "#1d1a15", textDecoration: "underline" }}
                    >
                      See details →
                    </Link>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        </div>

        {/* Sidebar list */}
        <div className="map-list">
          {PICKS.map((r, i) => (
            <div
              key={r.id}
              className="map-item"
              data-active={active === r.id ? "true" : "false"}
              onClick={() => setActive(r.id === active ? null : r.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div className="name">{r.name}</div>
                <div className="kind">
                  {CATEGORY_LABEL[r.category] ?? r.category}
                  {r.tagline ? ` · ${r.tagline}` : ""}
                </div>
              </div>
              <Link
                href={`/recommendations/${r.category}/${r.slug}`}
                className="dist"
                onClick={(e) => e.stopPropagation()}
              >
                →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
