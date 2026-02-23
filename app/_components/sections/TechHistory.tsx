import { motion } from 'framer-motion';

export default function TechAndHistorySection() {
   const techStack = [
      {
         label: 'Frontend',
         technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      },
      {
         label: 'Backend',
         technologies: ['Node.js', 'Express'],
      },
      {
         label: 'Database',
         technologies: ['PostgreSQL', 'MySQL', 'Prisma ORM'],
      },
      {
         label: 'Infrastructure_&_Deployment',
         technologies: ['AWS (EC2/S3)', 'Vercel', 'Git / GitHub'],
      },
   ];

   const history = [
      {
         year: 'May 2024 - Dec 2025',
         title: 'Information Technology Student',
         institution:
            'Tunku Abdul Rahman University Management and Technology (TAR UMT)',
         description:
            'Pursuing a diploma in Information Technology, focusing on software development and system architecture.',
      },
      {
         year: 'Jan 2026 - Present',
         title: 'Full-Stack Developer Intern',
         institution: 'QuadraWebs',
         description:
            'Contributing to the development of web applications using Next.js and Node.js, while gaining hands-on experience in database management and cloud deployment.',
      },
   ];

   return (
      <section className="flex flex-col w-full h-full justify-start gap-4 lg:gap-8 max-w-7xl mx-auto box-border max-lg:px-6 lg:px-8">
         <div className="flex flex-row items-center font-jetbrains gap-8 ">
            <motion.div
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, ease: 'easeOut' }}
               viewport={{ once: true }}
               className="flex flex-row items-center h-fit min-w-fit min-h-fit tracking-wider"
            >
               <h1 className="text-lg lg:text-2xl text-cyan-400 mr-2">{'>'}</h1>
               <h1 className="text-xl lg:text-3xl font-semibold text-slate-100">
                  TECH_AND_HISTORY
               </h1>
               <h1 className="text-lg lg:text-2xl ml-1 text-cyan-400 animate-pulse">
                  {'_'}
               </h1>
            </motion.div>
            <div className="max-h-px flex-1 border-b-2 border-slate-600/80"></div>
         </div>

         <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 max-h-[calc(100%-50px)]">
            {/* Tech Stack Section */}
            <motion.div
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, ease: 'easeOut' }}
               viewport={{ once: true }}
               className="bg-slate-900 p-4 rounded-md flex flex-1 flex-col gap-4 lg:gap-6 border h-fit border-slate-800 hover:border-cyan-600 transition-colors duration-200 shadow-lg group overflow-y-auto"
            >
               <h1 className="text-lg lg:text-xl w-full border-b-2 font-outfit tracking-wider font-medium border-slate-600/80 pb-2 mb-1">
                  <span className="text-cyan-400 mr-2">#</span>Tech_Stack
               </h1>
               <div className="flex flex-col gap-4 lg:gap-6 pb-4 px-2">
                  {techStack.map((category) => (
                     <div key={category.label} className="flex flex-col gap-2">
                        <h1 className=" text-slate-400 capitalize font-geist tracking-wide group-hover:text-slate-200 transition-colors duration-300">
                           <span className="mr-1.5 max-lg:text-cyan-400 group-hover:text-cyan-400">
                              {'>'}
                           </span>
                           {category.label}
                           <span className="ml-0.5 max-lg:text-cyan-400 max-lg:animate-pulse group-hover:text-cyan-400 group-hover:animate-pulse">
                              {'_'}
                           </span>
                        </h1>
                        <div className="flex flex-wrap gap-2">
                           {category.technologies.map((tech) => (
                              <span
                                 key={tech}
                                 className="bg-slate-950 text-slate-400 text-xs hover:text-white border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-800 transition-colors duration-300 border-slate-800 font-mono px-4 py-1.75 rounded-md cursor-default"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </motion.div>

            {/* History Section */}
            <motion.div
               initial={{ opacity: 0, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, ease: 'easeOut' }}
               viewport={{ once: true }}
               className="bg-slate-900 p-4 rounded-md flex flex-1 flex-col gap-4 lg:gap-6 border border-slate-800 hover:border-purple-600 transition-colors duration-200 shadow-lg selection:bg-purple-400 overflow-y-auto h-fit"
            >
               <motion.h1 className="text-lg lg:text-xl w-full border-b-2 font-outfit tracking-wider font-medium border-slate-600/80 pb-2 mb-1">
                  <span className="text-purple-400 mr-2">#</span>History
               </motion.h1>
               <div className="relative flex flex-col-reverse gap-4 lg:gap-6">
                  <div className="absolute left-5.25 top-7.5 bottom-4 w-px bg-slate-600"></div>
                  {history.map((item, index) => {
                     const isActive = index === history.length - 1;

                     return (
                        <div
                           key={item.year}
                           className="flex flex-col gap-2 hover:bg-slate-800/50 rounded-md transition-colors duration-300 group cursor-default py-2 group"
                        >
                           <div className="flex flex-row gap-4 pl-4 items-center relative z-10r">
                              <div
                                 className={`h-3 w-3 border-2 rounded-full z-10 transition-colors duration-300 group-hover:border-purple-400 group-hover:bg-purple-600
                                 ${isActive ? 'border-purple-400 bg-purple-600 animate-pulse shadow-[0_0_10px_#c084fc]' : 'bg-slate-800 border-slate-500'}`}
                              ></div>
                              <h1
                                 className={`text-white rounded-md capitalize font-geist tracking-wide transition-colors duration-300 text-sm lg:text-base
                                 ${isActive ? 'bg-purple-500/30 text-purple-200 animate-pulse px-3 py-1 border border-purple-500/50' : 'text-slate-400 group-hover:text-slate-200'}`}
                              >
                                 {item.year}
                              </h1>
                           </div>
                           <div className="flex flex-col pl-12 pr-2 gap-2">
                              <div>
                                 <div className="text-white font-medium text-lg">
                                    {item.title}
                                 </div>
                                 <div className="text-purple-400/80 text-sm font-geist">
                                    @{item.institution}
                                 </div>
                              </div>
                              <div className="flex flex-row gap-2 text-slate-400 mt-1 text-sm leading-relaxed">
                                 <span className="text-purple-400 font-mono mt-0.5">
                                    {'>'}
                                 </span>
                                 <span>{item.description}</span>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </motion.div>
         </div>
      </section>
   );
}
