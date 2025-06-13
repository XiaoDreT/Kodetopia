import React, { useState } from "react";
import { motion } from "framer-motion";

const portfolios = [
    { category: "Website", title: "Website & Company Profile", image: "/images/portfolio/a.png" },
    { category: "Mobile Apps", title: "Aplikasi Mobile", image: "/images/portfolio/b.png" },
    { category: "Design", title: "UI & UX Design System", image: "/images/portfolio/c.png" },
];

const categories = ["Semua", "Website", "Mobile Apps", "Design"];

const PortfolioSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    const filteredPortfolios =
        selectedCategory === "Semua"
            ? portfolios
            : portfolios.filter((item) => item.category === selectedCategory);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-blue-600 mb-10"
                >
                    Portofolio Kami
                </motion.h2>

                {/* Category Buttons */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
                                selectedCategory === cat
                                    ? "bg-blue-500 text-white"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Portfolio Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredPortfolios.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="rounded-2xl overflow-hidden shadow-md relative group"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <motion.img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-full bg-black opacity-20"></div>
                            <span className="absolute bottom-5 left-0 right-0 text-white px-4 pt-40 text-lg font-semibold">
                                {item.title}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
