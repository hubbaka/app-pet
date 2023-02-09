import Image from 'next/image';
import { Inter } from '@next/font/google';
import HeroSection from '@/components/HeroSection';
import HeaderSection from '@/components/HeaderSection';
import ContentSection from '@/components/ContentSection';
import PersSection from '@/components/PersSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <div className="container my-24 px-6 mx-auto">
        <HeaderSection />
        <HeroSection />
        <ContentSection />
        <PersSection />
      </div>
    </main>
  );
}
