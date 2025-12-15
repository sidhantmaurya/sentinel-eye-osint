import { useEffect, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MapPin, Loader2 } from "lucide-react";

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

export function LocationMap({ location, className = "" }: LocationMapProps) {
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: any;
    TileLayer: any;
    Marker: any;
    Popup: any;
    useMap: any;
  } | null>(null);
  const [L, setL] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Dynamic import to avoid SSR issues
  useEffect(() => {
    const loadLeaflet = async () => {
      try {
        const leaflet = await import("leaflet");
        const reactLeaflet = await import("react-leaflet");
        await import("leaflet/dist/leaflet.css");
        
        setL(leaflet.default);
        setMapComponents({
          MapContainer: reactLeaflet.MapContainer,
          TileLayer: reactLeaflet.TileLayer,
          Marker: reactLeaflet.Marker,
          Popup: reactLeaflet.Popup,
          useMap: reactLeaflet.useMap,
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load map:", error);
        setIsLoading(false);
      }
    };

    loadLeaflet();
  }, []);

  const defaultCenter: [number, number] = [39.8283, -98.5795];
  const defaultZoom = 4;

  // Custom icon
  const customIcon = L
    ? new L.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      })
    : null;

  return (
    <GlassCard className={`p-0 overflow-hidden ${className}`}>
      <div className="p-4 border-b border-border/50">
        <h3 className="font-semibold flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          Location Map
        </h3>
      </div>
      <div className="h-[300px] relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : MapComponents ? (
          <MapComponents.MapContainer
            center={location ? [location.latitude, location.longitude] : defaultCenter}
            zoom={location ? 10 : defaultZoom}
            className="h-full w-full z-0"
            style={{ background: "hsl(var(--card))" }}
          >
            <MapComponents.TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <MapViewUpdater location={location} useMap={MapComponents.useMap} />
            {location && customIcon && (
              <MapComponents.Marker
                position={[location.latitude, location.longitude]}
                icon={customIcon}
              >
                <MapComponents.Popup>
                  <div className="text-sm">
                    <p className="font-semibold">{location.label || "Target Location"}</p>
                    {location.details && (
                      <p className="text-gray-600 mt-1">{location.details}</p>
                    )}
                    <p className="text-xs text-blue-600 mt-2 font-mono">
                      {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}
                    </p>
                  </div>
                </MapComponents.Popup>
              </MapComponents.Marker>
            )}
          </MapComponents.MapContainer>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50">
            <p className="text-sm text-muted-foreground">Failed to load map</p>
          </div>
        )}
        {!location && !isLoading && MapComponents && (
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

// Separate component to handle map view updates
function MapViewUpdater({ 
  location, 
  useMap 
}: { 
  location: LocationData | null; 
  useMap: () => any;
}) {
  const map = useMap();

  useEffect(() => {
    if (location && map) {
      map.flyTo([location.latitude, location.longitude], 10, {
        duration: 1.5,
      });
    }
  }, [location, map]);

  return null;
}
