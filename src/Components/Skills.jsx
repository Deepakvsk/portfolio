import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaAws } from "react-icons/fa";
import { SiSpringboot, SiRedux, SiJavascript, SiMysql, SiPostgresql, SiDocker, SiJenkins, SiMongodb, SiKubernetes, SiTypescript, SiNextdotjs } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "Java", icon: <FaJava className="w-10 h-10 text-blue-600" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="w-10 h-10 text-green-600" /> },
        { name: "React", icon: <FaReact className="w-10 h-10 text-cyan-500" /> },
        { name: "Redux", icon: <SiRedux className="w-10 h-10 text-purple-600" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10 text-black" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-blue-700" /> },
        { name: "HTML5", icon: <FaHtml5 className="w-10 h-10 text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="w-10 h-10 text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="w-10 h-10 text-green-700" /> },
        { name: "Git & GitHub", icon: <FaGitAlt className="w-10 h-10 text-red-600" /> },
        { name: "SQL / MySQL", icon: <SiMysql className="w-10 h-10 text-blue-700" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-blue-800" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-green-600" /> },
        { name: "Docker", icon: <SiDocker className="w-10 h-10 text-blue-500" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="w-10 h-10 text-blue-600" /> },
        { name: "Jenkins", icon: <SiJenkins className="w-10 h-10 text-red-700" /> },
        { name: "AWS", icon: <FaAws className="w-10 h-10 text-orange-500" /> },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-slate-900">
                    My <span className="text-blue-600">Tech Stack</span>
                </h2>
                <p className="text-center text-slate-600 mt-4 max-w-3xl mx-auto">
                    3+ years of experience as a Java Fullstack Developer. Skilled in backend systems, modern frontend frameworks, database management, cloud services, and DevOps tools.
                </p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1"
                        >
                            {skill.icon}
                            <span className="text-lg font-semibold text-slate-800">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
