 
 import { RevealOnScroll } from "../RevealOnScroll";


export const About=()=>{
    const Frontend_skills=["HTML","CSS","JavaScript","React-JS","Tailwind CSS"];
    const Backend_skills=["Node.js","PostgreSQL","Php","MySQL"];
  
    return(
        <section id="about" className="min-h-screen flex  justify-center items-center py-20">
            <RevealOnScroll>
             <div className="max-w-3xl mx-auto px-4 ">
                <h2 className="font-bold text-3xl mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center leading-right ">About Me!</h2>
                <div className=" rounded-xl p-8 border-white/10 border transition-all duration-300 hover:-translate-y-1 ">
                    <p className="text-gray-300 mb-6 ">
                     I'm an enthusiastic developer on the journey to becoming a Full Stack Engineer. I'm currently exploring both frontend and backend tools while consistently improving my DSA skills to write efficient, scalable code.

                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 ">
                            <h3 className="text-xl mb-4 font-bold ">
                                Frontend
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {Frontend_skills.map((skill)=>(
                                    <span key={skill} className="bg-blue-500/50 text-blue-500 text-sm hover:bg-blue-500/20 px-3 py-1 rounded-full hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] cursor-pointer transition-all">{skill}</span>
                                )
                                    
                                )}

                            </div>

                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 ">
                            <h3 className="text-xl mb-4 font-bold ">
                                Backend
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {Backend_skills.map((skill)=>(
                                    <span key={skill} className="bg-blue-500/50 text-blue-500 text-sm hover:bg-blue-500/20 px-3 py-1 rounded-full hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] cursor-pointer transition-all">{skill}</span>
                                )
                                    
                                )}

                            </div>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all duration-300 ">
                        <h3 className="text-xl mb-4 font-bold ">
                          🎓 Education
                        </h3>
                         <ul className="list-disc list-inside  text-gray-300  space-y-2">
                            <li  >
                                <strong> B.Tech in Computer Science Engineering (2023-2027)</strong>
                                 - KJ Somaiya College of Engineering, Mumbai
                            </li>
                            <li  >
                                 Relevant Coursework: Data Structures ,Web-Devlopement, DB Managrment system,Software Engineer.
                            </li>
                         </ul>
                    </div>
                    <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all duration-300 ">
                        <h3 className="text-xl mb-4 font-bold ">
                          💼 Projects & Experience
                        </h3>
                         <ul className="  text-gray-300  space-y-2">
                         <li>
                             <strong>Frontend Projects (2025 - Present)</strong> – Created responsive UIs using React.js and Tailwind CSS.
                        </li>
                        <li>
                             <strong>React Portfolio (2025 - Present)</strong> – Developed this site to showcase skills and projects.
                        </li>

                         </ul>
                    </div>

                </div>
            
            </div>

            </RevealOnScroll>
         </section>
    );
}