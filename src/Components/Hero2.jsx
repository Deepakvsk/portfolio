import React from 'react';
import { motion } from "framer-motion";

import { MdBusinessCenter } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaAws } from "react-icons/fa";
import { SiSpringboot, SiRedux, SiJavascript, SiMysql, SiPostgresql, SiDocker, SiJenkins, SiMongodb, SiKubernetes, SiTypescript, SiNextdotjs } from "react-icons/si";

import deepak2 from '../assets/deepakfinal.png';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#f8faff] via-white to-[#fff5f7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 pt-5 relative">

        {/* Floating Background Elements */}
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 left-[17%] w-4 h-4 bg-orange-400 rounded-full opacity-60"
        />

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-40 right-[10%] w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 left-[5%] w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-50"
        />

        {/* Top Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto relative z-20 mb-1"
        >
          <p className="text-slate-900 font-medium mb-4">
            Java Full-Stack Developer
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Building <span className="text-black">Scalable Web Applications</span>
          </h1>

          <p className="mt-3 text-slate-500 max-w-xl mx-auto text-sm md:text-base pb-5">
            I specialize in Java, Spring Boot, React, and modern web technologies to
            deliver secure, high-performance, and scalable applications.
          </p>
        </motion.div>

        {/* Hero Visual Section */}
        <div className="relative max-w-4xl mx-auto h-[500px] flex justify-center items-start mt-2">

          {/* Left Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-[-5%] top-[15%] lg:left-[5%] bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-5 w-48 md:w-56 -rotate-6 border border-white z-0 hidden sm:block"
          >
            <div className="w-10 h-10 mb-3 flex items-center justify-around">
              <span> <SiSpringboot className="w-10 h-10 text-green-600" /></span>
              <p className="text-sm font-bold ml-3 text-slate-900">
                Backend Expertise
              </p>
            </div>
            <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
              Java, Spring Boot, REST APIs, Microservices
            </p>
          </motion.div>

          {/* Right Floating Card */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute right-[-5%] top-[25%] lg:right-[5%] bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-5 w-48 md:w-56 rotate-6 border border-white z-0 hidden sm:block"
          >
            <div className="w-10 h-10 mb-3 flex items-center justify-center">
              <span> <FaReact className="w-20 h-10 text-cyan-500 ml-10" /></span>
              <p className="text-sm font-bold text-slate-900">
                Frontend Skills
              </p>
            </div>
            <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
              React, Tailwind CSS, Bootstrap Responsive UI
            </p>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="relative z-10 px-1"
          >
            <img
              src={deepak2}
              alt="Java Full Stack Developer"
              className="w-[350px] max-w-[450px] drop-shadow-2xl"
            />
          </motion.div>

          {/* Unified Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-[-20px] left-1/2 -translate-x-1/2 w-full max-w-xl bg-white/90 backdrop-blur-lg shadow-2xl rounded-full p-2 flex items-center border border-slate-100 z-30"
          >
            <div className="flex-1 px-6 border-r border-slate-100 flex items-center gap-2">
              <FaJava className='h-6 w-6' />
              <p className="text-sm">Java Full Stack Developer</p>
            </div>

            <div className="hidden md:inline-flex flex-1 px-6 flex items-center gap-2">
              <MdBusinessCenter className='text-sm' />
              <span><p className="text-sm">3 Years</p></span>
            </div>

            <button className="bg-slate-900 text-white p-2.5 rounded-full hover:bg-slate-800 transition-colors">
              <CiMail />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
