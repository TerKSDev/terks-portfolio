'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
   const navButton = [
      {
         name: '01. About Me',
         id: 'introduction',
      },
      {
         name: '02. Statistics',
         id: 'statistics',
      },
      {
         name: '03. Projects',
         id: 'projects',
      },
      {
         name: '04. Contact',
         id: 'contact',
      },
   ];
   const handleOnClick = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <nav className="flex flex-row gap-8 z-40 text-md min-w-fit items-center font-medium text-slate-300 font-jetbrains">
         {navButton.map((button) => (
            <button
               key={button.id}
               onClick={() => handleOnClick(button.id)}
               className="py-1 hover:text-cyan-400 z-50 cursor-pointer transition-colors duration-300"
            >
               {button.name}
            </button>
         ))}
      </nav>
   );
}
