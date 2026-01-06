export default function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            desc: "Personal portfolio built with React and Tailwind CSS."
        },
        {
            title: "Todo App",
            desc: "Task management app with clean UI and local storage."
        },
        {
            title: "Landing Page",
            desc: "Responsive landing page with modern design."
        }
    ];

    return (
        <section className="py-24 bg-slate-50" id="projects">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-slate-900">
                    My <span className="text-blue-600">Projects</span>
                </h2>

                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold text-slate-900">
                                {project.title}
                            </h3>
                            <p className="mt-4 text-slate-600">
                                {project.desc}
                            </p>
                            <button className="mt-6 text-blue-600 font-medium hover:underline">
                                View Project →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
