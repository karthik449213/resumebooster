import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ResumeImprover } from '@/components/ResumeImprover';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Home Section */}
        <section id="home" className="py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <ResumeImprover />
          </div>
        </section>

        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
