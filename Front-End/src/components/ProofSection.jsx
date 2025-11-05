// Em: src/components/ProofSection.jsx

// 1. IMPORTAMOS O 'useRef' e o 'Autoplay'
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FileSpreadsheet,
  BrainCircuit,
  Quote,
  RocketIcon,
  ArrowRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"; // 2. Importei o Button

// --- 2. DADOS ATUALIZADOS (8 DEPOIMENTOS COM FOTOS REAIS) ---
const depoimentos = [
  {
    id: 1,
    texto:
      "Em 60 dias, o ZenFlow reduziu nosso desperdício de pães em 40%. O sistema se pagou em dois meses.",
    nome: "Carlos Silva",
    cargo: "Dono da Padaria Pão Dourado",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=75",
    fallback: "CS",
  },
  {
    id: 2,
    texto:
      "Eu costumava passar 3 horas por dia no Excel. Agora, aprovo a lista de compras da IA em 10 minutos pelo celular. É liberdade.",
    nome: "Juliana Mendes",
    cargo: "Gerente da Confeitaria Doce Sonho",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=75",
    fallback: "JM",
  },
  {
    id: 3,
    texto:
      "O assistente de IA é incrível. Pedi 'quais produtos não venderam na última quarta' e ele me deu a lista. Mudou o jogo.",
    nome: "Marcos Andrade",
    cargo: "Chef Executivo, Ristorante Bello",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&q=75",
    fallback: "MA",
  },
  {
    id: 4,
    texto:
      "Finalmente sei o custo exato de cada produto. Os alertas de estoque salvaram minha produção na última sexta-feira.",
    nome: "Renata Oliveira",
    cargo: "Proprietária, Cantina da Nona",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=75",
    fallback: "RO",
  },
  {
    id: 5,
    texto:
      "A previsão de demanda é assustadoramente precisa. Reduzimos o desperdício de ingredientes perecíveis em mais de 50%.",
    nome: "Lucas Bernardes",
    cargo: "Gerente de Compras, Empório Central",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=75",
    fallback: "LB",
  },
  {
    id: 6,
    texto:
      "O ZenFlow é o cérebro do meu negócio. Eu só foco em atender bem o cliente, o sistema cuida do resto.",
    nome: "Beatriz Costa",
    cargo: "Dona, Café Aconchego",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=75",
    fallback: "BC",
  },
  {
    id: 7,
    texto:
      "Poder ajustar os preços com base no lucro real de cada item, e não no 'achismo', aumentou nossa margem em 15%.",
    nome: "Thiago Nunes",
    cargo: "Sócio-fundador, Hamburgueria 8-Bit",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=75",
    fallback: "TN",
  },
  {
    id: 8,
    texto:
      "Meu medo era ser complicado, mas a interface é muito intuitiva. Em dois dias, a equipe inteira já estava usando.",
    nome: "Sofia Almeida",
    cargo: "Gerente, Delícias da Vila",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&q=75",
    fallback: "SA",
  },
];

export function ProofSection() {
  const targetRef = useRef(null);

  // 3. CONFIGURAMOS O PLUGIN DE AUTOPLAY
  const plugin = useRef(
    Autoplay({
      delay: 5000, // 5 segundos por slide
      stopOnInteraction: true,
    })
  );

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // --- LÓGICA DE ANIMAÇÃO (Sem alteração) ---
  const opacityTitulo = useTransform(scrollYProgress, [0, 0.0], [0, 1]);
  const yTitulo = useTransform(scrollYProgress, [0.05, 0.2], [50, 0]);
  const opacityCard1 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const yCard1 = useTransform(scrollYProgress, [0.2, 0.35], [50, 0]);
  const opacityCard2 = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const yCard2 = useTransform(scrollYProgress, [0.35, 0.5], [50, 0]);
  const opacityCarousel = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const yCarousel = useTransform(scrollYProgress, [0.5, 0.65], [50, 0]);
  const opacityStats = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);
  const yStats = useTransform(scrollYProgress, [0.65, 0.8], [50, 0]);

  return (
    <section ref={targetRef} className="relative w-full h-[300vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="container mx-auto flex gap-8 text-white">
          {/* --- COLUNA DA ESQUERDA (Seu código, sem alteração) --- */}
          <div className="w-1/2 flex flex-col gap-6">
            <motion.h2
              className="text-5xl font-bold font-display text-foreground mb-4"
              style={{ opacity: opacityTitulo, y: yTitulo }}
            >
              Chega de <span className="text-indigo-600">achismo</span> <br />{" "}
              Assuma o controle<span className="text-6xl ml-2">!</span>
            </motion.h2>

            <motion.div style={{ opacity: opacityCard1, y: yCard1 }}>
              {/* Card 1: Problemas (Planilhas) */}
              <div className="p-6 rounded-xl ">
                {/* ... (conteúdo do card 1) ... */}
                <div className="flex items-center gap-3">
                  <FileSpreadsheet className="w-10 h-10 text-red-400" />
                  <h3 className="text-2xl font-bold text-red-400">
                    Gestão com Planilhas
                  </h3>
                </div>
                <ul className="mt-4 space-y-5 list-none text-gray-400 ml-16 text-lg font-bold">
                  {/* ... (lista) ... */}
                  <li className="flex items-center gap-2">
                    ❌ Dados atrasados (só no fim do dia)
                  </li>
                  <li className="flex items-center gap-2">
                    ❌ Erros manuais de digitação
                  </li>
                  <li className="flex items-center gap-2">
                    ❌ Nenhuma previsão de demanda
                  </li>
                  <li className="flex items-center gap-2">
                    ❌ Horas perdidas atualizando células
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div style={{ opacity: opacityCard2, y: yCard2 }}>
              {/* Card 2: Solução (ZenFlow) */}
              <div
                className={` transition-all duration-800 bg-slate-200/20 mt-4 p-6 rounded-xl border-2 border-indigo-600 shadow-[0px_0px_30px_rgba(67,45,215,0.4)]`}
              >
                {/* ... (conteúdo do card 2) ... */}
                <div className="flex items-center gap-3">
                  <BrainCircuit className="w-10 h-10 text-indigo-600" />
                  <h3 className="text-2xl font-bold text-indigo-600">
                    Gestão com ZenFlow
                  </h3>
                </div>
                <ul className="mt-4 space-y-5 text-gray-400 ml-16 text-lg font-bold">
                  {/* ... (lista) ... */}
                  <li className="flex items-center gap-2">
                    ✔️ Dados em tempo real, direto do PDV
                  </li>
                  <li className="flex items-center gap-2">
                    ✔️ Alertas automáticos de estoque
                  </li>
                  <li className="flex items-center gap-2">
                    ✔️ Previsão de vendas com IA
                  </li>
                  <li className="flex items-center gap-2">
                    ✔️ Dúvidas? Pergunte ao nosso assistente IA
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* --- COLUNA DA DIREITA (COM AS MUDANÇAS) --- */}
          <div className="w-1/2 flex flex-col gap-6 bg-paink-700 justify-between">
            <motion.div
              style={{ opacity: opacityCarousel, y: yCarousel }}
              className="shadow-[0px_0px_30px_rgba(67,45,215,0.6)] rounded-xl mx-auto w-9/12 bg-slate-200/20"
              // 4. ADICIONAMOS OS 'event handlers' PARA PAUSAR O AUTOPLAY
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.play}
            >
              <Carousel
                className="w-full mx-auto bg-slate-200/20"
                // 5. PASSAMOS O PLUGIN PARA O CARROSSEL
                plugins={[plugin.current]}
              >
                <CarouselContent>
                  {/* O .map() agora vai renderizar os 8 depoimentos */}
                  {depoimentos.map((depoimento) => (
                    <CarouselItem key={depoimento.id}>
                      <div className="">
                        <div className="p-6 bg-foreground rounded-xl border-3 border-indigo-600 min-h-80 flex flex-col justify-between">
                          {/* (usei 'justify-between' para alinhar o avatar embaixo) */}
                          <div>
                            <Quote className="w-8 h-8 text-indigo-400" />
                            <p className="mt-6 text-lg italic text-gray-300">
                              "{depoimento.texto}"
                            </p>
                          </div>

                          <div className="flex items-center gap-3 mt-4 mb-8">
                            <Avatar>
                              <AvatarImage
                                src={depoimento.image}
                                alt={depoimento.nome}
                              />
                              <AvatarFallback>
                                {depoimento.fallback}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold text-white">
                                {depoimento.nome}
                              </p>
                              <p className="text-sm text-gray-400">
                                {depoimento.cargo}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  <CarouselPrevious className="relative translate-x-0 translate-y-0 bg-zinc-800/50 border-none text-white hover:bg-zinc-700 disabled:opacity-30" />
                  <CarouselNext className="relative translate-x-0 translate-y-0 bg-zinc-800/50 border-none text-white hover:bg-zinc-700 disabled:opacity-30" />
                </div>
              </Carousel>
            </motion.div>

            {/* Card de Estatística (Sem alteração) */}
            <motion.div style={{ opacity: opacityStats, y: yStats }}>
              <div className="h-72 flex flex-col justify-between rounded-xl w-full mx-auto">
              <div
                className={`p-6 bg-foreground rounded-xl border-3 border-green-500 w-9/12 mx-auto shadow-[0px_0px_30px_rgba(22,163,74,0.6)]`}
              >
                {/* ... (conteúdo do card de estatística) ... */}
                <div className="flex items-center gap-3">
                  <BrainCircuit className="w-8 h-8 text-green-500" />
                  <h3 className="text-3xl font-bold text-white">
                    +80% dos negócios
                  </h3>
                </div>
                <p className="mt-2 text-gray-300">
                  Tiveram um aumento significativo nos resultados e redução de
                  perdas dentro dos primeiros 3 meses de uso.
                </p>
              </div>
              <div className=" w-52 rounded-3xl h-12.5 text-lg mx-auto mb-8">
                <Button className="h-full w-full rounded-3xl font-sans text-lg border-2 hover:bg-green-600 hover:text-zinc-100 transition-all duration-700 hover:shadow-none border-green-600 bg-slate-200/20 text-green-600 font-semibold shadow-[0px_0px_15px_rgba(22,163,74,0.4)]">
                  Ver Planos
                  <ArrowRight className="w-8 h-8" />
                </Button>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
