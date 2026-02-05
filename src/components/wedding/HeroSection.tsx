import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/wedding/capa1.jpg',
  '/wedding/capa2.jpg',
  '/wedding/capa3.jpg',
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden bg-[#121212]">
      
      {/* Background Carousel - Darker Opacity */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.8, scale: 1 }} // Opacidade dark para não ofuscar o texto
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>
        {/* Overlay para profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-transparent to-[#121212]/80" />
      </div>

      {/* Decorative elements - Subtle Silver */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <div className="absolute top-20 left-10 w-px h-32 bg-white" />
        <div className="absolute top-20 right-10 w-px h-32 bg-white" />
        <div className="absolute bottom-20 left-1/6 w-24 h-px bg-white" />
        <div className="absolute bottom-20 right-1/6 w-24 h-px bg-white" />
      </motion.div>

      {/* Content - White Fonts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-4xl mx-auto z-20 relative"
      >
        {/* Pre-title */}
        <motion.p 
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.4em] mb-8 md:mb-12 font-light"
        >
          Casamento
        </motion.p>

        {/* Main names - White and Gold Accent */}
        <motion.h1 
          className="font-serif text-white"
        >
          <motion.span 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="block text-5xl md:text-7xl lg:text-8xl font-light italic tracking-wide"
          >
            Tatiane
          </motion.span>
          <motion.span 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="block text-xl md:text-2xl text-[#C4A86B] my-4 md:my-6 font-light tracking-[0.5em]"
          >
            &
          </motion.span>
          <motion.span 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 1.1 }}
             className="block text-5xl md:text-7xl lg:text-8xl font-light italic tracking-wide"
          >
            Luciano
          </motion.span>
        </motion.h1>

        {/* Divider line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-16 h-px bg-[#C4A86B] mx-auto my-10 md:my-14"
        />

        {/* Date - White */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="space-y-2"
        >
          <p className="text-white/60 text-xs md:text-sm uppercase tracking-[0.5em] font-light">
            Doze de Fevereiro
          </p>
          <p className="font-serif text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wider">
            12 . 02 . 2026
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - White/Gold */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/50 uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#C4A86B] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}