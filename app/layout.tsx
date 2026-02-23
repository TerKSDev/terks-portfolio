import type { Metadata } from 'next';
import { Geist, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

//* Used for Body Text and Paragraphs
const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
});

//* Used for Headers and Titles
const outfit = Outfit({
   variable: '--font-outfit',
   subsets: ['latin'],
});

//* Used for Technical Label and Codes
const jetBrainsMono = JetBrains_Mono({
   variable: '--font-jetbrains-mono',
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: 'TerKS.Dev Portfolio',
   description:
      'Crafting digital experiences with code and creativity. Explore my journey as a full-stack developer, showcasing projects, skills, and insights into the world of web development.',
   openGraph: {
      title: 'TerKS.Dev Portfolio',
      description:
         'Crafting digital experiences with code and creativity. Explore my journey as a full-stack developer, showcasing projects, skills, and insights into the world of web development.',
      url: 'https://terks-portfolio.vercel.app',
      siteName: 'TerKS.Dev Portfolio',
      images: [
         {
            url: '/terksdev.jpeg',
         },
      ],
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${geistSans.variable} ${outfit.variable} ${jetBrainsMono.variable} antialiased `}
         >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none z-9"></div>
            {children}
         </body>
      </html>
   );
}
