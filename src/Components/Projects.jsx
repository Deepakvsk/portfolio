export default function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            desc: "A modern personal portfolio showcasing projects, skills, and experience.",
            tech: ["React", "Tailwind CSS"],
            link: "#",
        },
        {
            title: "Todo App",
            desc: "A clean and minimal task management app with local storage support.",
            tech: ["React", "LocalStorage"],
            link: "#",
        },
        {
            title: "Landing Page",
            desc: "A responsive and conversion-focused landing page with modern UI.",
            tech: ["HTML", "Tailwind CSS"],
            link: "#",
        },
    ];

    return (
        <section id="projects" className="py-28 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Featured <span className="text-blue-600">Projects</span>
                    </h2>
                    <p className="mt-4 text-slate-600">
                        A selection of projects that highlight my skills and experience in building modern web applications.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <h3 className="text-xl font-semibold text-slate-900">
                                {project.title}
                            </h3>

                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {project.desc}
                            </p>

                            {/* Tech Stack */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tech.map((item, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            {/* Action */}
                            <a
                                href={project.link}
                                className="inline-flex items-center mt-8 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all"
                            >
                                View Project
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
