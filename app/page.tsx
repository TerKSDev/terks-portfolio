'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './_components/layout/Header';
import CodeSection from './_components/sections/Code';
import IntroductionSection from './_components/sections/Introduction';

export default function Home() {
   const [activeSection, setActiveSection] = useState('');

   return (
      <>
         <Header activeSection={activeSection} />
         <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-slate-950">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 text-sm text-slate-400 font-jetbrains font-semibold animate-pulse z-20 pointer-events-none">
               <div className="flex flex-col w-full animate-bounce">
                  <span>Scroll Down</span>
                  <div className="relative w-full h-6">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="3 0 18 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        preserveAspectRatio="none"
                        className="w-full h-6 text-slate-400 absolute -top-0.5"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                     </svg>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="3 0 18 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        preserveAspectRatio="none"
                        className="w-full h-6 text-slate-400 absolute top-1.5"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                     </svg>
                  </div>
               </div>
            </div>

            {/* 1. Code Animation Showcase */}
            <motion.section
               id="home"
               onViewportEnter={() => setActiveSection('home')}
               viewport={{ amount: 0.5 }}
               className="h-screen w-full snap-start relative items-center flex justify-center z-30"
            >
               <CodeSection />
            </motion.section>

            {/* 2. Bento Box of Introduction */}
            <motion.section
               id="introduction"
               onViewportEnter={() => setActiveSection('introduction')}
               viewport={{ amount: 0.5 }}
               className="h-screen w-full snap-start flex items-center justify-center relative"
            >
               <IntroductionSection />
            </motion.section>

            {/* 3. Projects Section */}
            <motion.section
               id="projects"
               onViewportEnter={() => setActiveSection('projects')}
               viewport={{ amount: 0.5 }}
               className="h-screen w-full snap-start flex items-center justify-center relative bg-slate-950 border-t border-slate-800"
            >
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

               <div className="z-10 text-center space-y-4">
                  <h2 className="text-5xl font-outfit font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                     The Omphalos Project
                  </h2>
                  <p className="text-slate-400 font-sans text-lg">
                     純前端角色介紹企劃，即將啟動。
                  </p>
               </div>
            </motion.section>

            {/* 4. Contact Section */}
            <motion.section
               id="contact"
               onViewportEnter={() => setActiveSection('contact')}
               viewport={{ amount: 0.5 }}
               className="h-screen w-full snap-start flex items-center justify-center relative"
            >
               <div className="text-center">
                  <h2 className="text-4xl font-bold font-outfit text-slate-100 mb-4">
                     Get In Touch
                  </h2>
                  <p className="text-slate-400">
                     My inbox is always open. Feel free to reach out!
                  </p>
                  <a
                     href="mailto:example@example.com"
                     className="mt-8 inline-block bg-cyan-500 text-slate-900 font-semibold py-3 px-6 rounded-md hover:bg-cyan-600 transition-colors"
                  >
                     Say Hello
                  </a>
               </div>
            </motion.section>
         </main>
      </>
   );
}
