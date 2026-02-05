import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export default function GiftSection() {
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
        <section className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8E6E3] to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8E6E3] to-transparent" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-2xl mx-auto text-center"
            >
                {/* Icon */}
                <motion.div
                    variants={itemVariants}
                    className="mb-8"
                >
                    <div className="w-16 h-16 mx-auto border border-[#E8E6E3] rounded-full flex items-center justify-center">
                        <Gift className="w-6 h-6 text-[#C4A86B]" />
                    </div>
                </motion.div>

                {/* Section label */}
                <motion.p
                    variants={itemVariants}
                    className="text-[10px] md:text-xs text-[#8B8680] uppercase tracking-[0.4em] mb-8"
                >
                    Presentes
                </motion.p>

                {/* Section title */}
                <motion.h2
                    variants={itemVariants}
                    className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2C2A27] font-light italic mb-8"
                >
                    Lista de Casamento
                </motion.h2>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-[#8B8680] text-sm md:text-base font-light leading-relaxed mb-12 max-w-lg mx-auto"
                >
                    A sua presença é o nosso maior presente. Mas se desejar nos
                    presentear, preparamos uma lista especial com muito carinho.
                </motion.p>

                {/* Decorative line */}
                <motion.div
                    variants={itemVariants}
                    className="w-px h-8 bg-[#C4A86B] mx-auto mb-12"
                />

                {/* CTA Button */}
                <motion.div variants={itemVariants}>
                    <button
                        onClick={() => window.open('https://share.google/4Z0Ft7tFNU9Wz9ite', '_blank')}
                        className="group relative px-10 py-6 h-auto border border-[#2C2A27] text-[#2C2A27] hover:bg-[#2C2A27] hover:text-white rounded-none text-xs uppercase tracking-[0.3em] font-light transition-all duration-500"
                    >
                        <span className="relative z-10">Ver Lista de Presentes</span>
                    </button>
                </motion.div>

                {/* Additional subtle text */}
                <motion.p
                    variants={itemVariants}
                    className="text-[11px] text-[#B8B4AD] mt-10 italic"
                >
                    Obrigado por fazer parte deste momento
                </motion.p>
            </motion.div>
        </section>
    );
}