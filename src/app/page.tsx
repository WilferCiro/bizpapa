"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import AcronymList from "@/components/AcronymList";
import Footer from "@/components/Footer";
import { acronyms } from "@/lib/data";
import type { Acronym } from "@/lib/types";
import { SYN_MODE_ENUM } from "@/lib/enum/types-enum";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredAcronyms, setFilteredAcronyms] = useState<Acronym[]>(acronyms);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [mode, setMode] = useState<SYN_MODE_ENUM>(SYN_MODE_ENUM.MEME);

  const itemsPerPage = 12;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const results = acronyms.filter(
      (acronym) =>
        acronym.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acronym.professionalMeaning
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        acronym.memeMeaning.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAcronyms(results);
    setCurrentPage(1);
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleMode = () => {
    setMode(
      mode === SYN_MODE_ENUM.PROFESSIONAL
        ? SYN_MODE_ENUM.MEME
        : SYN_MODE_ENUM.PROFESSIONAL
    );
  };

  const totalPages = Math.ceil(filteredAcronyms.length / itemsPerPage);
  const currentAcronyms = filteredAcronyms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        isFixed={isHeaderFixed}
        mode={mode}
        toggleMode={toggleMode}
        onSearch={handleSearch}
      />
      <main className="flex-grow pb-16">
        <div
          className={`container mx-auto px-4 pt-24 ${
            isHeaderFixed ? "mt-16" : ""
          }`}
        >
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-center mb-6">
              Diccionario de Acrónimos de Negocios
            </h1>
            <p className="text-center text-muted-foreground mb-8">
              Descifra la jerga empresarial con nuestro completo diccionario de
              acrónimos. ¡Alterna entre definiciones profesionales e
              interpretaciones humorísticas!
            </p>
            <SearchBar onSearch={handleSearch} />
          </div>

          <AcronymList
            acronyms={currentAcronyms}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            mode={mode}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
