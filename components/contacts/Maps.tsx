"use client";
import React from "react";

interface MapsProps {
  // Koordinatları props ile verebilirsin
  lat: number;
  lng: number;
  zoom?: number;
}



const Maps: React.FC<MapsProps> = ({ lat, lng, zoom = 15 }) => {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96220.94003190826!2d28.719064497265638!3d41.0929359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caaf7ff3259229%3A0x3638eb5a1a62619a!2sTKM!5e0!3m2!1str!2str!4v1761398578518!5m2!1str!2str`;

  return (
    <div className="w-full h-96 md:h-[500px] overflow-hidden shadow-md">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        src={mapSrc}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Maps;
