import React from "react";
import { FaLocationArrow, FaExternalLinkAlt, FaStarOfLife } from "react-icons/fa";

export default function Projects() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm md:text-base">
                        A selection of real-world projects showcasing my Java Full-Stack
                        development skills.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Project 1 */}
                    <div className="rounded-[28px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                            <FaStarOfLife className="text-xl" />
                        </div>

                        <h3 className="text-xl font-semibold text-slate-900 mb-4">
                            Job Portal System
                        </h3>

                        <div className="flex items-center gap-6 text-sm text-slate-500 mb-8">
                            <span className="flex items-center gap-1">
                                <FaExternalLinkAlt className="text-slate-400" />
                                Full Stack
                            </span>
                            <span className="flex items-center gap-1">
                                <FaLocationArrow className="text-slate-400" />
                                Java + React
                            </span>
                        </div>

                        <button className="w-full rounded-full border border-slate-300 py-3 text-sm font-medium hover:bg-slate-100 transition">
                            View Details
                        </button>
                    </div>

                    {/* Project 2 (Highlighted) */}
                    <div className="rounded-[28px] bg-gradient-to-br from-[#f6fafe] via-[#fdfcff] to-[#fff5f7] border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-6">
                            <FaStarOfLife className="text-xl" />
                        </div>

                        <h3 className="text-xl font-semibold text-slate-900 mb-4">
                            E-Commerce Platform
                        </h3>

                        <div className="flex items-center gap-6 text-sm text-slate-500 mb-8">
                            <span className="flex items-center gap-1">
                                <FaExternalLinkAlt className="text-slate-400" />
                                Web App
                            </span>
                            <span className="flex items-center gap-1">
                                <FaLocationArrow className="text-slate-400" />
                                Spring Boot
                            </span>
                        </div>

                        <button className="w-full rounded-full border border-slate-300 py-3 text-sm font-medium hover:bg-slate-100 transition">
                            View Details
                        </button>
                    </div>

                    {/* Project 3 */}
                    <div className="rounded-[28px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                            <FaStarOfLife className="text-xl" />
                        </div>

                        <h3 className="text-xl font-semibold text-slate-900 mb-4">
                            Employee Management System
                        </h3>

                        <div className="flex items-center gap-6 text-sm text-slate-500 mb-8">
                            <span className="flex items-center gap-1">
                                <FaExternalLinkAlt className="text-slate-400" />
                                Backend
                            </span>
                            <span className="flex items-center gap-1">
                                <FaLocationArrow className="text-slate-400" />
                                REST APIs
                            </span>
                        </div>

                        <button className="w-full rounded-full border border-slate-300 py-3 text-sm font-medium hover:bg-slate-100 transition">
                            View Details
                        </button>
                    </div>

                </div>

                {/* CTA */}
                <div className="flex justify-center mt-14">
                    <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition">
                        View All Projects
                    </button>
                </div>

            </div>
        </section>
    );
}
