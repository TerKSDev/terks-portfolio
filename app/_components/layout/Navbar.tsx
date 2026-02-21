'use client';

interface NavbarProps {
   activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
   const navButton = [
      {
         name: '00. Home',
         id: 'home',
      },
      {
         name: '01. Introduction',
         id: 'introduction',
      },
      {
         name: '02. Projects',
         id: 'projects',
      },
      {
         name: '03. Contact',
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
         {navButton
            .filter((button) => button.name !== '00. Home')
            .map((button) => {
               const isActive = activeSection === button.id;
               return (
                  <button
                     key={button.id}
                     onClick={() => handleOnClick(button.id)}
                     className={`py-1 hover:text-cyan-400 z-50 cursor-pointer transition-colors duration-300 ${
                        isActive ? 'text-cyan-400' : ''
                     }`}
                  >
                     {button.name}
                  </button>
               );
            })}
      </nav>
   );
}
