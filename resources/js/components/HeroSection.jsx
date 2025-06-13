import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-[550px]"
            style={{ backgroundImage: "url('/images/bghero.png')" }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <motion.h1
                    className="text-4xl md:text-6xl mb-4 font-extrabold"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Our Passion Meet
                    <br />
                    <motion.span
                        className="text-blue-500 ml-2 inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Your Need
                    </motion.span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Kami menyediakan solusi IT yang inovatif dan terintegrasi untuk mendukung pertumbuhan bisnis Anda.
                </motion.p>
            </div>
        </section>
    );
};

export default HeroSection;
