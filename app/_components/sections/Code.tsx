'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CodeBlock, { CodeLine } from '../ui/CodeBlock';
import { FaPlay } from 'react-icons/fa';

const codeLines: CodeLine[] = [
   [
      {
         text: '// Initializing the Developer Instance',
         className: 'text-slate-500',
      },
   ],
   [
      { text: 'const ', className: 'text-purple-400' },
      { text: 'developer = ', className: 'text-cyan-400' },
      { text: 'new ', className: 'text-purple-400' },
      { text: 'FullstackDeveloper(', className: 'text-cyan-400' },
      { text: '"Ter Kean Sen"', className: 'text-green-500' },
      { text: ')', className: 'text-cyan-400' },
   ],
   [
      { text: 'developer', className: 'text-cyan-500' },
      { text: '.stack', className: 'text-cyan-400' },
      { text: '[', className: 'text-cyan-500' },
      { text: '"TypeScript"', className: 'text-green-500' },
      { text: ', ', className: 'text-cyan-500' },
      { text: '"Next.js"', className: 'text-green-500' },
      { text: ', ', className: 'text-cyan-500' },
      { text: '"Tailwind CSS"', className: 'text-green-500' },
      { text: ', ', className: 'text-cyan-500' },
      { text: '"Prisma"', className: 'text-green-500' },
      { text: ']', className: 'text-cyan-500' },
   ],
   [{ text: 'developer.execute();', className: 'text-cyan-500' }],
];

export default function CodeSection() {
   const [isTypingComplete, setIsTypingComplete] = useState(false);

   const handleRunCodeClick = () => {
      const introductionSection = document.getElementById('introduction');
      if (introductionSection) {
         introductionSection.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <section className="flex flex-col items-center justify-center relative border-2 border-slate-800 rounded-md bg-slate-900/50 backdrop-blur-sm selection:bg-blue-900/80 selection:text-white">
         <div className="flex flex-row justify-between items-center gap-2.5 w-full bg-slate-800/80 px-4 py-2 border-b border-slate-800 h-11">
            <div className="flex flex-row gap-2.5">
               <div className="h-3 w-3 rounded-full bg-red-600 animate-pulse delay-100"></div>
               <div className="h-3 w-3 rounded-full bg-yellow-600 animate-pulse delay-150"></div>
               <div className="h-3 w-3 rounded-full bg-green-600 animate-pulse delay-200"></div>
            </div>
            {isTypingComplete && (
               <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <button
                     onClick={handleRunCodeClick}
                     className="flex items-center bg-green-700 font-jetbrains font-semibold text-sm px-3 py-1 rounded-sm hover:bg-green-800 transition-colors duration-200 gap-3"
                  >
                     <span>Run Code</span>
                     <FaPlay size={12} />
                  </button>
               </motion.div>
            )}
         </div>

         <div className="p-6 w-full overflow-x-auto">
            <CodeBlock
               code={codeLines}
               typingSpeed={40}
               initialDelay={0.5}
               onComplete={() => setIsTypingComplete(true)}
            />
         </div>
      </section>
   );
}
