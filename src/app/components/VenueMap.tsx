"use client";
import dynamic from "next/dynamic";

const VenueMapClient = dynamic(() => import("./VenueMapClient"), {
  ssr: false,
  loading: () => <div className="venue-map-loading">Loading map...</div>,
});

export default function VenueMap() {
  return (
    <>
      <VenueMapClient />

      <style jsx>{`
        .venue-map-loading {
          width: 100%;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 28px;
          background: #dedbd2;
          color: #555555;
          font-family: "Montserrat", -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        @media (max-width: 850px) {
          .venue-map-loading {
            height: 430px;
          }
        }

        @media (max-width: 600px) {
          .venue-map-loading {
            height: 350px;
            border-radius: 22px;
          }
        }
      `}</style>
    </>
  );
}
