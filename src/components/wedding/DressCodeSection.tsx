import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/wedding/capa4.jpg',
  '/wedding/capa5.jpg',
  '/wedding/capa6.jpg',
];

export default function DressCodeSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
    //   transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const handleDownload = () => {
    const fileUrl = '/wedding/guia-de-trajes.jpeg'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'guia-de-trajes.jpeg');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#121212]">
      
      {/* Background Carousel - Identical to Hero */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.2, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-transparent to-[#121212]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Section label */}
        <motion.p 
          variants={itemVariants}
          className="text-[10px] md:text-xs text-white/60 uppercase tracking-[0.4em] mb-8 text-center font-light"
        >
          Orientações
        </motion.p>

        {/* Section title */}
        <motion.h2 
          variants={itemVariants}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light italic mb-6 text-center"
        >
          Dress Code
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-white/70 text-sm md:text-base font-light text-center max-w-xl mx-auto mb-16 md:mb-20 leading-relaxed"
        >
          Esperamos vocês vestidos com elegância para celebrar conosco 
          este momento tão especial.
        </motion.p>

        {/* Dress code cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
          {/* Women */}
          <motion.div 
            variants={itemVariants}
            className="text-center p-8 md:p-12 border border-white/10 bg-white/5 group hover:border-[#C4A86B] transition-all duration-700"
          >
            <p className="text-[10px] text-[#C4A86B] uppercase tracking-[0.4em] mb-4 font-light">Para</p>
            <h3 className="font-serif text-2xl md:text-3xl text-white font-light italic mb-8">
              Mulheres
            </h3>
            <div className="w-8 h-px bg-white/20 mx-auto mb-8 group-hover:bg-[#C4A86B] transition-colors duration-500" />
            <div className="space-y-4 text-white/70 text-sm font-light leading-relaxed">
              <p>Vestido longo ou midi</p>
              <p>Traje social elegante</p>
              <p className="text-[11px] pt-4 text-white/40 italic">
                Evitar branco, off-white e tons muito claros
              </p>
            </div>
          </motion.div>

          {/* Men */}
          <motion.div 
            variants={itemVariants}
            className="text-center p-8 md:p-12 border border-white/10 bg-white/5 group hover:border-[#C4A86B] transition-all duration-700"
          >
            <p className="text-[10px] text-[#C4A86B] uppercase tracking-[0.4em] mb-4 font-light">Para</p>
            <h3 className="font-serif text-2xl md:text-3xl text-white font-light italic mb-8">
              Homens
            </h3>
            <div className="w-8 h-px bg-white/20 mx-auto mb-8 group-hover:bg-[#C4A86B] transition-colors duration-500" />
            <div className="space-y-4 text-white/70 text-sm font-light leading-relaxed">
              <p>Terno completo</p>
              <p>Traje social ou esporte fino</p>
              <p className="text-[11px] pt-4 text-white/40 italic">
                Gravata opcional
              </p>
            </div>
          </motion.div>
        </div>

        {/* Download Button */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <button
            onClick={handleDownload}
            className="w-full md:w-auto group relative px-12 py-6 border border-white/30 text-white hover:bg-white hover:text-[#121212] rounded-none text-xs uppercase tracking-[0.3em] font-light transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden"
          >
            <span className="relative z-10">Baixar Guia de Trajes</span>
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}