'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
   return (
      <nav className="flex flex-row gap-8 text-md min-w-fit items-center font-medium text-slate-300 font-jetbrains">
         <Link href="/" className="py-1 hover:text-cyan-400">
            01. About Me
         </Link>
         <Link href="/" className="py-1 hover:text-cyan-400">
            02. Projects
         </Link>
         <Link href="/" className="py-1 hover:text-cyan-400">
            03. Contact
         </Link>
      </nav>
   );
}
