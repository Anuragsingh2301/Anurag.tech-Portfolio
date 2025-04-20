import { RevealOnScroll } from "../RevealOnScroll";


export const Projects=()=>{
    return(
        <section id="projects" className="min-h-screen flex justify-center items-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
            <h1 className="font-bold text-3xl mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center leading-right">
                MY PROJECTS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4"> 
                <div className=" rounded-xl p-6 border-white/10 border transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"> 
                   <h3 className="text-xl mb-4 font-bold ">
                        Tenzies Game
                    </h3>
                    <p className="text-gray-300 mb-6 ">
                        A fun game where you roll dice to get all the same number. Built with React and CSS. 
                    
                    </p>
                    <div className="flex flex-wrap gap-4">
                    {["Html","CSS","React-JS"].map((tech)=>(
                            <span key={tech} className="bg-blue-500/50  text-blue-500 text-sm hover:bg-blue-500/20 px-3 py-1 rounded-full hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] cursor-pointer transition-all">{tech}</span>
                        ))}
                    </div>
                    <div className=" mt-4 flex justify-between items-center">    
                        <a href="https://github.com/Anuragsingh2301/Tenzies.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr;

                        </a>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Repo" className="w-6 h-6 hover:opacity-80 transition-opacity" />
                    </div>

                </div>
                <div className=" rounded-xl p-6 border-white/10 border transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"> 
                   <h3 className="text-xl mb-4 font-bold ">
                        Lyrics-Finder
                    </h3>
                    <p className="text-gray-300 mb-6 ">
                        A web app that fetches and displays song lyrics using an API. Built with React and CSS.
                    
                    </p>
                    <div className="flex flex-wrap gap-4">
                    {["Html","CSS","React-JS","API"].map((tech)=>(
                            <span key={tech} className="bg-blue-500/50  text-blue-500 text-sm hover:bg-blue-500/20 px-3 py-1 rounded-full hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] cursor-pointer transition-all">{tech}</span>
                        ))}
                    </div>
                    <div className=" mt-4 flex justify-between items-center">    
                        <a href="https://github.com/Anuragsingh2301/Lyrics_finder.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr;

                        </a>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Repo" className="w-6 h-6 hover:opacity-80 transition-opacity" />
                    </div>

                </div>
                <div className=" rounded-xl p-6 border-white/10 border transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"> 
                   <h3 className="text-xl mb-4 font-bold ">
                        Tic-Tac-Toe
                    </h3>
                    <p className="text-gray-300 mb-6 ">
                        A classic Tic-Tac-Toe game built with React. Play against a friend or the computer.
                    
                    </p>
                    <div className="flex flex-wrap gap-4">
                    {["Html","CSS","Javascript"].map((tech)=>(
                            <span key={tech} className="bg-blue-500/50  text-blue-500 text-sm hover:bg-blue-500/20 px-3 py-1 rounded-full hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] cursor-pointer transition-all">{tech}</span>
                        ))}
                    </div>
                    <div className=" mt-4 flex justify-between items-center">    
                        <a href="https://github.com/Anuragsingh2301/Tic-Tac_Toe.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr;

                        </a>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Repo" className="w-6 h-6 hover:opacity-80 transition-opacity" />
                    </div>

                </div>
                <div className=" rounded-xl p-6 border-white/10 border transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"> 
                   <h3 className="text-xl mb-4 font-bold ">
                        My Portfolio
                    </h3>
                    <p className="text-gray-300 mb-6 ">
                        A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.
                    
                    </p>
                    <div className="flex flex-wrap gap-4">
                    {["Html","React-JS","TailwindCSS","API"].map((tech)=>(
                            <span key={tech} className="bg-blue-500/50  text-blue-500 text-sm hover:bg-blue-500/20 px-3 py-1 rounded-full hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] cursor-pointer transition-all">{tech}</span>
                        ))}
                    </div>
                    <div className=" mt-4 flex justify-between items-center">    
                        <a href="https://github.com/Anuragsingh2301/Anurag.tech-Portfolio.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr;

                        </a>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Repo" className="w-6 h-6 hover:opacity-80 transition-opacity" />
                    </div>

                </div>
            </div>
            

            </div>
            </RevealOnScroll>
        </section>
    );
    }