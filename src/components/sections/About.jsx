import {RevealOnScroll} from "../RevealOnScroll.jsx"

export const About = () => {

    const programmingLanguages = [
        "Java",
        "TypeScript",
        "C++",
        "Python",
        "JavaScript",
        "Shell Script",
        "PHP"
    ];

    const webDevelopment = [
        "HTML",
        "CSS",
        "SpringBoot",
        "JHipster",
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r
                from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Detail-oriented and solutions-driven 4th-year Computer Science student at UBC with a strong
                            foundation in object-oriented programming, web development, and machine learning.
                            Hands-on experience with Java, Python, REST APIs, and agile workflows.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Programming Languages
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {programmingLanguages.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3
                                              rounded-full text-sm hover:bg-blue-500/20
                                              hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>


                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Web Development
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {webDevelopment.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3
                                              rounded-full text-sm hover:bg-blue-500/20
                                              hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Education
                            </h3>
                            <div className= "space-y-4" >
                                <div className="list-disc list-inside text-gray-300 space-y-2">
                                    <div>
                                        <strong>
                                            B.Sc in Computer Science
                                        </strong> - University of British Columbia (2020-2025)
                                    </div>
                                    <div className="ml-2">
                                        <span className="underline"> Relevant Coursework</span>: Algorithms, Databases, Machine Learning,
                                        Artificial Intelligence
                                    </div>
                                </div>

                                <div className="list-disc list-inside text-gray-300 space-y-2">
                                    <div>
                                        <strong>
                                            B.SC in Health Science and Biology
                                        </strong> - Kwantlen Polytechnic University (2013-2019)
                                    </div>
                                    <div className="ml-2">
                                        <span className="underline "> Relevant Coursework</span>: Genetics, Research Methods, Evolutionary Biology
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Work Experience
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        Software Engineering Intern at Letus 2020-2020
                                    </h4>
                                    <p className="ml-2">
                                        Developed and maintained microservices
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        Research Assistant at KPU 2017-2022
                                    </h4>
                                    <p className="ml-2">
                                        Developed lab protocols to quantify Trichoderma germination rates in varying
                                        mediums and contributed to NSERC and CIHR-funded nutrigenomics studies
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
