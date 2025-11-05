// Em: src/components/SugestoesCarrossel.jsx

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Lightbulb } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const sugestoes = [
  {
    id: 1,
    tipo: "Menos Desperdício",
    texto:
      "Notamos sobras de 35% nas 'Baguetes Recheadas' às terças. Sugerimos reduzir a produção em 30% na próxima terça.",
  },
  {
    id: 2,
    tipo: "Otimização de Lucro",
    texto:
      "O custo da 'Farinha Especial' aumentou 12%. Sugerimos aumentar o preço do Pão Italiano para R$ 24,50 para preservar sua margem.",
  },
  {
    id: 3,
    tipo: "Aumento de Vendas",
    texto:
      "Clientes que compram 'Café Expresso' após as 17h raramente levam um acompanhamento. Sugerimos um combo 'Café + Pão de Queijo' por R$ 9,00.",
  },
];

export function SugestoesCarrossel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 5000, // <<-- CORRIGIDO para 10 segundos
      stopOnInteraction: true,
    })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full overflow-hidden"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play} // <<-- MUDANÇA AQUI (de reset para play)
    >
      <CarouselContent className="h-full">
        {sugestoes.map((sugestao) => (
          <CarouselItem key={sugestao.id} className="h-full">
            {/* Ajuste no padding: 'pb-10' (padding-bottom) 
              Isso dá espaço para os botões não ficarem em cima do texto.
            */}
            <div className="p-4 pb-10 h-full flex flex-col text-neutral-200">
              <div className="flex flex-row items-center gap-3 pb-4">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-gray-200">
                  {sugestao.tipo}
                </h3>
              </div>
              <div className="flex-grow overflow-hidden">
                <p className="text-base text-zinc-200/80">{sugestao.texto}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* MUDANÇA AQUI: Wrapper para os botões 
        Posiciona o 'div' no centro-inferior do carrossel.
      */}
      <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        <CarouselPrevious
          // 'relative' anula o 'absolute' padrão do shadcn
          className="relative translate-x-0 translate-y-0 bg-zinc-800/50 border-none text-white hover:bg-zinc-700 disabled:opacity-30"
        />
        <CarouselNext
          // 'relative' anula o 'absolute' padrão do shadcn
          className="relative translate-x-0 translate-y-0 bg-zinc-800/50 border-none text-white hover:bg-zinc-700 disabled:opacity-30"
        />
      </div>
    </Carousel>
  );
}