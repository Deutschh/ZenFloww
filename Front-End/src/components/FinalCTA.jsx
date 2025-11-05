// Em: src/components/FinalCTA.jsx

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Iridescence from "../components/Iridescence.jsx";
import { ArrowRight } from "lucide-react";

// (Variantes da animação continuam as mesmas...)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export function FinalCTA() {
  return (
    // ADICIONEI A CLASSE 'shadow-[0_-100px_50px_0_rgba(0,0,0,0.8)]' AQUI
    // E REMOVI 'overflow-hidden' (ou o 'overflow-hidden' precisa estar na seção anterior, não nesta)
    <section className="relative w-full h-[75vh] shadow-[0_0px_40px_30px_rgba(0,0,0,0.45)]">
      {/* 1. O Fundo Animado */}
      <div className="absolute inset-0 z-0">
        <Iridescence
          color={[0.5, 0.6, 0.8]} // A mesma cor do seu Hero
          mouseReact={true}
          amplitude={0.05}
          speed={0.8}
        />
      </div>

      {/* 2. O Conteúdo */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-6xl font-bold font-display"
        >
          Transforme seu 'achismo' em lucro.
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-300 mt-6 max-w-xl"
        >
          Teste o ZenFlow por 14 dias. Sem cartão de crédito, sem compromisso.
          Comece a tomar decisões baseadas em dados hoje mesmo.
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-10">
          <Button
            className="w-64 rounded-3xl h-14 text-lg bg-indigo-600 border-2 border-indigo-600 text-white items-center justify-center flex font-sans font-semibold hover:bg-inherit
            hover:text-indigo-700 hover:border-indtext-indigo-700 cursor-pointer transition-all duration-700
            shadow-[0px_0px_30px_rgba(67,45,215,0.6)]"
          >
            Comece agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </motion.div>

      {/* REMOVIDO: A antiga div da sombra superior, já que estamos usando box-shadow */}
      {/* <div
        className="absolute top-0 left-0 w-full h-32 z-20"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)",
        }}
      ></div> */}
    </section>
  );
}