import React from 'react';
// import deepak2 from '../assets/asha.png';
import deepak2 from '../assets/deepakfinal.png';
// import deepak2 from '../assets/deepak-full.png';


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8faff] via-white to-[#fff5f7] pt-20">
      <div className="max-w-7xl mx-auto px-6 pt-5  relative">

        {/* Floating Background Elements */}
        <span className="absolute top-20 left-[15%] w-4 h-4 bg-orange-400 rounded-full opacity-60"></span>
        <div className="absolute top-40 right-[10%] w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-[5%] w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-50"></div>

        {/* Top Text Content */}
        <div className="text-center max-w-3xl mx-auto relative z-20 mb-1">
          <p className="text-slate-900 font-medium mb-4">Develop Your Career Talent to</p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Make a <span className="text-black">Lasting Impact</span>
          </h1>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto text-sm md:text-base pb-5">
            Empower your professional journey with career opportunities, smart tools, and meaningful connections.
          </p>
          {/* <button className="mt-8 px-10 py-3.5 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg">
            Hire Me
          </button> */}
        </div>

        {/* Hero Visual Section */}
        <div className="relative max-w-4xl mx-auto h-[500px] flex justify-center items-start mt-2">

          {/* Left Floating Card (Rotated Behind) */}
          <div className="absolute left-[-5%] top-[15%] lg:left-[5%] bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-5 w-48 md:w-56 -rotate-6 border border-white z-0 hidden sm:block">
            <div className="w-10 h-10 bg-blue-50 rounded-lg mb-3 flex items-center justify-center">
              <span className="text-blue-500 text-xl">📈</span>
            </div>
            <p className="text-sm font-bold text-slate-900">Career Growth</p>
            <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
              Upskill with industry-focused learning paths
            </p>
          </div>

          {/* Right Floating Card (Rotated Behind) */}
          <div className="absolute right-[-5%] top-[25%] lg:right-[5%] bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-5 w-48 md:w-56 rotate-6 border border-white z-0 hidden sm:block">
            <div className="w-10 h-10 bg-purple-50 rounded-lg mb-3 flex items-center justify-center">
              <span className="text-purple-500 text-xl">🤝</span>
            </div>
            <p className="text-sm font-bold text-slate-900">Work Culture</p>
            <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
              Collaborate with teams that value innovation
            </p>
          </div>

          {/* Main Image (Centered) */}
          <div className="relative z-10 px-1">
            <img
              src={deepak2}
              alt="Professional working"
              className="w-[350px] max-w-[450px] drop-shadow-2xl"
            />
          </div>

          {/* Unified Search/Filter Bar (Floating at Bottom) */}
          <div className="absolute -bottom-[-20px] left-1/2 -translate-x-1/2 w-full max-w-xl bg-white/90 backdrop-blur-lg shadow-2xl rounded-full p-2 flex items-center border border-slate-100 z-30">
            <div className="flex-1 px-6 border-r border-slate-100 flex items-center gap-2">
              <span className="text-slate-400">📍</span>
              <input type="text" placeholder="Location" className="bg-transparent text-sm outline-none w-full" />
            </div>
            <div className="flex-1 px-6 flex items-center gap-2">
              <span className="text-slate-400">💼</span>
              <select className="bg-transparent text-sm outline-none w-full text-slate-600 appearance-none">
                <option>Job Type</option>
                <option>Full-time</option>
                <option>Remote</option>
              </select>
            </div>
            <button className="bg-slate-900 text-white p-2.5 rounded-full hover:bg-slate-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}