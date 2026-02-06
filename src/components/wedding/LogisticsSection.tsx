import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';

export default function LogisticsSection() {
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

    const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
    }
    };

  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Section label */}
        <motion.p 
          variants={itemVariants}
          className="text-[10px] md:text-xs text-[#8B8680] uppercase tracking-[0.4em] mb-8"
        >
          Cerimônia & Recepção
        </motion.p>

        {/* Section title */}
        <motion.h2 
          variants={itemVariants}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2C2A27] font-light italic mb-16"
        >
          Quando & Onde
        </motion.h2>

        {/* Info cards */}
        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16"
        >
          {/* Date */}
          <div className="group">
            <div className="w-12 h-12 mx-auto mb-6 border border-[#E8E6E3] rounded-full flex items-center justify-center group-hover:border-[#C4A86B] transition-colors duration-500">
              <Calendar className="w-5 h-5 text-[#8B8680] group-hover:text-[#C4A86B] transition-colors duration-500" />
            </div>
            <p className="text-[10px] text-[#8B8680] uppercase tracking-[0.3em] mb-2">Data</p>
            <p className="font-serif text-xl md:text-2xl text-[#2C2A27] font-light">
              12 de Fevereiro
            </p>
            <p className="text-sm text-[#8B8680] mt-1">Quinta-feira, 2026</p>
          </div>

          {/* Time */}
          <div className="group">
            <div className="w-12 h-12 mx-auto mb-6 border border-[#E8E6E3] rounded-full flex items-center justify-center group-hover:border-[#C4A86B] transition-colors duration-500">
              <Clock className="w-5 h-5 text-[#8B8680] group-hover:text-[#C4A86B] transition-colors duration-500" />
            </div>
            <p className="text-[10px] text-[#8B8680] uppercase tracking-[0.3em] mb-2">Horário</p>
            <p className="font-serif text-xl md:text-2xl text-[#2C2A27] font-light">
              15:30h
            </p>
            <p className="text-sm text-[#8B8680] mt-1">Cerimônia religiosa</p>
          </div>

          {/* Location */}
          <div className="group">
            <div className="w-12 h-12 mx-auto mb-6 border border-[#E8E6E3] rounded-full flex items-center justify-center group-hover:border-[#C4A86B] transition-colors duration-500">
              <MapPin className="w-5 h-5 text-[#8B8680] group-hover:text-[#C4A86B] transition-colors duration-500" />
            </div>
            <p className="text-[10px] text-[#8B8680] uppercase tracking-[0.3em] mb-2">Local</p>
            <p className="font-serif text-xl md:text-2xl text-[#2C2A27] font-light">
              Sítio Geranium
            </p>
            <p className="text-[0.8em] text-[#8B8680] mt-1">Núcleo Rural Taguatinga Chacara 29 - Taguatinga - DF</p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          variants={itemVariants}
          className="w-px h-12 bg-[#E8E6E3] mx-auto mb-10"
        />

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
            <button
                onClick={() => window.open('https://maps.app.goo.gl/UzEpuYWXbFQLHhKDA', '_blank')}
                className="group relative px-10 py-6 h-auto border border-[#2C2A27] text-[#2C2A27] hover:bg-[#2C2A27] hover:text-white rounded-none text-xs uppercase tracking-[0.3em] font-light transition-all duration-500"
            >
                <span className="relative z-10">Ver Localização</span>
            </button>
        </motion.div>
      </motion.div>
    </section>
  );
}