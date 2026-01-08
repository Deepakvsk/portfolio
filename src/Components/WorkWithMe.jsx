import React from "react";
import { motion } from "framer-motion";
import handshake from "../assets/handshake.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WorkWithMe() {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Why Work With Me
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            As a Java Full-Stack Developer, I focus on building scalable,
            secure, and high-performance applications that solve real-world problems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-20 md:px-20">

          {/* Career Growth */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="h-[260px] rounded-[28px] bg-gradient-to-br from-[#f5f9ff] via-[#fdfcff] to-[#fff5f7] p-8 border border-slate-100 flex flex-col justify-center mb-6">
              <div className="space-y-3">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white text-xs font-medium text-slate-700 shadow-sm">
                  Clean & Scalable Code
                </span>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white text-xs font-medium text-slate-700 shadow-sm ml-6">
                  Backend Best Practices
                </span>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white text-xs font-medium text-slate-700 shadow-sm">
                  Continuous Learning
                </span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Technical Growth
            </h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Strong expertise in Java, Spring Boot, REST APIs, databases, and modern
              frontend technologies to deliver production-ready solutions.
            </p>
          </motion.div>

          {/* Work Culture */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-[260px] rounded-[28px] bg-gradient-to-br from-[#f6fafe] via-[#fdfcff] to-[#fff5f7] p-3 border border-slate-100 flex items-center justify-center mb-6">
              <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={handshake}
                  alt="Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Professional Collaboration
            </h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Comfortable working with cross-functional teams, following agile
              practices, and collaborating to deliver reliable full-stack solutions.
            </p>
          </motion.div>

          {/* Flexibility */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-[260px] rounded-[28px] bg-gradient-to-br from-[#f4fdf9] via-[#fdfcff] to-[#f0fdfa] p-8 border border-slate-100 flex flex-wrap content-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-white text-xs font-medium text-slate-700 shadow-sm">
                Remote Friendly
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white text-xs font-medium text-slate-700 shadow-sm">
                Flexible Timelines
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white text-xs font-medium text-slate-700 shadow-sm">
                Client-Focused Delivery
              </span>
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Flexible Engagement
            </h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Open to remote work, freelance projects, and long-term collaboration
              with a strong focus on communication and timely delivery.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
