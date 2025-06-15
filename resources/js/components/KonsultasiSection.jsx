import React, {useState} from "react";
import { motion } from "framer-motion";
import Swal from 'sweetalert2'
import KonsultasiService from "@/services/KonsultasiService.js";

const KonsultasiSection = () => {
    const [namaLengkap, setNamaLengkap] = useState('');
    const [email, setEmail] = useState('');
    const [noTelp, setNoTelp] = useState('');
    const [layanan, setLayanan] = useState('');
    const [pesan, setPesan] = useState('');
    const [loading, setLoading] = useState(false);

    const showToast = async (type, title, text, timer=1000) => {
        await Swal.fire({
            icon: type,
            title: title,
            text: text,
            showConfirmButton: false,
            timer: timer
        });
    }

    const validate = async () => {
        let valid = true;
        if (!namaLengkap) {
            await showToast('error', 'Error', 'Nama Lengkap Kosong');
            valid = false;
        }

        if (!email) {
            await showToast('error', 'Error', 'Email Kosong');
            valid = false;
        }

        if (!noTelp) {
            await showToast('error', 'Error', 'No Telp Kosong');
            valid = false;
        }

        if (!layanan) {
            await showToast('error', 'Error', 'Layanan Kosong');
            valid = false;
        }

        if (!pesan) {
            await showToast('error', 'Error', 'Pesan Kosong');
            valid = false;
        }

        return valid;
    }

    const reset = () => {
        setNamaLengkap('');
        setEmail('');
        setNoTelp('');
        setLayanan(null);
        setPesan('');
    }

    const storehandler = async (e) => {
        setLoading(true);
        e.preventDefault();

        const valid = await validate();
        if (!valid){
            setLoading(false);
            return;
        }

        const body = {
            nama: namaLengkap,
            email: email,
            no_hp: noTelp,
            layanan: layanan,
            pesan: pesan,
            tanggal_submit: new Date()
        }

        try {
            await KonsultasiService.store(body);
            await showToast('success', 'Success', 'Pesanan telah dibuat, silakan menunggu atau langsung konfirmasi ke kontak yang tertera. Terima kasih', 3000)
            reset();
        } catch (e) {
            await showToast('error', 'Error', 'Terjadi Kesalahan');
        } finally {
            setLoading(false);
        }
    }


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
                    <form className="space-y-4" onSubmit={storehandler}>
                        <div>
                            <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                            <input
                                type="text"
                                onChange={(e) => setNamaLengkap(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">No Telp</label>
                            <input
                                type="text"
                                onChange={(e) => setNoTelp(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Layanan</label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                                defaultValue=""
                                onChange={(e) => setLayanan(e.target.value)}
                            >
                                <option value="" disabled>
                                    Pilih layanan
                                </option>
                                <option value="Website">Pengembangan Website</option>
                                <option value="Mobile App">Aplikasi Mobile</option>
                                <option value="Design UI/UX">Desain UI/UX</option>
                                <option value="Sistem Informasi">Sistem Informasi / ERP</option>
                                <option value="AI Integration">Integrasi AI</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>


                        <div>
                            <label className="block text-sm font-medium mb-1">Pesan</label>
                            <textarea
                                rows="4"
                                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                                onChange={(e) => setPesan(e.target.value)}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-gradient-to-b from-cyan-300 to-cyan-700 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition cursor-pointer"
                            disabled={loading}
                        >
                            {
                                loading ?
                                    'Harap tunggu...'
                                    :
                                    'Pesan'
                            }
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default KonsultasiSection;
