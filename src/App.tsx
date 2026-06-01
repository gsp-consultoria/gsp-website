import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Hero } from './components/sections/Hero';
import { Process } from './components/sections/Process';
import { Services } from './components/sections/Services';
import { Technologies } from './components/sections/Technologies';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
