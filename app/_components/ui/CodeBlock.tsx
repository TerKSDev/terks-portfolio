'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type CodeToken = {
   text: string;
   className?: string;
};

export type CodeLine = CodeToken[];

interface CodeBlockProps {
   code: CodeLine[];
   typingSpeed?: number; // ms per character
   initialDelay?: number; // seconds
   onComplete?: () => void;
}

// A reusable cursor component with a blinking animation
const Cursor = ({ isComplete = false }: { isComplete?: boolean }) => (
   <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
      className={`inline-block w-0.5 h-4.25 align-middle ml-1 mb-px ${
         isComplete ? 'bg-zinc-500' : 'bg-cyan-400'
      }`}
   />
);

export default function CodeBlock({
   code,
   typingSpeed = 50,
   initialDelay = 0.5,
   onComplete,
}: CodeBlockProps) {
   const [progress, setProgress] = useState({ line: 0, token: 0, char: 0 });
   const [isComplete, setIsComplete] = useState(false);
   const [isStarted, setIsStarted] = useState(false);

   useEffect(() => {
      if (isComplete && onComplete) {
         onComplete();
      }
   }, [isComplete, onComplete]);

   useEffect(() => {
      let timeoutId: NodeJS.Timeout;

      const typeNextChar = () => {
         setProgress((prev) => {
            const currentLine = code[prev.line];

            // End of code
            if (!currentLine) {
               setIsComplete(true);
               return prev;
            }

            // Handle empty line
            if (currentLine.length === 0) {
               return { line: prev.line + 1, token: 0, char: 0 };
            }

            const currentToken = currentLine[prev.token];

            // End of line
            if (!currentToken) {
               return { line: prev.line + 1, token: 0, char: 0 };
            }

            // End of token
            if (prev.char >= currentToken.text.length) {
               return { line: prev.line, token: prev.token + 1, char: 0 };
            }

            // Next char
            return { ...prev, char: prev.char + 1 };
         });
      };

      if (!isStarted) {
         timeoutId = setTimeout(() => {
            setIsStarted(true);
            typeNextChar();
         }, initialDelay * 1000);
      } else if (!isComplete) {
         timeoutId = setTimeout(typeNextChar, typingSpeed);
      }

      return () => clearTimeout(timeoutId);
   }, [progress, isStarted, isComplete, code, typingSpeed, initialDelay]);

   // Compute displayed lines based on progress
   const displayedLines = code.map((line, lineIdx) => {
      if (lineIdx > progress.line)
         return line.map((t) => ({ ...t, text: '' }));
      if (lineIdx < progress.line) return line;

      // Current line
      return line.map((token, tokenIdx) => {
         if (tokenIdx > progress.token) return { ...token, text: '' };
         if (tokenIdx < progress.token) return token;

         // Current token
         return {
            ...token,
            text: token.text.slice(0, progress.char),
         };
      });
   });

   return (
      <code className="gap-1 text-slate-300 font-jetbrains font-semibold text-sm leading-loose block">
         {displayedLines.map((line, lineIdx) => {
            const isCurrentLine = lineIdx === progress.line;
            const isLastLine = lineIdx === code.length - 1;
            const isPastOrCurrentLine =
               lineIdx <= progress.line || isComplete;

            if (!isPastOrCurrentLine) return null;

            return (
               <div
                  key={lineIdx}
                  className="block min-h-[1.5em] whitespace-pre-wrap"
               >
                  {line.length > 0
                     ? line.map((token, tokenIdx) => (
                          <span key={tokenIdx} className={token.className}>
                             {token.text}
                             {isCurrentLine &&
                                tokenIdx === progress.token &&
                                !isComplete && <Cursor />}
                          </span>
                       ))
                     : <span>
                          {isCurrentLine && !isComplete
                             ? <Cursor />
                             : '\u00A0'}
                       </span>}
                  {isComplete && isLastLine && <Cursor isComplete />}
               </div>
            );
         })}
      </code>
   );
}
