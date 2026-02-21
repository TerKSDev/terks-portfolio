'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IntroductionSection() {
   const currentStat = [
      {
         label: 'Learning',
         value: 'Next.js 15',
      },
      {
         label: 'Role',
         value: 'Full-Stack Developer',
      },
      {
         label: 'Location',
         value: 'Malaysia',
      },
   ];
   return (
      <section className="flex flex-col w-full h-full px-16 justify-start pt-21 gap-8 max-w-7xl mx-auto">
         {/* Title with Animated Cursor */}
         <motion.div
            initial={{ opacity: 1, x: -800 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-row items-center font-jetbrains gap-8 "
         >
            <div className="flex flex-row items-center h-fit min-w-fit min-h-fit tracking-wider">
               <h1 className="text-2xl text-cyan-400 mr-2">{'>'}</h1>
               <h1 className="text-3xl font-semibold text-slate-100">
                  ABOUT ME
               </h1>
               <h1 className="text-2xl ml-1 text-cyan-400 animate-pulse">
                  {'_'}
               </h1>
            </div>

            <div className="max-h-px flex-1 border-b-2 border-slate-600/80"></div>
         </motion.div>

         {/* Content Section */}
         <div className="flex flex-col md:flex-row items-stretch justify-center gap-8">
            {/* Image Section */}
            <motion.div
               initial={{ opacity: 1, x: -800 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
               className="w-full lg:w-1/3 relative bg-linear-to-br from-cyan-600 to-purple-600 flex items-center justify-center rounded-sm aspect-square shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
            >
               <div className="relative w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-sm overflow-hidden bg-slate-900">
                  <Image
                     src="/terksdev.jpeg"
                     alt="TerKSDev"
                     fill
                     className="object-cover"
                  />
               </div>
            </motion.div>

            {/* Text Section */}
            <div className="flex flex-1 flex-col gap-6 text-slate-400 font-geist tracking-wide justify-between h-full">
               {/* Introduction */}
               <motion.div
                  initial={{ opacity: 1, x: 800 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
                  className="bg-slate-900 p-4 rounded-md flex flex-1 max-h-fit flex-col gap-4 border border-slate-800 hover:border-cyan-600 transition-colors duration-200 shadow-lg"
               >
                  <h1 className="text-xl w-full border-b-2 font-outfit tracking-wider font-medium border-slate-600/80 pb-2 mb-1">
                     # Introduction
                  </h1>
                  <p className="px-1">
                     Hello there! I'm{' '}
                     <span className="text-cyan-400">Ter Kean Sen</span>. I'm a
                     Full-Stack Developer specializing in modern web systems
                     architectures and technologies.
                  </p>
                  <p className="px-1">
                     I'm passionate about creating seamless and modern digital
                     experiences. Whether it's{' '}
                     <span className="underline underline-offset-[6px] decoration-cyan-400/80 text-slate-200">
                        building interactive interfaces
                     </span>{' '}
                     with Next.js or{' '}
                     <span className="underline underline-offset-[6px] decoration-purple-400/80 text-slate-200">
                        managing powerful cloud
                     </span>{' '}
                     deployments on AWS, I enjoy bringing ideas to life with
                     clean and efficient code.
                  </p>
               </motion.div>

               {/* Current Status */}
               <motion.div
                  initial={{ opacity: 1, x: 800 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.25 }}
                  className="bg-slate-900 p-4 rounded-md flex flex-1 max-h-fit flex-col gap-4 text-slate-400 font-geist tracking-wide border border-slate-800 hover:border-cyan-600 transition-colors duration-200 shadow-lg"
               >
                  <h1 className="text-xl w-full border-b-2 font-outfit tracking-wider font-medium border-slate-600/80 pb-2 mb-1">
                     # Current_Stat
                  </h1>
                  <div className="px-1 flex flex-col gap-2">
                     {currentStat.map((stat) => (
                        <div
                           className="flex flex-row justify-between tracking-wider w-full gap-4 items-center"
                           key={stat.label}
                        >
                           <span className="text-slate-400">{stat.label}</span>
                           <div className="h-0.5 border-b-[2.25px] border-dotted flex-1 border-slate-400"></div>
                           <span className="text-slate-200">{stat.value}</span>
                        </div>
                     ))}
                  </div>
               </motion.div>
            </div>
         </div>

         {/* Quote Section */}
         <motion.div
            initial={{ opacity: 1, x: -800 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
            className=" border bg-slate-900 rounded-md border-slate-800 text-slate-400 font-geist tracking-wide"
         >
            <div className="p-4 px-6 flex flex-1 border-l-4 border-cyan-400 rounded-md items-center shadow-lg">
               "Writing code is easy. Architecting experiences that last is the
               real craft."
            </div>
         </motion.div>
      </section>
   );
}
