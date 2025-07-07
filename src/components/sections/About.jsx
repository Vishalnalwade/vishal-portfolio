import { RevealOnScroll } from "../RevealOnScroll";

export const About =()=>{
  const frontendSkills=[
    "React",
    "Html",
    "CSS",
    "JavaScript",
    "Tailwind"
  ];
  const backendSkills=[
    "Java",
    "Spring",
    "Spring Boot",
    "Node.js",
    "MySQL"
  ];

  return(
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to bg-cyan-400 bg-clip-text text-transparent text-center">{" "}About Me</h2>
        <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 ">
            Passionate developer with experties in building scalable web applications and creating innovative solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4 ">Frontend</h3>
              <div className="flex flex-wrap gap-2 ">
                {frontendSkills.map((tech,key)=>(
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4 ">Backend</h3>
              <div className="flex flex-wrap gap-2 ">
                {backendSkills.map((tech,index)=>(
                  <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 ">
          <div className="p-6  rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                <h3 className="text-xl font-bold mb-4 ">🎓 Education</h3> 
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>BCA in Computer Science</strong> -Solapur University [2022-2025]
                  </li>
                  <li>
                    <strong>Relevent CourseWork</strong> :Core Java, Full-Stack Java, Web Development, React
                  </li>
                </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                <h3 className="text-xl font-bold mb-4 ">💻 Work Experience</h3> 
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">Software Developer (2023 - Present)</h4>
                    <p>Developed Web Application using React and Spring Boot</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Intern at ProAzaure Software Solutions Pvt.Ltd (2025)</h4>
                    <p>Assisted in building front-end components and back-end REST APIs </p>
                  </div>
                </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}