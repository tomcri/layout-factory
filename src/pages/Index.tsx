
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';
import StepIndicator from '../components/StepIndicator';
import NewsCard from '../components/NewsCard';

const Index = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    steps: false,
    events: false,
    sponsors: false,
  });
  
  const stepsRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const sponsorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setIsVisible(prev => ({ ...prev, [id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (stepsRef.current) observer.observe(stepsRef.current);
    if (eventsRef.current) observer.observe(eventsRef.current);
    if (sponsorsRef.current) observer.observe(sponsorsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section h-screen flex items-center">
        <div className="container mx-auto px-4 hero-content">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              18 mai 2024
              <br />
              <span className="text-ecorun-green">Salomon EcoRun</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Au inceput inscrierile
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <button className="eco-btn">
                Inscriere
              </button>
              <button className="eco-btn-outline">
                Adauga in calendar
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Steps Section */}
      <section 
        id="steps" 
        ref={stepsRef} 
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`transition-all duration-500 ${isVisible.steps ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>
              <div className="flex items-center">
                <div className="step-number">01</div>
                <h2 className="ml-4 text-xl font-bold text-ecorun-green">
                  Au inceput 
                  <br />
                  inscrierile
                </h2>
              </div>
            </div>
            
            <div className={`transition-all duration-500 ${isVisible.steps ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.3s' }}>
              <div className="flex items-center">
                <div className="step-number">02</div>
                <h2 className="ml-4 text-xl font-bold text-ecorun-gray">
                  Adauga in
                  <br />
                  calendar
                </h2>
              </div>
            </div>
            
            <div className={`transition-all duration-500 ${isVisible.steps ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.5s' }}>
              <div className="flex items-center">
                <div className="step-number">03</div>
                <h2 className="ml-4 text-xl font-bold text-ecorun-gray">
                  Rezultate
                  <br />
                  si imagini
                </h2>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center">
            <div className="w-10 h-10 rounded-full bg-ecorun-green flex items-center justify-center text-white">
              1
            </div>
            <div className="step-line"></div>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white">
              2
            </div>
            <div className="step-line"></div>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white">
              3
            </div>
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section 
        id="events" 
        ref={eventsRef} 
        className="py-16 bg-ecorun-lightgray"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-ecorun-gray">Evenimente</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`transition-all duration-500 ${isVisible.events ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>
              <EventCard
                id="#1"
                title="CROSS"
                image="/lovable-uploads/20dcba5f-9768-44f9-9ea7-c090f4eed634.png"
                distance="7 km"
                elevation="180 m"
              />
            </div>
            
            <div className={`transition-all duration-500 ${isVisible.events ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.3s' }}>
              <EventCard
                id="#2"
                title="MARATON"
                image="/lovable-uploads/20dcba5f-9768-44f9-9ea7-c090f4eed634.png"
                distance="21 km"
                elevation="900 m"
              />
            </div>
            
            <div className={`transition-all duration-500 ${isVisible.events ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.5s' }}>
              <EventCard
                id="#3"
                title="KIDS"
                image="/lovable-uploads/20dcba5f-9768-44f9-9ea7-c090f4eed634.png"
                distance="500 m"
                elevation="7 m"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Sponsors Section */}
      <section 
        id="sponsors" 
        ref={sponsorsRef} 
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-ecorun-gray">Sponsori</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {Array.from({ length: 18 }).map((_, index) => (
              <div 
                key={index}
                className={`flex items-center justify-center transition-all duration-500 ${isVisible.sponsors ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
                style={{ transitionDelay: `${0.1 * (index % 6)}s` }}
              >
                <div className="sponsor-logo h-16 w-36 bg-gray-100 rounded flex items-center justify-center">
                  <div className="text-gray-400 font-medium">Sponsor {index + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Participants Section */}
      <section className="py-16 bg-ecorun-lightgray">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/20dcba5f-9768-44f9-9ea7-c090f4eed634.png" 
              alt="Participants" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ecorun-green/70 to-transparent flex items-center">
              <div className="p-8">
                <h2 className="text-4xl font-bold mb-4 text-white">PARTICIPANTI</h2>
                <button className="eco-btn">
                  <span className="flex items-center">
                    Inscriere <ArrowRight size={16} className="ml-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Volunteers & Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/20dcba5f-9768-44f9-9ea7-c090f4eed634.png" 
                alt="Volunteers" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="p-8 w-full">
                  <div className="mb-2 text-right">
                    <h2 className="text-3xl font-bold text-white">VOLUNTARI</h2>
                  </div>
                  <div className="text-right">
                    <button className="eco-btn">
                      <span className="flex items-center">
                        Inscriere <ArrowRight size={16} className="ml-1" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/20dcba5f-9768-44f9-9ea7-c090f4eed634.png" 
                alt="Gallery" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="p-8 w-full">
                  <div className="mb-2">
                    <h2 className="text-3xl font-bold text-white">GALERIE IMAGINI</h2>
                  </div>
                  <button className="eco-btn">
                    <span className="flex items-center">
                      Vizualizeaza <ArrowRight size={16} className="ml-1" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="py-16 bg-ecorun-lightgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-ecorun-gray">Stiri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <NewsCard
              date="12 APRILIE"
              title="Salomon brings to Salomon EcoRun 2024"
              image="/lovable-uploads/20dcba5f-9768-44f9-9ea7-c090f4eed634.png"
            />
            
            <NewsCard
              date="12 APRILIE"
              title="Rezultatele formează publicul și întrec limitele"
              image="/lovable-uploads/20dcba5f-9768-44f9-9ea7-c090f4eed634.png"
            />
            
            <NewsCard
              date="17 APRILIE"
              title="Modalitate Flower la Salomon EcoRun Maraton 2024"
              image="/lovable-uploads/20dcba5f-9768-44f9-9ea7-c090f4eed634.png"
            />
            
            <NewsCard
              date="17 APRILIE"
              title="Informații importante"
              image="/lovable-uploads/20dcba5f-9768-44f9-9ea7-c090f4eed634.png"
            />
          </div>
        </div>
      </section>
      
      {/* Footer & Newsletter */}
      <footer className="bg-ecorun-gray text-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">UTILE</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <li><a href="#" className="hover:text-ecorun-green transition-colors">GDPR</a></li>
              <li><a href="#" className="hover:text-ecorun-green transition-colors">Politica de Cookies</a></li>
              <li><a href="#" className="hover:text-ecorun-green transition-colors">Termeni si Conditii</a></li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">CONTACT</h2>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:info@ecorun.ro" className="hover:text-ecorun-green transition-colors">info@ecorun.ro</a>
                </li>
                <li>
                  <a href="tel:+40744000117" className="hover:text-ecorun-green transition-colors">+40 744 000 117</a>
                </li>
                <li>Str Horea nr.2</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">NEWSLETTER</h2>
              <form className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    placeholder="Adresa de email" 
                    className="eco-input w-full"
                  />
                </div>
                <button type="submit" className="eco-btn w-full sm:w-auto">
                  Get Started
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-600 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} EcoRun. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
