import React from "react";
import { motion } from "framer-motion";

const KonsultasiSection = () => {
    return (
        <section className="py-12 bg-gradient-to-b from-[#8EE0FF] to-[#006F99] rounded-3xl max-w-6xl mx-auto mt-10">
            <div className="flex flex-col md:flex-row gap-8 px-6 md:px-12">
                {/* Left Side */}
                <motion.div
                    className="flex-1 text-white space-y-4"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Konsultasikan <br /> Dengan Kami
                    </h2>

                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-b from-[#90FF8E] to-[#5ECA00] text-white font-semibold rounded-full shadow w-max hover:opacity-90 border border-green-900"
                    >
                        <img
                            src="/images/WhatsApp.png"
                            alt="WhatsApp"
                            className="w-5 h-5 mr-2"
                        />
                        Whatsapp
                    </a>

                    <p>
                        Punya ide proyek digital atau butuh solusi teknologi untuk bisnis Anda? Tim ahli kami siap mendengarkan dan membantu Anda dari awal hingga selesai. Baik itu pengembangan website, aplikasi, sistem informasi, hingga solusi IT lainnya?
                    </p>

                    <p>
                        Kami hadir untuk memberikan solusi yang tepat, efisien, dan sesuai kebutuhan Anda.
                    </p>

                    <p>💬 Hubungi kami sekarang dan dapatkan sesi konsultasi GRATIS!</p>
                    <p>
                        👉 Jadikan ide Anda kenyataan bersama partner teknologi yang terpercaya.
                    </p>
                </motion.div>

                {/* Right Side - Form */}
                <motion.div
                    className="flex-1 bg-white rounded-2xl p-6 shadow-lg"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">No Telp</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Layanan</label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Pilih layanan
                                </option>
                                <option value="website">Pengembangan Website</option>
                                <option value="mobile">Aplikasi Mobile</option>
                                <option value="uiux">Desain UI/UX</option>
                                <option value="sistem">Sistem Informasi / ERP</option>
                                <option value="ai">Integrasi AI</option>
                                <option value="lainnya">Lainnya</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Pesan</label>
                            <textarea
                                rows="4"
                                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-gradient-to-b from-cyan-300 to-cyan-700 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition"
                        >
                            Pesan
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default KonsultasiSection;
