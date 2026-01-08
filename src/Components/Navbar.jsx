import { useState } from "react";
import { SiLintcode } from "react-icons/si";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // NAV ITEMS
    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    // SCROLL FUNCTION
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* FIXED NAVBAR */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <div className="font-bold text-xl sm:text-2xl flex items-center gap-2">
                        <SiLintcode className="w-8 h-8" />
                        Portfolio
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 text-slate-700 font-medium">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="hover:text-orange-600 cursor-pointer"
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Hire Button */}
                    <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full text-sm font-medium">
                        Hire Me
                    </button>

                    {/* Hamburger Button (Mobile) */}
                    <button
                        className="md:hidden flex flex-col gap-1.5"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block h-0.5 w-6 bg-slate-900 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-slate-900 transition-opacity ${isOpen ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-slate-900 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="md:hidden bg-white/95 backdrop-blur border-t border-slate-200 flex flex-col gap-4 px-6 py-4">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => {
                                    scrollToSection(item.id);
                                    setIsOpen(false);
                                }}
                                className="hover:text-blue-600 cursor-pointer"
                            >
                                {item.name}
                            </li>
                        ))}

                        {/* Mobile Hire Button */}
                        <button className="mt-2 bg-black text-white py-2 rounded-full text-sm font-medium">
                            Hire Me
                        </button>
                    </ul>
                )}
            </nav>

            {/* NAVBAR SPACER */}
            <div className="h-[72px]" />
        </>
    );
}
