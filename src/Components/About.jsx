export default function About() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-slate-900 text-center">
                    What I <span className="text-blue-600">Do</span>
                </h2>

                <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
                    I help businesses and individuals build fast, modern and
                    user-friendly web applications.
                </p>

                {/* Cards */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">

                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-slate-900">
                            Frontend Development
                        </h3>
                        <p className="mt-3 text-slate-600">
                            Building clean, responsive and accessible interfaces using
                            React and modern CSS.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-slate-900">
                            UI / UX Focus
                        </h3>
                        <p className="mt-3 text-slate-600">
                            Designing smooth user experiences with attention to detail
                            and usability.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-slate-900">
                            Performance & Quality
                        </h3>
                        <p className="mt-3 text-slate-600">
                            Writing optimized, maintainable code that scales with
                            real-world needs.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
