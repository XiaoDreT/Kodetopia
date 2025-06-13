import React from "react";
import Header from "@/components/Header.jsx";
import {FooterSection} from "@/components/FooterSection.jsx";


const Base = ({ children }) => {


    return (
        <div>
            <Header />
            {children}
            <FooterSection />
        </div>
    )
}

export default Base;
