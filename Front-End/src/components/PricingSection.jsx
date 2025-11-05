// Em: src/components/PricingSection.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
// 1. IMPORTE O NOVO COMPONENTE
import { BackgroundGradient } from "@/components/ui/background-gradient";

// (Lista de 'features' continua a mesma...)
const features = {
  basic: [
    "Dashboard de Vendas",
    "Previsão de Demanda (IA)",
    "Controle de Estoque Simples",
    "Suporte por Email",
  ],
  pro: [
    "Tudo do plano Básico",
    "Alertas de Desperdício (IA)",
    "Sugestões de Preço (IA)",
    "Assistente IA (Chatbot)",
    "Suporte Prioritário (Whatsapp)",
  ],
  enterprise: [
    "Tudo do plano Pro",
    "Múltiplas Lojas",
    "Integração com Fornecedores",
    "Gestor de Conta Dedicado",
    "API para integrações",
  ],
};

// (Variants da animação continuam as mesmas...)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export function PricingSection() {
  return (
    <section className="w-full py-24 text-white bg-ared-900 h-screen">
      <motion.div
        className=" mx-auto bg-yeallow-300 h-12/12 w-10/12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 bg-puarple-800"
        >
          {/* ... (Título e subtítulo) ... */}
          <h2 className="text-5xl font-bold font-display text-foreground">
            Escolha o plano que impulsiona o seu negócio
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Comece com o básico ou tenha todo o poder da nossa IA. Sem contratos
            de longo prazo, cancele quando quiser.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-between bg-paink-400 h-80/100 w-full px-20"
          variants={containerVariants}
        >
          {/* Card 1: Básico */}
          <motion.div
            variants={itemVariants}
            className="w-30/100"
            // 2. REMOVEMOS O 'whileHover' DAQUI
          >
            {/* O h-full é importante para manter a altura igual */}
            <Card className="flex flex-col bg-foreground border-2 border-zinc-700 h-full w-full hover:scale-105 transition-transform duration-700 shadow-[0_0_25px_rgba(49,64,88,0.8)]">
              {/* ... (Conteúdo do Card Básico) ... */}
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-300">
                  Básico
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Para quem está começando a organizar a casa.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="text-4xl font-bold text-white">
                  R$ 99
                  <span className="text-lg font-normal text-gray-400">
                    {" "}
                    /mês
                  </span>
                </div>
                <ul className="space-y-6 mt-8">
                  {features.basic.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <Check className="w-6 h-6 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="cursor-pointer w-8/12 rounded-xl text-lg font-sans font-semibold mb-8 h-13 mx-auto border-2 border-gray-300 transition-all duration-700 bg-gray-300 text-foreground hover:border-indigo-600 hover:text-zinc-300 hover:bg-indigo-600"
                >
                  Começar
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Card 2: Profissional (DESTAQUE) */}
          <motion.div
            variants={itemVariants}
            className="w-30/100 "
            whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
            // 2. REMOVEMOS O 'whileHover' DAQUI
          >
            {/* 3. APLICAMOS O NOVO COMPONENTE AQUI 
                Damos 'rounded-xl' a ele (para o brilho) e 'h-full'
            */}
            <BackgroundGradient
              containerClassName="rounded-xl h-full"
              className="rounded-3xl h-full w-full "
            >
              {/* - O 'Card' agora tem 'bg-foreground' (para ter um fundo sólido)
                - REMOVEMOS 'border-3', 'border-indigo-600', 'shadow-[...]', e 'md:scale-105'
                - Adicionamos 'h-full' para ele preencher o BackgroundGradient
              */}
              <Card className="flex flex-col bg-slate-200 relative h-full w-full rounded-xl hover:border-3-indigo-600 ">
                <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white font-semibold">
                  MAIS POPULAR
                </Badge>
                {/* ... (Conteúdo do Card Pro) ... */}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Profissional
                  </CardTitle>
                  <CardDescription className="text-indigo-600 font-semibold">
                    O poder total da IA para maximizar seu lucro.
                  </CardDescription>
                  <div className="mt-2 font-semibold text-indigo-600 font-sans">
                    <p>Teste grátis durante 3 meses</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div className="text-4xl font-bold text-foreground">
                    R$ 199
                    <span className="text-lg font-semibold text-indigo-600">
                      {" "}
                      /mês
                    </span>
                  </div>
                  <ul className="space-y-6 mt-8">
                    {features.pro.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-foreground text-lg"
                      >
                        <Check className="w-6 h-6 text-indigo-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-8/12 rounded-xl text-lg font-sans font-semibold mb-8 h-13 mx-auto border-2 border-indigo-600 transition-all duration-700 bg-indigo-600 text-slate-200 hover:text-indigo-600 hover:bg-slate-200">
                    Começar Teste Grátis
                  </Button>
                </CardFooter>
              </Card>
            </BackgroundGradient>
          </motion.div>

          {/* Card 3: Enterprise */}
          <motion.div
            variants={itemVariants}
            className="w-30/100"
            // 2. REMOVEMOS O 'whileHover' DAQUI
          >
            <Card className="flex flex-col bg-foreground border-2 border-zinc-700 h-full hover:scale-105 transition-transform duration-700 hover:border-3-indigo-600 shadow-[0_0_25px_rgba(49,64,88,0.8)]">
              {/* ... (Conteúdo do Card Enterprise) ... */}
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-300">
                  Enterprise
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Para redes de lojas e operações complexas.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="text-4xl font-bold text-white">
                  Sob Consulta
                </div>
                <ul className="space-y-6 mt-8">
                  {features.enterprise.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <Check className="w-6 h-6 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="cursor-pointer w-8/12 rounded-xl text-lg font-sans font-semibold mb-8 h-13 mx-auto border-2 border-gray-300 transition-all duration-700 bg-gray-300 text-foreground hover:border-indigo-600 hover:text-zinc-300 hover:bg-indigo-600"
                >
                  Entrar em Contato
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
