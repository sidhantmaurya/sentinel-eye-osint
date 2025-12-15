import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { GlassCard } from "@/components/ui/GlassCard";
import { MapPin } from "lucide-react";

// Fix for default marker icon
const customIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface LocationData {
  latitude: number;
  longitude: number;
  label?: string;
  details?: string;
}

interface LocationMapProps {
  location: LocationData | null;
  className?: string;
}

// Component to update map view when location changes
function MapUpdater({ location }: { location: LocationData | null }) {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.flyTo([location.latitude, location.longitude], 10, {
        duration: 1.5,
      });
    }
  }, [location, map]);

  return null;
}

export function LocationMap({ location, className = "" }: LocationMapProps) {
  const defaultCenter: [number, number] = [39.8283, -98.5795]; // Center of US
  const defaultZoom = 4;

  return (
    <GlassCard className={`p-0 overflow-hidden ${className}`}>
      <div className="p-4 border-b border-border/50">
        <h3 className="font-semibold flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          Location Map
        </h3>
      </div>
      <div className="h-[300px] relative">
        <MapContainer
          center={location ? [location.latitude, location.longitude] : defaultCenter}
          zoom={location ? 10 : defaultZoom}
          className="h-full w-full z-0"
          style={{ background: "hsl(var(--card))" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <MapUpdater location={location} />
          {location && (
            <Marker
              position={[location.latitude, location.longitude]}
              icon={customIcon}
            >
              <Popup className="osint-popup">
                <div className="text-sm">
                  <p className="font-semibold text-foreground">{location.label || "Target Location"}</p>
                  {location.details && (
                    <p className="text-muted-foreground mt-1">{location.details}</p>
                  )}
                  <p className="text-xs text-primary mt-2 font-mono">
                    {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}
                  </p>
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
        {!location && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10">
            <p className="text-sm text-muted-foreground">
              Location data will appear here after search
            </p>
          </div>
        )}
      </div>
    </GlassCard>
  );
}
