export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Top */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-white">
                            Deepak Vishwakarma
                        </h3>
                        <p className="mt-1 text-sm text-slate-400">
                            Java Developer · Backend Engineer
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-6 text-sm">
                        <a href="#about" className="hover:text-white transition">
                            About
                        </a>
                        <a href="#projects" className="hover:text-white transition">
                            Projects
                        </a>
                        <a href="#impact" className="hover:text-white transition">
                            Impact
                        </a>
                        <a href="#contact" className="hover:text-white transition">
                            Contact
                        </a>
                    </div>

                </div>

                {/* Divider */}
                <div className="mt-8 border-t border-slate-700"></div>

                {/* Bottom */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
                    <p>
                        © {new Date().getFullYear()} Ravelsoftech. All rights reserved.
                    </p>
                    <p className="text-slate-500">
                        Built with Java mindset & modern web technologies
                    </p>
                </div>

            </div>
        </footer>
    );
}
