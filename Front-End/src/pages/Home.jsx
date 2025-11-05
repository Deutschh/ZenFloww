import { useState } from "react";
import Iridescence from "../components/Iridescence.jsx";
import { ChartAreaGradient } from "../components/grafico.jsx";
import { SugestoesCarrossel } from "../components/SugestoesCarrossel.jsx";
import { AlertaDashboard } from "../components/AlertaDashboard.jsx";
import { TarefasCard } from "../components/TarefasCard.jsx";
import { LucroCard } from "../components/LucroCard.jsx";
import { ScrollTimeline } from "../components/ScrollTimeline.jsx";
import { ProofSection } from "../components/ProofSection.jsx";
import { ScrollIndicator } from "../components/ScrollIndicator.jsx";
import { PricingSection } from "../components/PricingSection.jsx";
import { FinalCTA } from "@/components/FinalCTA.jsx";
import { Footer } from "@/components/Footer.jsx";

function App() {
  return (
    <div className="w-full bg-slate-200/20 flex flex-col">
      <ScrollIndicator />
      <div id="hero" className="w-full flex h-screen justify-between">
        <div className="w-1/2 flex flex-col">
          <div className="text-4xl p-4 font-display text-foreground">
            ZenFlow
          </div>
          <div className="flex flex-col justify-center items-center gap-4 my-auto w-5/6">
            <div className="text-foreground text-7xl font-display text-left mx-24 justify-around w-5/6">
              Menos desperdício <br /> mais lucro
            </div>
            <div className="font-sans text-xl mx-24 w-5/6">
              Conecte seu sistema de vendas, defina suas fichas técnicas e deixe
              nossa IA gerar as sugestões de compra ideais. Foque no
              crescimento, não nas planilhas.
            </div>
            <button
              className="w-52 rounded-3xl mt-2 h-12.5 text-lg bg-indigo-600 border-2 border-indigo-600 text-white items-center justify-center flex font-sans font-semibold hover:bg-inherit
             hover:text-indigo-700 hover:border-indtext-indigo-700 cursor-pointer transition-all duration-700"
            >
              Comece agora
            </button>
          </div>
        </div>
        <div className="w-5/12 ">
          <div className="relative w-full h-screen rounded-s-3xl overflow-hidden shadow-[-16px_12px_26px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 z-10">
              <Iridescence
                color={[0.5, 0.6, 0.8]}
                mouseReact={true}
                amplitude={0.05}
                speed={0.8}
              />
            </div>
            <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
              {/* É AQUI QUE VOCÊ COLOCA SEU CONTEÚDO */}
              <div className=" w-11/12 h-11/12 rounded-lg p-3">
                <div className="grid grid-cols-5 grid-rows-5 gap-4 bag-red-100 h-full">
                  <div className="col-span-3 row-span-2 ">
                    <ChartAreaGradient />
                  </div>
                  <div className="col-span-2 row-span-2 col-start-4 bg-zinc-900/25 border-none shadow-[0px_0px_10px_rgba(0,0,0,0.3)] rounded-lg">
                    <div className="w-full h-full flex">
                      <SugestoesCarrossel />
                    </div>
                  </div>
                  <div className="col-span-5 row-span-2 row-start-3 bg-zinc-900/25 border-none shadow-[0px_0px_10px_rgba(0,0,0,0.3)] rounded-lg">
                    <AlertaDashboard />
                  </div>
                  <div className="col-span-2 row-start-5 bg-zinc-900/25 border-none shadow-[0px_0px_10px_rgba(0,0,0,0.3)] rounded-lg">
                    <TarefasCard />
                  </div>
                  <div className="col-span-3 col-start-3 row-start-5 bg-zinc-900/25 border-none shadow-[0px_0px_10px_rgba(0,0,0,0.3)] rounded-lg hover:scale-[1.045] transition-transform duration-500 cursor-pointer">
                    <LucroCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="como-funciona" className="w-full py-10">
        <ScrollTimeline />
      </div>
      <div id="prova-social" className="w-full bg-pinka-200">
        <ProofSection />
      </div>
      <div id="planos" className="w-full h-screen">
        <PricingSection />
      </div>
      <div id="contato" className="h-screen w-full mt-12">
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
