import React from 'react';
import { Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="py-20 md:py-28 px-6 relative overflow-hidden bg-[#121212] text-white">
      {/* Imagem de Fundo Estática */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url("/wedding/footer-bg.jpg")' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-transparent to-[#121212]" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <Heart className="w-5 h-5 mx-auto text-[#C4A86B] fill-[#C4A86B] mb-8" />
        
        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light italic mb-6">
          Contamos com você
        </h3>

        <p className="text-white/70 text-sm font-light mb-10">
          Será uma honra ter você conosco neste dia tão especial.
        </p>

        <p className="font-serif text-xl text-[#C4A86B] italic mb-10">
          Tatiane & Luciano
        </p>

        <div className="w-16 h-px bg-white/20 mx-auto mb-10" />

        <p className="text-[10px] text-white/40 uppercase tracking-[0.4em]">
          12 de Fevereiro de 2026
        </p>
      </div>
    </footer>
  );
}