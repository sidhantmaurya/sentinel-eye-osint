import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Phone, Mail, Globe, User, Server } from "lucide-react";

export type SearchType = "phone" | "email" | "ip" | "username" | "domain";

interface SearchBoxProps {
  onSearch: (query: string, type: SearchType) => void;
  isLoading?: boolean;
}

const searchTypes = [
  { value: "phone", label: "Phone", icon: Phone, placeholder: "+1 234 567 8900" },
  { value: "email", label: "Email", icon: Mail, placeholder: "example@domain.com" },
  { value: "ip", label: "IP Address", icon: Server, placeholder: "192.168.1.1" },
  { value: "username", label: "Username", icon: User, placeholder: "@username" },
  { value: "domain", label: "Domain", icon: Globe, placeholder: "example.com" },
] as const;

export function SearchBox({ onSearch, isLoading }: SearchBoxProps) {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState<SearchType>("phone");

  const currentType = searchTypes.find((t) => t.value === searchType)!;
  const Icon = currentType.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim(), searchType);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="glass rounded-2xl p-2 cyber-glow">
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={searchType} onValueChange={(v) => setSearchType(v as SearchType)}>
            <SelectTrigger className="w-full sm:w-40 bg-secondary border-0">
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-primary" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              {searchTypes.map((type) => {
                const TypeIcon = type.icon;
                return (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex items-center gap-2">
                      <TypeIcon className="w-4 h-4" />
                      {type.label}
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>

          <div className="flex-1 relative">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={currentType.placeholder}
              className="w-full bg-secondary border-0 pl-4 pr-12 h-10"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="cyber-glow-sm"
          >
            <Search className="w-4 h-4 mr-2" />
            {isLoading ? "Searching..." : "Search"}
          </Button>
        </div>
      </div>
    </form>
  );
}
