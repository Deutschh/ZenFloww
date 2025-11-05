import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export function LucroCard() {
  return (
    // 'h-full' e 'flex-col' para preencher a célula do grid
    <Card className="h-full flex flex-col bg-transparent border-none text-white gap-y-0 p-2.5">
      
      <CardHeader className="flex-row items-center justify-between space-y-0 ">
        <CardTitle className="text-sm font-medium text-zinc-200/80">
          Lucro Salvo (Este Mês)
        </CardTitle>
        {/* Ícone verde para "lucro" */}
        <TrendingUp className="h-6 w-6 text-green-400" />
      </CardHeader>

      {/* 'flex-grow' empurra o footer para baixo e centraliza o conteúdo */}
      <CardContent className="flex-grow flex items-center justify-center">
        {/* Este é o ponto de venda! */}
        <div className="text-5xl font-bold text-white mt-1">
          R$ 1.845,00
        </div>
      </CardContent>

      <CardFooter className="pb-4">
        <p className="text-xs text-gray-400 mt-4">
          +22% de lucro com os alertas e sugestões
        </p>
      </CardFooter>
    </Card>
  );
}