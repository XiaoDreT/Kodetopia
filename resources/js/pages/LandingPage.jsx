import React from "react";
import Base from "@/layouts/Base.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import LayananSection from "@/components/LayananSection.jsx";
import TentangSection from "@/components/TentangSection.jsx";
import TrustedBySection from "@/components/TrustedBySection.jsx";
import PortfolioSection from "@/components/PortfolioSection.jsx";
import KonsultasiSection from "@/components/KonsultasiSection.jsx";


const LandingPage = () => {


    return (
        <Base>
            <HeroSection />
            <LayananSection />
            <TentangSection />
            <TrustedBySection />
            <PortfolioSection />
            <KonsultasiSection />
        </Base>
    )
}

export default LandingPage;
