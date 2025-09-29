import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Clock, TrendingUp, MapPin, Building, User } from "lucide-react";

interface SearchSuggestion {
  id: string;
  type: "skill" | "company" | "location" | "position" | "person" | "recent";
  text: string;
  category?: string;
  count?: number;
}

interface SearchAutocompleteProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchAutocomplete = ({ placeholder = "Search...", onSearch, className }: SearchAutocompleteProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "React Developer", "Machine Learning", "CitiBank", "New York", "Internship"
  ]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const mockSuggestions: SearchSuggestion[] = [
    { id: "1", type: "skill", text: "React", count: 245 },
    { id: "2", type: "skill", text: "Python", count: 412 },
    { id: "3", type: "skill", text: "Machine Learning", count: 156 },
    { id: "4", type: "skill", text: "TypeScript", count: 189 },
    { id: "5", type: "company", text: "CitiBank", count: 23 },
    { id: "6", type: "company", text: "Goldman Sachs", count: 18 },
    { id: "7", type: "company", text: "JPMorgan Chase", count: 31 },
    { id: "8", type: "location", text: "New York, NY", count: 156 },
    { id: "9", type: "location", text: "San Francisco, CA", count: 89 },
    { id: "10", type: "location", text: "London, UK", count: 67 },
    { id: "11", type: "position", text: "Software Engineer", count: 178 },
    { id: "12", type: "position", text: "Data Scientist", count: 134 },
    { id: "13", type: "position", text: "Product Manager", count: 92 },
    { id: "14", type: "person", text: "Sarah Chen - MIT CS", category: "Student" },
    { id: "15", type: "person", text: "Marcus Johnson - Stanford DS", category: "Student" },
  ];

  useEffect(() => {
    if (query.length > 0) {
      const filtered = mockSuggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(query.toLowerCase())
      );
      
      const recentFiltered = recentSearches
        .filter(search => search.toLowerCase().includes(query.toLowerCase()))
        .map((search, index) => ({
          id: `recent-${index}`,
          type: "recent" as const,
          text: search
        }));

      setSuggestions([...recentFiltered, ...filtered.slice(0, 8)]);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    setIsOpen(false);
    
    // Add to recent searches if not already present
    if (!recentSearches.includes(suggestion.text)) {
      setRecentSearches(prev => [suggestion.text, ...prev.slice(0, 4)]);
    }
    
    onSearch?.(suggestion.text);
  };

  const handleSearch = () => {
    if (query.trim()) {
      if (!recentSearches.includes(query.trim())) {
        setRecentSearches(prev => [query.trim(), ...prev.slice(0, 4)]);
      }
      onSearch?.(query.trim());
      setIsOpen(false);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "skill": return <Badge variant="secondary" className="text-xs">Skill</Badge>;
      case "company": return <Building className="h-3 w-3 text-blue-500" />;
      case "location": return <MapPin className="h-3 w-3 text-green-500" />;
      case "position": return <Badge variant="outline" className="text-xs">Role</Badge>;
      case "person": return <User className="h-3 w-3 text-purple-500" />;
      case "recent": return <Clock className="h-3 w-3 text-muted-foreground" />;
      default: return <Search className="h-3 w-3" />;
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
            if (e.key === 'Escape') {
              setIsOpen(false);
            }
          }}
          onFocus={() => query && setIsOpen(true)}
          className="pl-10 pr-4"
        />
      </div>

      {isOpen && suggestions.length > 0 && (
        <Card ref={dropdownRef} className="absolute top-full left-0 right-0 z-50 mt-1 shadow-elegant border-2">
          <CardContent className="p-2">
            <div className="space-y-1">
              {suggestions.map((suggestion) => (
                <Button
                  key={suggestion.id}
                  variant="ghost"
                  className="w-full justify-start h-auto p-2 text-left"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex-shrink-0">
                      {getIcon(suggestion.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{suggestion.text}</p>
                      {suggestion.category && (
                        <p className="text-xs text-muted-foreground">{suggestion.category}</p>
                      )}
                    </div>
                    {suggestion.count && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <TrendingUp className="h-3 w-3" />
                        {suggestion.count}
                      </div>
                    )}
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};