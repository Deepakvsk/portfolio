import {
    FaJava,
    FaReact,
    FaHtml5,
    FaGitAlt,
    FaNodeJs,
    FaAws,
} from "react-icons/fa";
import {
    SiSpringboot,
    SiRedux,
    SiJavascript,
    SiMysql,
    SiPostgresql,
    SiDocker,
    SiMongodb,
    SiKubernetes,
    SiTypescript,
    SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "Java", icon: <FaJava className="w-8 h-8 text-blue-600" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="w-8 h-8 text-green-600" /> },
        { name: "React", icon: <FaReact className="w-8 h-8 text-cyan-500" /> },
        { name: "Redux", icon: <SiRedux className="w-8 h-8 text-purple-600" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-slate-900" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-blue-700" /> },
        { name: "HTML5", icon: <FaHtml5 className="w-8 h-8 text-orange-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-green-700" /> },
        { name: "Git & GitHub", icon: <FaGitAlt className="w-8 h-8 text-red-600" /> },
        { name: "MySQL", icon: <SiMysql className="w-8 h-8 text-blue-700" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-blue-800" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-600" /> },
        { name: "Docker", icon: <SiDocker className="w-8 h-8 text-blue-500" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="w-8 h-8 text-blue-600" /> },
        { name: "AWS", icon: <FaAws className="w-8 h-8 text-orange-500" /> },
    ];

    return (
        <section className="py-24  bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Technical <span className="text-slate-700">Skills</span>
                    </h2>
                    <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
                        A strong Java Full-Stack skill set focused on building scalable,
                        secure, and high-performance web applications.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-[#f8faff] via-white to-[#fff5f7] p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition"
                        >
                            <div className="mb-3 transform group-hover:scale-110 transition">
                                {skill.icon}
                            </div>
                            <span className="text-sm font-medium text-slate-800">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
