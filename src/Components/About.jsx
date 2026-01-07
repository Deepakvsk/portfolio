export default function About() {
    const skills = [
        {
            title: "Backend Development",
            desc: "Building robust and scalable backend systems using Java, Spring Boot, and RESTful APIs.",
        },
        {
            title: "Enterprise Applications",
            desc: "Experience in developing enterprise-grade applications with clean architecture and best practices.",
        },
        {
            title: "Database & Performance",
            desc: "Designing efficient database schemas, writing optimized queries, and improving application performance.",
        },
        {
            title: "Code Quality & Testing",
            desc: "Writing clean, maintainable code with unit testing, logging, and proper error handling.",
        },
    ];

    return (
        <section className="py-28 bg-white" id="about">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                    <h2 className="text-4xl font-bold text-slate-900">
                        About <span className="text-blue-600">Me</span>
                    </h2>

                    <p className="mt-6 text-slate-600 leading-relaxed">
                        I am a Java Developer focused on building reliable, scalable, and
                        high-performance backend systems. I enjoy solving real-world
                        problems by designing clean architectures and writing maintainable
                        code that supports long-term growth.
                    </p>

                    <p className="mt-4 text-slate-600 leading-relaxed">
                        My work revolves around Java, Spring Boot, REST APIs, and database-driven
                        applications, with a strong emphasis on performance, security, and
                        best development practices.
                    </p>
                </div>

                {/* Right Cards */}
                <div className="grid sm:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                        >
                            <h3 className="text-lg font-semibold text-slate-900">
                                {skill.title}
                            </h3>
                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                {skill.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
