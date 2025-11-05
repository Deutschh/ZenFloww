// Em: src/components/AlertaDashboard.jsx

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale/pt-BR"; // Mantemos a tradução

// --- 1. NOSSOS NOVOS DADOS DE SIMULAÇÃO ---

// Definimos as datas dos alertas
const today = new Date();

const greenAlertDate = new Date();
greenAlertDate.setDate(today.getDate() + 1); // Alerta verde para AMANHÃ

const yellowAlertDate = new Date();
yellowAlertDate.setDate(today.getDate() + 3); // Alerta amarelo para daqui a 3 dias

const redAlertDate = new Date();
redAlertDate.setDate(today.getDate() + 5); // Alerta vermelho para daqui a 5 dias

// Juntamos os dados dos alertas (com texto e datas atualizadas)
const alertData = [
  {
    id: 1,
    text: "Leite acaba amanhã", // Texto atualizado
    level: "green",
    date: greenAlertDate,
    colorClass: "text-green-400",
  },
  {
    id: 2,
    text: "Risco no estoque de farinha",
    level: "yellow",
    date: yellowAlertDate,
    colorClass: "text-yellow-400",
  },
  {
    id: 3,
    text: "Quebra de estoque detectada",
    level: "red",
    date: redAlertDate,
    colorClass: "text-red-400",
  },
];

// --- 2. LÓGICA DOS MODIFIERS (A MESMA DE ANTES) ---

// Definimos os "modificadores" para o calendário
const modifiers = {
  alertGreen: alertData
    .filter((a) => a.level === "green")
    .map((a) => a.date),
  alertYellow: alertData
    .filter((a) => a.level === "yellow")
    .map((a) => a.date),
  alertRed: alertData.filter((a) => a.level === "red").map((a) => a.date),
};

// Definimos os "estilos" para esses modificadores
const modifiersStyles = {
  alertGreen: {
    backgroundColor: "#05df72",
    color: "#18181b",
    borderRadius: "0.5rem",
  },
  alertYellow: {
    backgroundColor: "#fcc800",
    color: "#18181b",
    borderRadius: "0.5rem",
  },
  alertRed: {
    backgroundColor: "#ff6467",
    color: "#ffffff",
    borderRadius: "0.5rem",
  },
};

// --- O Componente ---

export function AlertaDashboard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="w-full h-full flex justify-between">
      {/* 1. Lado Esquerdo: Lista de Alertas (COM LÓGICA) */}
      <div className="w-1/2 h-full flex flex-col p-3">
        <div className="text-neutral-200 text-xl font-semibold">Alertas</div>
        <div className="flex flex-col w-full h-11/12 mt-6 gap-y-4">
          {alertData.map((alert) => (
            <div
              key={alert.id}
              className="w-full h-3/11 rounded-4xl flex bg-zinc-900/25 border-2 border-zinc-900/0 hover:bg-zinc-300/20 cursor-pointer transition-all duration-700"
              // 3. RE-ADICIONAMOS O onClick
              onClick={() => setDate(alert.date)} 
            >
              <div
                className={`${alert.colorClass} text-4xl my-auto font-extrabold px-3.5 py-0.5 ml-1`}
              >
                !
              </div>
              <div className="text-zinc-200/80 my-auto text-lg">
                {/* 4. Usamos o texto dinâmico */}
                {alert.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Lado Direito: Calendário COM MODIFIERS */}
      <div className="w-1/2 h-full flex items-center justify-center p-3">
        <Calendar
          locale={ptBR}
          mode="single"
          selected={date}
          onSelect={setDate}
          // 5. MANTEMOS AS SUAS CLASSES (que funcionaram)
          className="rounded-md text-neutral-200 bg-inherit" 
          
          // 6. RE-ADICIONAMOS AS PROPS DE ALERTA
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
        />
      </div>
    </div>
  );
}