import { motion } from "framer-motion";
import deepak from "../assets/deepak.jpg";
import propic from "../assets/pro-pic.png";

import { FaCode, FaExternalLinkAlt } from "react-icons/fa";


export default function Hero2() {
  return (
    <section className="min-h-screen mt-16 bg-white px-[10%] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center gap-8 h-[90vh]">

          <motion.h3
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-3xl font-semibold text-slate-800"
          >
            Hi, I'm Deepak Vishwakarma!
          </motion.h3>

          <motion.h1
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-[2rem] md:text-[3rem] lg:text-[5.2rem] font-extrabold uppercase tracking-[5px] text-slate-800 leading-tight"
          >
            Java <span className="text-purple-600">Developer</span>
          </motion.h1>

          <motion.p
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-lg text-gray-500 max-w-xl leading-relaxed"
          >
            Emmy is a passionate and creative web designer known for crafting
            visually stunning and user-friendly websites.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="flex items-center gap-12 mt-4"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center justify-center h-[50px] w-[280px] rounded-md bg-slate-800 text-white font-semibold uppercase shadow-lg hover:bg-purple-600 transition"
              aria-label="View Projects"
            >
              Projects <FaCode className="ml-2" />
            </button>

            <button className="flex items-center justify-center h-[50px] w-[280px] rounded-md border-2 border-purple-600 text-purple-600 font-semibold uppercase shadow-lg hover:bg-purple-600 hover:text-white transition">
              Hire me <FaExternalLinkAlt className="ml-2" />

            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[90vh] hidden lg:flex items-end justify-end">
          <motion.img
            src={propic}
            alt="Hero"
            initial={{ y: 250, scale: 0.85, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="w-[100%] max-w-[520px]"
          />
        </div>

      </div>
    </section>

  );
}
