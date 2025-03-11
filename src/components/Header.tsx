"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Laugh, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import SearchBar from "./SearchBar";
import { SYN_MODE_ENUM } from "@/lib/enum/types-enum";

interface Props {
  isFixed: boolean;
  mode: SYN_MODE_ENUM;
  toggleMode: () => void;
  onSearch: (term: string) => void;
}

export default function Header({ isFixed, mode, toggleMode, onSearch }: Props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`w-full bg-background border-b z-50 transition-all duration-300 ${
        isFixed ? "fixed top-0 shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl">Biz papá</span>
        </div>

        {isFixed && (
          <div className="flex-1 max-w-md mx-4">
            <SearchBar onSearch={onSearch} compact={true} />
          </div>
        )}

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMode}
            title={
              mode === SYN_MODE_ENUM.PROFESSIONAL
                ? "Cambiar a Modo Meme"
                : "Cambiar a Modo Profesional"
            }
          >
            {mode === SYN_MODE_ENUM.PROFESSIONAL ? (
              <Laugh className="h-5 w-5" />
            ) : (
              <Briefcase className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title={
              theme === "dark"
                ? "Cambiar a Modo Claro"
                : "Cambiar a Modo Oscuro"
            }
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
