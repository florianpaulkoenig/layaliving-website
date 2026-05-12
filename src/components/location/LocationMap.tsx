"use client";

import { useEffect, useState } from "react";
import { APIProvider, Map, Marker, InfoWindow, useMapsLibrary, useMap } from "@vis.gl/react-google-maps";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

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

const LUCERNE_HB      = { lat: 47.0503, lng: 8.3103 };
const OLD_TOWN        = { lat: 47.0502, lng: 8.3093 };
const PILATUS         = { lat: 46.9793, lng: 8.2526 };
const KRIENS_MATTENHOF = { lat: 47.027366, lng: 8.301959 };

const APARTMENT_ICON: google.maps.Symbol = {
  path: "M 0 0 C -5 -4 -9 -9 -9 -15 A 9 9 0 0 1 9 -15 C 9 -9 5 -4 0 0 Z",
  fillColor: "#1d1a15",
  fillOpacity: 1,
  strokeColor: "#f5f0e8",
  strokeWeight: 2,
  scale: 2,
};

const CIRCLE_ICON = (color: string): google.maps.Symbol => ({
  path: 0,
  fillColor: color,
  fillOpacity: 1,
  strokeColor: "#f5f0e8",
  strokeWeight: 2,
  scale: 7,
});

type RouteInfo = {
  duration: string;
  midpoint: google.maps.LatLngLiteral;
};

function ApartmentMarker({ onGeocode }: { onGeocode?: (pos: google.maps.LatLngLiteral) => void }) {
  const geocodingLib = useMapsLibrary("geocoding");
  const [position, setPosition] = useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    if (!geocodingLib) return;
    const geocoder = new geocodingLib.Geocoder();
    geocoder.geocode(
      { address: "Nidfeldstrasse 2G", componentRestrictions: { postalCode: "6010", country: "CH" } },
      (results, status) => {
        if (status === "OK" && results?.[0]) {
          const loc = results[0].geometry.location;
          const pos = { lat: loc.lat(), lng: loc.lng() };
          setPosition(pos);
          onGeocode?.(pos);
        }
      }
    );
  }, [geocodingLib, onGeocode]);

  if (!position) return null;
  return <Marker position={position} icon={APARTMENT_ICON} />;
}

function BusRoute({ onRoute }: { onRoute: (info: RouteInfo) => void }) {
  const map = useMap();
  const routesLib = useMapsLibrary("routes");
  const geocodingLib = useMapsLibrary("geocoding");
  const [destination, setDestination] = useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    if (!geocodingLib) return;
    const geocoder = new geocodingLib.Geocoder();
    geocoder.geocode(
      { address: "Nidfeldstrasse 2G", componentRestrictions: { postalCode: "6010", country: "CH" } },
      (results, status) => {
        if (status === "OK" && results?.[0]) {
          const loc = results[0].geometry.location;
          setDestination({ lat: loc.lat(), lng: loc.lng() });
        }
      }
    );
  }, [geocodingLib]);

  useEffect(() => {
    if (!map || !routesLib || !destination) return;

    const service  = new routesLib.DirectionsService();
    const renderer = new routesLib.DirectionsRenderer({
      map,
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: "#8A9E94",
        strokeOpacity: 0.85,
        strokeWeight: 4,
      },
    });

    service.route(
      {
        origin: LUCERNE_HB,
        destination,
        travelMode: routesLib.TravelMode.TRANSIT,
      },
      (result, status) => {
        if (status === "OK" && result) {
          renderer.setDirections(result);
          const path = result.routes[0].overview_path;
          const mid  = path[Math.floor(path.length / 2)];
          onRoute({
            duration: "7 min",
            midpoint: { lat: mid.lat(), lng: mid.lng() },
          });
        }
      }
    );

    return () => renderer.setMap(null);
  }, [map, routesLib, destination, onRoute]);

  return null;
}

function TrainRoute({ onRoute }: { onRoute: (info: RouteInfo) => void }) {
  const map = useMap();
  const routesLib = useMapsLibrary("routes");

  useEffect(() => {
    if (!map || !routesLib) return;

    const service  = new routesLib.DirectionsService();
    const renderer = new routesLib.DirectionsRenderer({
      map,
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: "#b89a6a",
        strokeOpacity: 0.85,
        strokeWeight: 4,
      },
    });

    service.route(
      {
        origin: LUCERNE_HB,
        destination: KRIENS_MATTENHOF,
        travelMode: routesLib.TravelMode.TRANSIT,
      },
      (result, status) => {
        if (status === "OK" && result) {
          renderer.setDirections(result);
          const path = result.routes[0].overview_path;
          const mid  = path[Math.floor(path.length / 2)];
          onRoute({
            duration: "8 min",
            midpoint: { lat: mid.lat(), lng: mid.lng() },
          });
        }
      }
    );

    return () => renderer.setMap(null);
  }, [map, routesLib, onRoute]);

  return null;
}

function WalkRoute({ destination, onRoute }: { destination: google.maps.LatLngLiteral | null; onRoute: (info: RouteInfo) => void }) {
  const map = useMap();
  const routesLib = useMapsLibrary("routes");

  useEffect(() => {
    if (!map || !routesLib || !destination) return;

    const service  = new routesLib.DirectionsService();
    const renderer = new routesLib.DirectionsRenderer({
      map,
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: "#b89a6a",
        strokeOpacity: 0,
        strokeWeight: 3,
        icons: [
          {
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: "#b89a6a",
              fillOpacity: 0.9,
              strokeColor: "#b89a6a",
              strokeWeight: 1,
              scale: 2.5,
            },
            offset: "0",
            repeat: "10px",
          },
        ],
      },
    } as google.maps.DirectionsRendererOptions);

    service.route(
      {
        origin: KRIENS_MATTENHOF,
        destination,
        travelMode: routesLib.TravelMode.WALKING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          renderer.setDirections(result);
          const path = result.routes[0].overview_path;
          const mid  = path[Math.floor(path.length / 2)];
          onRoute({
            duration: "5 min",
            midpoint: { lat: mid.lat(), lng: mid.lng() },
          });
        }
      }
    );

    return () => renderer.setMap(null);
  }, [map, routesLib, destination, onRoute]);

  return null;
}

export function LocationMap() {
  const [busInfo,   setBusInfo]   = useState<RouteInfo | null>(null);
  const [trainInfo, setTrainInfo] = useState<RouteInfo | null>(null);
  const [walkInfo,  setWalkInfo]  = useState<RouteInfo | null>(null);
  const [aptPos,    setAptPos]    = useState<google.maps.LatLngLiteral | null>(null);

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        defaultCenter={{ lat: 47.033, lng: 8.295 }}
        defaultZoom={12}
        disableDefaultUI
        gestureHandling="cooperative"
        styles={MAP_STYLES}
        style={{ width: "100%", height: "100%" }}
      >
        <ApartmentMarker onGeocode={setAptPos} />
        <Marker position={OLD_TOWN}         icon={CIRCLE_ICON("#8A9E94")} />
        <Marker position={PILATUS}          icon={CIRCLE_ICON("#8A9E94")} />
        <Marker position={KRIENS_MATTENHOF} icon={CIRCLE_ICON("#b89a6a")} />
        <BusRoute   onRoute={setBusInfo}   />
        <TrainRoute onRoute={setTrainInfo} />
        <WalkRoute  destination={aptPos} onRoute={setWalkInfo} />

        {busInfo && (
          <InfoWindow position={busInfo.midpoint} headerDisabled pixelOffset={[0, -6]}>
            <span style={labelStyle}>🚌 {busInfo.duration}</span>
          </InfoWindow>
        )}
        {trainInfo && (
          <InfoWindow position={trainInfo.midpoint} headerDisabled pixelOffset={[0, -6]}>
            <span style={labelStyle}>🚆 {trainInfo.duration}</span>
          </InfoWindow>
        )}
        {walkInfo && (
          <InfoWindow position={walkInfo.midpoint} headerDisabled pixelOffset={[0, -6]}>
            <span style={labelStyle}>🚶 {walkInfo.duration}</span>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans, sans-serif)",
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#1d1a15",
  whiteSpace: "nowrap",
};
