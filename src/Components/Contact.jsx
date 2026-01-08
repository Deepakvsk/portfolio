import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-28 overflow-hidden
      bg-gradient-to-br from-[#fff7f9] via-white to-[#f8faff] scroll-mt-20"
        >
            {/* Soft floating SVG blobs */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ffd6e2] rounded-full blur-3xl opacity-40 animate-pulse" />
            <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-[#fde8d7] rounded-full blur-3xl opacity-40 animate-pulse" />

            {/* Content */}
            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-slate-900"
                >
                    Let’s <span className="text-slate-800">Connect</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mt-6 text-slate-600 max-w-xl mx-auto leading-relaxed"
                >
                    Have a project in mind, a collaboration idea, or just want to talk
                    about building scalable applications? I’d love to hear from you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-10"
                >
                    <button
                        className="group relative inline-flex items-center justify-center
            px-10 py-4 rounded-full font-medium
            bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4]
            text-slate-900 shadow-lg
            transition-all duration-300
            hover:shadow-xl hover:scale-[1.03]"
                    >
                        Contact Me

                        {/* subtle shine */}
                        <span
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
              bg-white/20 transition"
                        />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
