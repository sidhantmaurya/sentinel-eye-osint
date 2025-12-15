import { GlassCard } from "@/components/ui/GlassCard";
import { RiskGauge } from "./RiskGauge";
import { Button } from "@/components/ui/button";
import { Copy, Download, MapPin, Clock, Phone, Building, CheckCircle, XCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export interface OSINTResult {
  input: string;
  type: string;
  location?: string;
  state?: string;
  latitude?: number;
  longitude?: number;
  carrier?: string;
  timezones?: string[];
  valid?: boolean;
  possible?: boolean;
  riskScore: number;
  timestamp: string;
}

interface ResultsPanelProps {
  result: OSINTResult | null;
}

export function ResultsPanel({ result }: ResultsPanelProps) {
  if (!result) {
    return (
      <GlassCard className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Phone className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Ready to Search</h3>
        <p className="text-muted-foreground text-sm max-w-xs">
          Enter a phone number, email, IP address, username, or domain to begin your OSINT investigation.
        </p>
      </GlassCard>
    );
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(result, null, 2));
    toast({
      title: "Copied!",
      description: "Results copied to clipboard",
    });
  };

  const exportResults = () => {
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `osint-result-${result.input.replace(/[^a-z0-9]/gi, "-")}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast({
      title: "Exported!",
      description: "Results downloaded as JSON",
    });
  };

  return (
    <GlassCard className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            {result.type} Lookup
          </p>
          <h3 className="text-xl font-mono font-semibold mt-1">{result.input}</h3>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={copyToClipboard}>
            <Copy className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={exportResults}>
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Risk Score */}
      <div className="flex justify-center py-4">
        <RiskGauge score={result.riskScore} size="lg" />
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {result.location && (
          <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
            <MapPin className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground uppercase">Location</p>
              <p className="font-medium">{result.location}</p>
              {result.state && (
                <p className="text-sm text-muted-foreground">{result.state}</p>
              )}
            </div>
          </div>
        )}

        {result.carrier && (
          <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
            <Building className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground uppercase">Carrier</p>
              <p className="font-medium">{result.carrier}</p>
            </div>
          </div>
        )}

        {result.timezones && result.timezones.length > 0 && (
          <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
            <Clock className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground uppercase">Timezone</p>
              <p className="font-medium">{result.timezones.join(", ")}</p>
            </div>
          </div>
        )}

        <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
          {result.valid ? (
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
          ) : (
            <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
          )}
          <div>
            <p className="text-xs text-muted-foreground uppercase">Validation</p>
            <p className="font-medium">
              {result.valid ? "Valid" : "Invalid"} {result.type}
            </p>
          </div>
        </div>
      </div>

      {/* Coordinates */}
      {result.latitude && result.longitude && (
        <div className="p-4 rounded-lg bg-secondary/30 font-mono text-sm">
          <p className="text-muted-foreground mb-1">Coordinates</p>
          <p className="text-primary">
            {result.latitude.toFixed(6)}, {result.longitude.toFixed(6)}
          </p>
        </div>
      )}

      {/* Timestamp */}
      <p className="text-xs text-muted-foreground text-center">
        Searched at {new Date(result.timestamp).toLocaleString()}
      </p>
    </GlassCard>
  );
}
