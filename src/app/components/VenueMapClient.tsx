"use client";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [6.45363, 3.44568];

const wheatbakerIcon = L.divIcon({
  className: "wheatbaker-marker",
  html: `
    <div class="marker-wrap">
      <div class="marker-pulse"></div>
      <div class="marker-pin">
        <div class="marker-dot"></div>
      </div>
    </div>
  `,
  iconSize: [46, 46],
  iconAnchor: [23, 23],
  popupAnchor: [0, -25],
});

export default function VenueMapClient() {
  return (
    <div className="venue-map">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        zoomControl={false}
        dragging={true}
        doubleClickZoom={true}
        touchZoom={true}
        className="leaflet-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="bottomright" />

        <Marker position={position} icon={wheatbakerIcon}>
          <Popup>
            <strong>The Wheatbaker</strong>
            <br />
            4 Onitolo Road
            <br />
            Ikoyi, Lagos
          </Popup>
        </Marker>
      </MapContainer>

      <div className="map-overlay">
        <span>THE VENUE</span>
        <strong>The Wheatbaker</strong>
      </div>

      <div className="map-credit">© OpenStreetMap contributors</div>

      <style jsx global>{`
        .venue-map {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          border-radius: 28px;
          background: #dedbd2;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.1),
            0 5px 15px rgba(0, 0, 0, 0.04);
        }

        .leaflet-map {
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12) !important;
        }

        .leaflet-control-zoom a {
          width: 34px !important;
          height: 34px !important;
          line-height: 34px !important;
          border: none !important;
          background: rgba(255, 255, 255, 0.94) !important;
          color: #111111 !important;
          font-size: 18px !important;
        }

        .leaflet-control-zoom a:hover {
          background: #ffffff !important;
          color: #9a762e !important;
        }

        .leaflet-control-zoom a:first-child {
          border-radius: 10px 10px 0 0 !important;
        }

        .leaflet-control-zoom a:last-child {
          border-radius: 0 0 10px 10px !important;
        }

        .leaflet-popup-content-wrapper {
          border-radius: 14px !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12) !important;
        }

        .leaflet-popup-content {
          margin: 14px 16px !important;
          color: #292929;
          font-size: 13px;
          line-height: 1.6;
        }

        .leaflet-popup-tip {
          box-shadow: none !important;
        }

        .marker-wrap {
          position: relative;
          width: 46px;
          height: 46px;
        }

        .marker-pulse {
          position: absolute;
          width: 46px;
          height: 46px;
          top: 0;
          left: 0;
          border-radius: 50%;
          background: rgba(154, 118, 46, 0.18);
          animation: markerPulse 2.4s ease-out infinite;
        }

        .marker-pin {
          position: absolute;
          top: 7px;
          left: 7px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50% 50% 50% 0;
          background: #111111;
          transform: rotate(-45deg);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        }

        .marker-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #d0ad65;
        }

        .map-overlay {
          position: absolute;
          z-index: 500;
          top: 24px;
          left: 24px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 14px 16px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .map-overlay span {
          color: #9a762e;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.14em;
        }

        .map-overlay strong {
          color: #111111;
          font-size: 13px;
          font-weight: 600;
        }

        .map-credit {
          position: absolute;
          z-index: 500;
          right: 10px;
          bottom: 8px;
          padding: 3px 6px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.8);
          color: #444444;
          font-size: 9px;
        }

        @keyframes markerPulse {
          0% {
            transform: scale(0.5);
            opacity: 0.8;
          }

          70% {
            transform: scale(1.3);
            opacity: 0;
          }

          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @media (max-width: 850px) {
          .venue-map {
            height: 430px;
          }
        }

        @media (max-width: 600px) {
          .venue-map {
            height: 350px;
            border-radius: 22px;
          }

          .map-overlay {
            top: 18px;
            left: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marker-pulse {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
