// Em: src/components/ScrollIndicator.jsx

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Home, Zap, ShieldCheck, CreditCard, Mail } from "lucide-react";

// Dados das seções
const secoes = [
  { id: "hero", icone: <Home /> },
  { id: "como-funciona", icone: <Zap /> },
  { id: "prova-social", icone: <ShieldCheck /> },
  { id: "planos", icone: <CreditCard /> },
  { id: "contato", icone: <Mail /> },
];

// Função 'Helper' para rolar suavemente
const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

// Nossos limites de scroll (Aprox. 100vh + 300vh + 300vh + 100vh + 100vh = 900vh total)
const thresholds = {
  hero: 0,
  "como-funciona": 0.11, // Início da Seção 2 (100 / 900)
  "prova-social": 0.44, // Início da Seção 3 (400 / 900)
  planos: 0.77, // Início da Seção 4 (700 / 900)
  contato: 0.88, // Início da Seção 5 (800 / 900)
};

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState(secoes[0].id);

  // Animação de Aparecer/Desaparecer (Sua lógica, está perfeita)
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [0, 0, 1]);

  // Efeito para mudar o ícone ativo (Lógica dos thresholds, está correta)
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      let current = "hero";
      for (const secao of secoes) {
        if (latest >= thresholds[secao.id]) {
          current = secao.id;
        }
      }
      setActiveSection(current);
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex items-center gap-4"
      style={{ opacity }}
    >
      {/* Coluna dos Ícones (Com a lógica de 'activeSection') */}
      <div className="flex flex-col gap-14">
        {secoes.map((secao) => (
          <button
            key={secao.id}
            onClick={() => scrollTo(secao.id)}
            className={`p-2 rounded-full transition-all duration-300 
              ${
                activeSection === secao.id
                  ? "bg-indigo-600/10 text-indigo-500" // Cor roxa (ativa)
                  : "bg-transparent text-zinc-400 hover:text-indigo-500" // Cor padrão
              }
            `}
            title={secao.id}
          >
            {React.cloneElement(secao.icone, { className: "w-6 h-6" })}
          </button>
        ))}
      </div>

      {/* A Linha (Track e Progresso) */}
      {/* Mantive a sua altura maior (h-[460px]) */}
      <div className="relative w-1 h-[460px] bg-zinc-700 rounded-full">
        
        {/* A LINHA ROXA (A GRANDE CORREÇÃO) 
            1. Removido 'top-[20%]' e 'h-[80%]'
            2. Adicionado 'top-0' e 'h-full'
            3. 'scaleY' agora usa 'scrollYProgress' DIRETAMENTE
        */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-indigo-600 rounded-full"
          style={{
            scaleY: scrollYProgress, // <-- A CORREÇÃO MÁGICA
            originY: 0, 
          }}
        />
      </div>
    </motion.div>
  );
}