import type { Acronym } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SYN_MODE_ENUM } from "@/lib/enum/types-enum";

interface AcronymCardProps {
  acronym: Acronym;
  mode: SYN_MODE_ENUM;
}

export default function AcronymCard({ acronym, mode }: AcronymCardProps) {
  const isProfessional = mode === SYN_MODE_ENUM.PROFESSIONAL;
  const meaning = isProfessional
    ? acronym.professionalMeaning
    : acronym.memeMeaning;
  const example = isProfessional
    ? acronym.professionalExample
    : acronym.memeExample;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{acronym.term}</CardTitle>
          <Badge variant={isProfessional ? "default" : "secondary"}>
            {isProfessional ? "Pro" : "Meme"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="mb-4">{meaning}</p>
        <div className="mt-auto pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Ejemplo:</span> {example}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
