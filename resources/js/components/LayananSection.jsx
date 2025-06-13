import React from "react";
import { motion } from "framer-motion";

const LayananSection = () => {
    const services = [
        {
            title: "Pengembangan Web & Aplikasi",
            description: "Membangun website profil perusahaan, e-commerce, hingga aplikasi web kustom (ERP, CRM).",
        },
        {
            title: "Aplikasi Mobile",
            description: "Solusi aplikasi mobile untuk platform Android & iOS yang fungsional dan modern.",
        },
        {
            title: "Jaringan & Infrastruktur IT",
            description: "Menyediakan solusi hardware, software, dan jaringan yang andal untuk operasional Anda.",
        },
        {
            title: "Integrasi AI",
            description: "Membangun website profil perusahaan, e-commerce, hingga aplikasi web kustom (ERP, CRM).",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-blue-600 mb-12">
                    Layanan Unggulan Kami
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 w-full mx-auto"
                        >
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-base">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LayananSection;
