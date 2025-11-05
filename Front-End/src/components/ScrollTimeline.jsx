// Em: src/components/ScrollTimeline.jsx

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plug, BrainCircuit, TrendingUp } from "lucide-react"; // Ícone corrigido

// Os 3 passos (AGORA COM POSIÇÃO)
const passos = [
  {
    titulo: "Conecte-se",
    descricao: "Crie sua conta no ZenFlow, cadastre seu estoque e vincule suas vendas ao nosso sistema. Acompanhe tudo o que acontece no seu negócio ao vivo diretamente pelo seu smartphone ou computador.",
    icone: <Plug className="w-8 h-8" />,
    cor: "text-indigo-600",
    position: "left", // <-- NOVO
  },
  {
    titulo: "Analise",
    descricao: "Pelo nosso Dashboard, você tem controle total do seu negócio, acesse gráficos com dados reais sobre suas últimas vendas, veja o quanto economizou e como está a situação do seu estoque. Tudo isso sendo atualizado em tempo real.",
    icone: <BrainCircuit className="w-8 h-8" />,
    cor: "text-cyan-500",
    position: "right", // <-- NOVO
  },
  {
    titulo: "Otimize",
    descricao: "Com auxílio da nossa IA, você extrai o máximo do seu negócio: receba alertas sobre possíveis quebras de estoque, tenha acesso a sugestões de promoções para dias de pouco movimento e ajuste preços de itens do cardápio para ter um lucro maior.",
    icone: <TrendingUp className="w-8 h-8" />,
    cor: "text-green-400",
    position: "left", // <-- NOVO
  },
];

export function ScrollTimeline() {
  const targetRef = useRef(null);

  // 'useScroll' agora observa o scroll de 'start start' até 'end end'
  // (Do início ao fim do 'targetRef')
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Mapeamos o scroll (0 a 1) para a opacidade/escala de cada passo
  // Eles vão de 0 a 1 e PERMANECEM em 1
  const opacityPasso1 = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const scalePasso1 = useTransform(scrollYProgress, [0.1, 0.3], [0.9, 1]);

  const opacityPasso2 = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const scalePasso2 = useTransform(scrollYProgress, [0.35, 0.55], [0.9, 1]);

  const opacityPasso3 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const scalePasso3 = useTransform(scrollYProgress, [0.6, 0.8], [0.9, 1]);

  return (
    <section className="w-full">
      {/* 1. Este é o "div pai" que cria o scroll. */}
      <div ref={targetRef} className="relative w-full h-[300vh]">
        
        {/* 2. Este é o "div filho" que fica "grudado".
            MUDANÇA: top-0 e h-screen para ser a "tela" inteira. */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center overflow-hidden">
          
          {/* REQ 1: Título Fixo (agora dentro do sticky) */}
          <motion.div 
            className="text-center pt-18"
            // Faz o título sumir um pouco antes do fim do scroll
            style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [1, 0]) }}
          >
            <h2 className="text-6xl font-bold font-display text-foreground">
              Como o ZenFlow funciona?
            </h2>
          </motion.div>

          {/* REQ 2: A linha vertical central (agora h-full) */}
          <div className="absolute top-60 left-1/2 -translate-x-1/2 w-[3px] h-full bg-zinc-700" />
          
          {/* Container dos Passos */}
          <div className="relative w-full h-full">

            {/* REQ 3 & 5: Passo 1 (Esquerda) */}
            <motion.div
              style={{
                opacity: opacityPasso1,
                scale: scalePasso1,
              }}
              // Posiciona na esquerda (right-[55%]) e 30% do topo
              className="absolute w-[40%] right-[41.5%] top-[16%]"
            >
              {/* REQ 4: Passa a opacidade para a linha de conexão */}
              <StepCard passo={passos[0]} opacity={opacityPasso1} />
            </motion.div>

            {/* REQ 3 & 5: Passo 2 (Direita) */}
            <motion.div
              style={{
                opacity: opacityPasso2,
                scale: scalePasso2,
              }}
              // Posiciona na direita (left-[55%]) e 50% do topo
              className="absolute w-[40%] left-[55%] top-[41%]"
            >
              <StepCard passo={passos[1]} opacity={opacityPasso2} />
            </motion.div>

            {/* REQ 3 & 5: Passo 3 (Esquerda) */}
            <motion.div
              style={{
                opacity: opacityPasso3,
                scale: scalePasso3,
              }}
              // Posiciona na esquerda (right-[55%]) e 70% do topo
              className="absolute w-[40%] right-[41.5%] top-[61%]"
            >
              <StepCard passo={passos[2]} opacity={opacityPasso3} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Componente StepCard Atualizado ---
// Agora aceita 'passo' e 'opacity' (para animar a linha)
function StepCard({ passo, opacity }) {
  
  // Lógica para a linha de conexão
  const lineX = passo.position === "left" ? "530%" : "-100%";
  const lineOrigin = passo.position === "left" ? "right" : "left";

  return (
    // 'relative' para a linha de conexão se posicionar
    <div className="relative">
      {/* O Card (igual antes) */}
      <div
        className={`p-6 bg-foreground backdrop-blur-md rounded-xl border-3 border-indigo-600 shadow-[0px_0px_30px_rgba(67,45,215,0.6)] ${passo.cor} w-8/12 min-h-52 `}
      >
        <div className="flex items-center gap-4">
          {passo.icone}
          <h3 className="text-2xl font-bold">{passo.titulo}</h3>
        </div>
        <p className="mt-3 text-gray-300">{passo.descricao}</p>
      </div>

      {/* REQ 4: A Linha de Conexão Animada */}
      <motion.div
        className="absolute top-1/2 h-[3px] bg-zinc-700 w-1/8 -z-10"
        style={{
          x: lineX, // Põe a linha fora do card (100% ou -100%)
          originX: lineOrigin, // Diz de onde ela deve "crescer"
          scaleX: opacity, // Anima a largura (escala X) usando a opacidade do pai
        }}
      />
    </div>
  );
}