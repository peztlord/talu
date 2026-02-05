import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../../components/wedding/HeroSection';
import LogisticsSection from '../../components/wedding/LogisticsSection';
import DressCodeSection from '../../components/wedding/DressCodeSection';
import GiftSection from '../../components/wedding/GiftSection';
import FooterSection from '../../components/wedding/FooterSection';

export default function Wedding() {

    return (
        <div className="min-h-screen bg-[#FAF9F7]">
            <HeroSection />
            <LogisticsSection />
            <DressCodeSection />
            <GiftSection />
            <FooterSection />
        </div>
    );
}