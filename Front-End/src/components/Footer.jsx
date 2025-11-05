// Em: src/components/Footer.jsx

import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-foreground text-neutral-400 h-25/100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Lado Esquerdo: Logo e Copyright */}
        <div>
          <h3 className="text-3xl font-bold font-display text-white">
            ZenFlow
          </h3>
          <p className="text-sm">
            © {new Date().getFullYear()} ZenFlow. Todos os direitos reservados.
          </p>
        </div>
        
        {/* Lado Direito: Links Sociais */}
        <div className="flex gap-5">
          <a href="#" className="hover:text-indigo-400 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}