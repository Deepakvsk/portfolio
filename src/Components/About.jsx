import aiHand from "../assets/ai-hand.png";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-32 overflow-hidden
      bg-gradient-to-br from-[#f8faff] via-white to-[#fff5f7]"
        >
            {/* Floating Gradient Orbs */}
            <div
                className="absolute top-24 left-[10%] w-72 h-72 rounded-full
        bg-pink-200/40 blur-3xl"
                style={{ animation: "float 10s ease-in-out infinite" }}
            />

            <div
                className="absolute bottom-32 left-[35%] w-64 h-64 rounded-full
        bg-orange-200/40 blur-3xl"
                style={{ animation: "float 12s ease-in-out infinite" }}
            />

            <div
                className="absolute top-32 right-[20%] w-80 h-80 rounded-full
        bg-purple-200/30 blur-3xl"
                style={{ animation: "float 14s ease-in-out infinite" }}
            />

            {/* AI Hand Background */}
            <div
                className="absolute top-1/2 right-[-160px] hidden md:block
            w-[760px] h-[760px] opacity-[0.5] pointer-events-none"
                style={{
                    backgroundImage: `url(${aiHand})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    transform: "translateY(-50%)",
                    animation: "handFloat 18s ease-in-out infinite",
                }}
            />


            {/* Fade overlay */}
            <div className="absolute inset-y-0 right-0 w-1/2
        bg-gradient-to-l from-white via-white/70 to-transparent hidden md:block" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6
        grid lg:grid-cols-2 gap-20 items-center">

                {/* Left */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        About <span className="text-slate-700">Me</span>
                    </h2>

                    <p className="mt-6 text-slate-600 max-w-xl leading-relaxed">
                        I’m a Java Full Stack Developer focused on building scalable,
                        secure and high-performance applications with modern architecture.
                    </p>

                    <p className="mt-4 text-slate-600 max-w-xl leading-relaxed">
                        I work across Java, Spring Boot, React, REST APIs and databases
                        with strong attention to performance and maintainability.
                    </p>
                </div>

                {/* Right Cards */}
                <div className="grid sm:grid-cols-2 gap-8">
                    {[
                        ["Backend Engineering", "Java, Spring Boot, secure APIs & microservices."],
                        ["Frontend Integration", "React based modern & responsive interfaces."],
                        ["Database & Performance", "Optimized SQL & NoSQL systems."],
                        ["Code Quality", "Clean, testable & maintainable codebases."],
                    ].map(([title, desc], i) => (
                        <div
                            key={i}
                            className="rounded-3xl bg-white/70 backdrop-blur-lg
              border border-slate-200 p-7
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl"
                        >
                            <h3 className="text-lg font-semibold text-slate-900">
                                {title}
                            </h3>
                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* GLOBAL KEYFRAMES (REACT SAFE) */}
            <style>{`
  @keyframes handFloat {
    0%, 100% {
      transform: translateY(-50%) translateX(0) scale(1);
    }
    50% {
      transform: translateY(calc(-50% - 10px)) translateX(-10px) scale(1.03);
    }
  }
`}</style>

        </section>
    );
}
