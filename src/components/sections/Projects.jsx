import {RevealOnScroll} from "../RevealOnScroll.jsx"


export const Projects = () => {
    return (
        <section id="projects"
                 className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto pd-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r
                from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10
                    hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Caesar Cipher
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A small cryptography project that implements the Caesar Cipher which is a historical
                                cryptography method that was used by Julius Caesar to communicate with his allies
                                without being caught by his enemies.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3
                                              rounded-full text-sm hover:bg-blue-500/20
                                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/CharviGulati/CaesarCipherAssignment"
                                   className="text-blue-400 hover:text-blue-300 transition colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>


                        <div className="p-6 rounded-xl border border-white/10
                    hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Flood Fills
                            </h3>
                            <p className="text-gray-400 mb-4">
                                This program works by using depth first search, or breadth first search in order
                                to perform the "flood fill" algorithm on an input image.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C++"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3
                                              rounded-full text-sm hover:bg-blue-500/20
                                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/CharviGulati/FloodFill"
                                   className="text-blue-400 hover:text-blue-300 transition colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>


                        <div className="p-6 rounded-xl border border-white/10 center
                    hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Linked-List Image Manipulation
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Flip an image using a linked-list
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C++"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3
                                              rounded-full text-sm hover:bg-blue-500/20
                                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/CharviGulati/LinkedListImageManipulation"
                                   className="text-blue-400 hover:text-blue-300 transition colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
