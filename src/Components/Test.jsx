import React from 'react';

const Test = () => {
    return (
        <div className="min-h-screen font-sans text-slate-900 bg-white">
            {/* --- NAVIGATION --- */}
            <nav className="flex items-center justify-between px-10 py-6 max-w-7xl mx-auto">
                <div className="font-bold text-2xl flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-lg"></div> WorkCaria
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                    <a href="#" className="hover:text-black">Home</a>
                    <a href="#" className="hover:text-black">Company</a>
                    <a href="#" className="hover:text-black">Pricing</a>
                    <a href="#" className="hover:text-black">Blog</a>
                </div>
                <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium">Join Now</button>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-16 pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-transparent">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <p className="text-slate-900 font-medium mb-4">Develop Your Career Talent to</p>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        Make a <span className="text-slate-900">Lasting Impact</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto mb-10">
                        Empower your professional journey with career opportunities, smart tools, and meaningful connections.
                    </p>
                    <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-semibold shadow-xl hover:bg-slate-800 transition-all mb-16">
                        Join Now
                    </button>

                    {/* Hero Visuals */}
                    <div className="relative max-w-4xl mx-auto h-[600px] flex justify-center items-end">
                        {/* Floating Cards Behind Subject */}
                        <div className="absolute left-0 top-20 bg-white/80 backdrop-blur shadow-xl p-4 rounded-xl w-48 -rotate-6 border border-white">
                            <p className="font-bold text-sm">Career Growth</p>
                            <p className="text-[10px] text-slate-500">Upskill with industry learning paths</p>
                        </div>
                        <div className="absolute right-0 top-32 bg-white/80 backdrop-blur shadow-xl p-4 rounded-xl w-48 rotate-6 border border-white">
                            <p className="font-bold text-sm">Work Culture</p>
                            <p className="text-[10px] text-slate-500">Collaborate with innovative teams</p>
                        </div>

                        {/* MAIN SUBJECT IMAGE - Replace src with the generated image URL */}
                        <img
                            src="YOUR_GENERATED_IMAGE_URL"
                            className="h-full object-contain relative z-10 drop-shadow-2xl"
                            alt="Professional using tablet"
                        />

                        {/* Search Bar Floating Bottom */}
                        <div className="absolute -bottom-6 w-full max-w-2xl bg-white shadow-2xl rounded-full p-2 flex items-center border border-slate-100 z-20">
                            <div className="flex-1 px-6 border-r flex items-center gap-2 text-slate-400">
                                <span>📍</span> <input type="text" placeholder="Location" className="w-full outline-none text-slate-900 text-sm" />
                            </div>
                            <div className="flex-1 px-6 flex items-center gap-2 text-slate-400">
                                <span>💼</span> <input type="text" placeholder="Job Type" className="w-full outline-none text-slate-900 text-sm" />
                            </div>
                            <button className="bg-black text-white p-3 rounded-full">🔍</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- WHY WORK WITH US --- */}
            <section className="py-24 max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-16">Why Work With Us</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Career Growth", icon: "📈", desc: "Personal development is at our core." },
                        { title: "Work Culture", icon: "🤝", desc: "An environment built on trust." },
                        { title: "Flexibility", icon: "🏠", desc: "Work from anywhere, anytime." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all text-left border border-transparent hover:border-slate-100">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FEATURED OPPORTUNITIES --- */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Featured Opportunities</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {["Senior Product Designer", "HR Business Partner", "Customer Success Lead"].map((job, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm text-left">
                                <div className="text-xs font-bold text-blue-600 mb-4 uppercase tracking-widest">New Opening</div>
                                <h3 className="font-bold text-xl mb-6">{job}</h3>
                                <div className="flex gap-4 mb-8">
                                    <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">📍 London</span>
                                    <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">🕒 Full-time</span>
                                </div>
                                <button className="w-full py-3 rounded-xl border border-slate-200 font-medium hover:bg-slate-50">View Details</button>
                            </div>
                        ))}
                    </div>
                    <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-medium">View All Jobs</button>
                </div>
            </section>

            {/* --- STATS SECTION --- */}
            <section className="py-32 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
                <div>
                    <h2 className="text-6xl font-black mb-2">500+</h2>
                    <p className="text-slate-500">Team Members</p>
                </div>
                <div>
                    <h2 className="text-6xl font-black mb-2">98%</h2>
                    <p className="text-slate-500">Retention Rate</p>
                </div>
                <div>
                    <h2 className="text-6xl font-black mb-2">50+</h2>
                    <p className="text-slate-500">Countries</p>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-slate-900 text-white pt-24 pb-12 rounded-t-[50px]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-20">
                        <div>
                            <div className="font-bold text-2xl mb-6">WorkCaria</div>
                            <p className="text-slate-400 text-sm">Building the future of talent management and career growth.</p>
                        </div>
                        {["Company", "Resources", "Legal"].map((title, i) => (
                            <div key={i}>
                                <h4 className="font-bold mb-6">{title}</h4>
                                <ul className="text-slate-400 text-sm space-y-4">
                                    <li>About Us</li>
                                    <li>Careers</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-xs">
                        © 2026 WorkCaria. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Test;