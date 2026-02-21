'use client';

import { motion } from 'framer-motion';

export function LeftSlideInEffect(
   { children }: { children: React.ReactNode },
   { delay = 0 }: { delay?: number },
) {
   return (
      <motion.div
         initial={{ opacity: 0, x: -500 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1, ease: 'easeOut' }}
      >
         {children}
      </motion.div>
   );
}

export function RightSlideInEffect(
   {
      children,
   }: {
      children: React.ReactNode;
   },
   { delay = 0 }: { delay?: number },
) {
   return (
      <motion.div
         initial={{ opacity: 0, x: 1000 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1, ease: 'easeOut', delayChildren: delay }}
      >
         {children}
      </motion.div>
   );
}
