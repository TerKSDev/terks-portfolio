import Image from 'next/image';

export default function IntroductionSection() {
   return (
      <section className="flex flex-col w-full p-4 px-12 justify-start">
         <div className="flex flex-row items-center font-jetbrains gap-8">
            <div className="flex flex-row items-center h-fit min-w-fit min-h-fit tracking-wider">
               <h1 className="text-2xl text-cyan-400 mr-2">{'>'}</h1>
               <h1 className="text-3xl font-semibold text-slate-100">
                  ABOUT ME
               </h1>
               <h1 className="text-2xl ml-1 text-cyan-400 animate-pulse">
                  {'_'}
               </h1>
            </div>

            <div className="max-h-px flex-1 border-b border-slate-600/80"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="relative bg-linear-to-br from-cyan-400 to-purple-400 w-full h-full flex items-center justify-center rounded-md">
               <div className="relative w-[100%-4px] h-[100%-4px] rounded-sm overflow-hidden">
                  <Image src="/terksdev.jpeg" alt="TerKSDev" fill />
               </div>
            </div>

            <div className="">
               <h1>Introduction</h1>
               <p>
                  Hello there! I'm{' '}
                  <span className="text-cyan-400">Ter Kean Sen</span>. I'm a
                  Full-Stack Developer specializing in modern web systems
                  architectures and technologies.
               </p>
               <p>
                  I'm passionate about creating seamless and modern digital
                  experiences. Whether it's{' '}
                  <span className="text-cyan-400 pb-2">
                     building interactive interfaces
                  </span>{' '}
                  with Next.js or{' '}
                  <span className="underline underline-offset-[6px] ">
                     managing powerful cloud
                  </span>{' '}
                  deployments on AWS, I enjoy bringing ideas to life with clean
                  and efficiency code.
               </p>
            </div>
         </div>
      </section>
   );
}
