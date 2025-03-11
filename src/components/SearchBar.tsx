"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onSearch: (term: string) => void;
  compact?: boolean;
}

export default function SearchBar({
  onSearch,
  compact = false,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="flex">
        <Input
          type="text"
          placeholder="Buscar acrónimos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`rounded-r-none ${compact ? "h-9 text-sm" : ""}`}
        />
        {searchTerm && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={`absolute ${
              compact ? "right-12 top-0 h-9" : "right-14 top-0 h-10"
            }`}
            onClick={clearSearch}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
        <Button
          type="submit"
          className={`rounded-l-none ${compact ? "h-9 px-3 text-sm" : ""}`}
        >
          <Search className="h-4 w-4 mr-2" />
          {!compact && "Buscar"}
        </Button>
      </div>
    </form>
  );
}
