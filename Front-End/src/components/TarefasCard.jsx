// Em: src/components/TarefasCard.jsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ListChecks } from "lucide-react";

export function TarefasCard() {
  return (
    <Card className="h-full flex flex-col bg-transparent border-none text-white p-0 gap-y-5">
      <CardHeader className="flex items-center justify-between space-y-0 mt-2">
        <CardTitle className="text-sm font-medium text-gray-300">
          Foco para Hoje
        </CardTitle>
        <ListChecks className="h-7 w-7 text-zinc-200/70" />
      </CardHeader>
      <CardContent className="flex-grow p-0 ml-2">
        <div className="flex flex-col space-y-3">
          
          {/* Tarefa 1 */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="task1"
              defaultChecked // Mantém o estado inicial marcado
              className="border-gray-500 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
            />
            <Label
              htmlFor="task1"
              // A MUDANÇA ESTÁ AQUI:
              className="text-sm text-gray-300 peer-data-[state=checked]:line-through peer-data-[state=checked]:text-gray-400 transition-colors"
            >
              Ligar para fornecedor (Farinha)
            </Label>
          </div>

          {/* Tarefa 2 */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="task2"
              className="border-gray-500 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
            />
            <Label
              htmlFor="task2"
              // A MUDANÇA ESTÁ AQUI:
              className="text-sm text-gray-300 peer-data-[state=checked]:line-through peer-data-[state=checked]:text-gray-400 transition-colors"
            >
              Criar promoção (Torta de Morango)
            </Label>
          </div>

          {/* Tarefa 3 */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="task3"
              className="border-gray-500 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
            />
            <Label
              htmlFor="task3"
              // A MUDANÇA ESTÁ AQUI:
              className="text-sm text-gray-300 peer-data-[state=checked]:line-through peer-data-[state=checked]:text-gray-400 transition-colors"
            >
              Ajustar preço (Pão Italiano)
            </Label>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}