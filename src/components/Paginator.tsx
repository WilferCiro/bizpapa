"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Paginator({
  totalPages,
  currentPage,
  onPageChange,
}: Props) {
  return (
    <div className="mb-5">
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <span className="text-sm">
            Página {currentPage} de {totalPages}
          </span>

          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
