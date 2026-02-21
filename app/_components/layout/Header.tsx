import Navbar from '@/app/_components/layout/Navbar';
import Link from 'next/link';

export default function Header() {
   return (
      <header className="fixed flex flex-row justify-between items-center top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-sm px-8 py-2">
         <Link
            href="/"
            className="flex flex-row gap-1 text-2xl w-full items-center h-16"
         >
            <h1 className="text-cyan-400 font-medium">{'<'}</h1>
            <h1 className="font-semibold tracking-wider">TerKS.Dev</h1>
            <h1 className="text-cyan-400 font-medium">&nbsp;{' />'}</h1>
         </Link>

         <Navbar />
      </header>
   );
}
