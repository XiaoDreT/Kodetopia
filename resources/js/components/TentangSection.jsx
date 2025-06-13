import React from "react";
import { motion } from "framer-motion";

const TentangSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                {/* Gambar dengan animasi dari kiri */}
                <motion.img
                    src="/images/tentang.png"
                    alt="Tentang Kodetopia"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                />

                {/* Teks dengan animasi slide up */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 p-2"
                >
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-3xl md:text-4xl font-bold text-black flex mb-3"
                    >
                        Tentang <span className="text-blue-500 ml-2">Kodetopia</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-slate-500 font-light text-justify text-lg"
                    >
                        Di Kodetopia, kami menghadirkan inovasi yang dapat Anda andalkan. Dengan layanan pengembangan
                        perangkat lunak kami, Anda dapat yakin bahwa setiap solusi yang kami bangun dirancang untuk
                        memberikan hasil maksimal dan menambah nilai bagi bisnis Anda.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default TentangSection;
