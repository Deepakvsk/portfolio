import { FaJava, FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiSpringboot, SiJavascript, SiTailwindcss, SiRedux, SiNextdotjs } from "react-icons/si";

export default function Hero() {
    const techIcons = [
        <FaJava className="w-8 h-8 text-blue-600" />,
        <SiSpringboot className="w-8 h-8 text-green-600" />,
        <FaReact className="w-8 h-8 text-cyan-500" />,
        <SiRedux className="w-8 h-8 text-purple-600" />,
        <SiNextdotjs className="w-8 h-8 text-black" />,
        <SiJavascript className="w-8 h-8 text-yellow-400" />,
        <SiTailwindcss className="w-8 h-8 text-sky-500" />,
        <FaHtml5 className="w-8 h-8 text-orange-500" />,
        <FaCss3Alt className="w-8 h-8 text-blue-500" />,
        <FaNodeJs className="w-8 h-8 text-green-700" />,
    ];

    return (
        <section className="min-h-screen flex items-center bg-gradient-to-r from-slate-50 to-slate-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:justify-between gap-12">

                {/* Left Content */}
                <div className="lg:w-1/2 space-y-6">
                    <p className="text-blue-600 font-semibold tracking-wide uppercase">Hello, I’m</p>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900">
                        Deepak Vishwakarma
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-600">
                        Fullstack Java & Microservices Developer
                    </h2>
                    <p className="text-slate-600 leading-relaxed mt-4">
                        I build modern, scalable, and user-friendly web applications using Java, Spring Boot, React, Tailwind CSS, and Node.js. My focus is on clean architecture and professional code.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
                            View Projects
                        </button>
                        <button className="border border-slate-300 px-6 py-3 rounded-lg hover:bg-slate-100 transition transform hover:scale-105">
                            Contact Me
                        </button>
                    </div>

                    {/* Tech Icons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        {techIcons.map((icon, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow hover:shadow-lg transition"
                            >
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Image / Illustration */}
                <div className="lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=600"
                        alt="Hero illustration"
                        className="rounded-xl shadow-xl mx-auto lg:mx-0"
                    />
                </div>
            </div>
        </section>
    );
}
