import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="font-bold text-2xl flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-lg"></div> Portfolio
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-slate-700 font-medium">
                    <li className="hover:text-blue-600 cursor-pointer">Home</li>
                    <li className="hover:text-blue-600 cursor-pointer">About</li>
                    <li className="hover:text-blue-600 cursor-pointer">Skills</li>
                    <li className="hover:text-blue-600 cursor-pointer">Projects</li>
                    <li className="hover:text-blue-600 cursor-pointer">Contact</li>
                </ul>
                <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium">Hire Me</button>


                {/* Hamburger Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-0.5 w-6 bg-slate-900 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-slate-900 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-slate-900 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-white/95 backdrop-blur border-t border-slate-200 flex flex-col gap-4 px-6 py-4">
                    <li className="hover:text-blue-600 cursor-pointer">Home</li>
                    <li className="hover:text-blue-600 cursor-pointer">About</li>
                    <li className="hover:text-blue-600 cursor-pointer">Skills</li>
                    <li className="hover:text-blue-600 cursor-pointer">Projects</li>
                    <li className="hover:text-blue-600 cursor-pointer">Contact</li>
                </ul>
            )}
        </nav>
    );
}
