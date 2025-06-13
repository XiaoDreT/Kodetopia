import React from "react";
import { motion } from "framer-motion";

const TrustedBySection = () => {
    const clients = [
        { name: 'BCA', logo: '/images/clients/bca.png' },
        { name: 'Mandiri', logo: '/images/clients/mandiri.png' },
        { name: 'BRI', logo: '/images/clients/bri.png' },
        { name: 'BNI', logo: '/images/clients/bni.png' },
        { name: 'BSI', logo: '/images/clients/bsi.png' },
        { name: 'BTN', logo: '/images/clients/btn.png' },
        { name: 'Danamon', logo: '/images/clients/danamon.png' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold text-blue-600 mb-4"
                >
                    Dipercaya oleh Perusahaan Terkemuka
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-500 mb-10 text-base md:text-xl"
                >
                    Kami bangga telah bekerja sama dengan berbagai industri dan perusahaan untuk memberikan solusi digital terbaik.
                </motion.p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center h-24"
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-10 object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBySection;
