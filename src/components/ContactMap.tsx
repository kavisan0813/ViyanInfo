import { useRef, useLayoutEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const glowIcon = L.divIcon({
  className: "",
  html: `<div class="glow-marker"></div>`,
  iconSize: [20, 20],
});

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const position: [number, number] = [13.150031, 79.917083];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(mapRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mapRef}
      className="glass-card p-2 h-[320px] rounded-2xl overflow-hidden relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/40 via-transparent to-transparent z-40" />
      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={false}
        className="h-full w-full rounded-xl z-0"
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=8e1d06eb-8a7a-46ab-8993-f5234aa30a20"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; OpenMapTiles &copy; OpenStreetMap contributors'
        />

        <Marker position={position} icon={glowIcon} />
      </MapContainer>
    </div>
  );
}
