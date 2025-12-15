import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { SearchBox, SearchType } from "@/components/osint/SearchBox";
import { ResultsPanel, OSINTResult } from "@/components/osint/ResultsPanel";
import {
  Shield,
  LogOut,
  Phone,
  Mail,
  Globe,
  User,
  Server,
  History,
  Settings,
  Home,
  Search,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Mock OSINT lookup function
const performOSINTLookup = async (query: string, type: SearchType): Promise<OSINTResult> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Mock results based on type
  const mockResults: Record<SearchType, Partial<OSINTResult>> = {
    phone: {
      location: "California, United States",
      state: "California",
      latitude: 36.7783,
      longitude: -119.4179,
      carrier: "Verizon Wireless",
      timezones: ["America/Los_Angeles"],
      valid: true,
      possible: true,
      riskScore: Math.floor(Math.random() * 40) + 10,
    },
    email: {
      location: "Gmail - Google Inc.",
      valid: true,
      riskScore: Math.floor(Math.random() * 30) + 5,
    },
    ip: {
      location: "San Francisco, CA",
      state: "California",
      latitude: 37.7749,
      longitude: -122.4194,
      carrier: "Cloudflare Inc.",
      timezones: ["America/Los_Angeles"],
      valid: true,
      riskScore: Math.floor(Math.random() * 50) + 20,
    },
    username: {
      location: "Found on 12 platforms",
      valid: true,
      riskScore: Math.floor(Math.random() * 60) + 10,
    },
    domain: {
      location: "Registered: GoDaddy",
      carrier: "Cloudflare (DNS)",
      valid: true,
      riskScore: Math.floor(Math.random() * 35) + 5,
    },
  };

  return {
    input: query,
    type,
    ...mockResults[type],
    timestamp: new Date().toISOString(),
  } as OSINTResult;
};

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
  { icon: Search, label: "New Search", href: "#search", active: false },
  { icon: History, label: "History", href: "#history", active: false },
  { icon: Settings, label: "Settings", href: "#settings", active: false },
];

const searchStats = [
  { icon: Phone, label: "Phone", count: 124 },
  { icon: Mail, label: "Email", count: 89 },
  { icon: Server, label: "IP", count: 56 },
  { icon: User, label: "Username", count: 34 },
  { icon: Globe, label: "Domain", count: 21 },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [result, setResult] = useState<OSINTResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState<OSINTResult[]>([]);

  const handleSearch = async (query: string, type: SearchType) => {
    setIsLoading(true);
    try {
      const searchResult = await performOSINTLookup(query, type);
      setResult(searchResult);
      setSearchHistory((prev) => [searchResult, ...prev.slice(0, 9)]);
      toast({
        title: "Search Complete",
        description: `${type} lookup finished for ${query}`,
      });
    } catch (error) {
      toast({
        title: "Search Failed",
        description: "An error occurred during the lookup.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "See you next time!",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border/50 bg-card/50 p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mb-8 px-2">
          <div className="p-2 rounded-lg bg-primary/10 cyber-glow-sm">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold gradient-text">ShadowTrace</span>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <Button
          variant="ghost"
          className="justify-start text-muted-foreground hover:text-destructive"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 glass border-b border-border/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">OSINT Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Ethical intelligence gathering
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium">Agent Demo</p>
                <p className="text-xs text-muted-foreground">Free Plan • 8/10 searches</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Search Box */}
          <section id="search">
            <SearchBox onSearch={handleSearch} isLoading={isLoading} />
          </section>

          {/* Stats Row */}
          <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {searchStats.map((stat, index) => (
              <GlassCard key={index} className="p-4 text-center">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">{stat.count}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </GlassCard>
            ))}
          </section>

          {/* Results */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ResultsPanel result={result} />
            </div>

            {/* Recent History */}
            <div>
              <GlassCard className="h-full">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <History className="w-4 h-4 text-primary" />
                  Recent Searches
                </h3>
                {searchHistory.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    No recent searches
                  </p>
                ) : (
                  <div className="space-y-3">
                    {searchHistory.slice(0, 5).map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setResult(item)}
                        className="w-full text-left p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <p className="font-mono text-sm truncate">{item.input}</p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {item.type} • Risk: {item.riskScore}%
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </GlassCard>
            </div>
          </div>

          {/* Disclaimer */}
          <GlassCard className="bg-primary/5 border-primary/20">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm mb-1">Ethical Use Notice</h4>
                <p className="text-xs text-muted-foreground">
                  This platform uses publicly available OSINT sources only. No real-time tracking, 
                  private databases, or invasive surveillance. Data is approximate and for educational 
                  & investigative purposes only. GDPR & CCPA compliant.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
