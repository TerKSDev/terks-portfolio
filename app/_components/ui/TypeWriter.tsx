'use client';
import { motion } from 'framer-motion';

interface EffectProps {
   text: string;
   className?: string;
   delay?: number;
}

const letterAnimation = {
   hidden: { opacity: 0 },
   visible: { opacity: 1 },
};

export default function TypeWriterEffect({
   text,
   className = '',
   delay = 0,
}: EffectProps) {
   const letters = text.split('');

   return (
      <motion.span
         className={`inline-block ${className}`}
         initial="hidden"
         animate="visible"
         transition={{
            staggerChildren: 0.05,
            delayChildren: delay,
         }}
      >
         {letters.map((letter, index) => (
            <motion.span key={index} variants={letterAnimation}>
               {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
         ))}
      </motion.span>
   );
}
