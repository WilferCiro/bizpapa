"use client";

import type { Acronym } from "@/lib/types";
import AcronymCard from "./AcronymCard";
import { SYN_MODE_ENUM } from "@/lib/enum/types-enum";
import Paginator from "./Paginator";

interface AcronymListProps {
  acronyms: Acronym[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  mode: SYN_MODE_ENUM;
}

export default function AcronymList({
  acronyms,
  currentPage,
  totalPages,
  onPageChange,
  mode,
}: AcronymListProps) {
  if (acronyms.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium">No se encontraron acrónimos</h3>
        <p className="text-muted-foreground mt-2">
          Intenta con un término de búsqueda diferente
        </p>
      </div>
    );
  }

  return (
    <div>
      <Paginator
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {acronyms.map((acronym) => (
          <AcronymCard key={acronym.id} acronym={acronym} mode={mode} />
        ))}
      </div>

      <Paginator
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}
