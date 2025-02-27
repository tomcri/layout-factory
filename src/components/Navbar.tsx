
import { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/20dcba5f-9768-44f9-9ea7-c090f4eed634.png" 
              alt="EcoRun Logo" 
              className="h-10 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-ecorun-gray' : 'text-white'} hover:text-ecorun-green transition-colors`}>
                <span>Inscrieri</span>
                <ChevronDown size={16} />
              </button>
            </div>
            
            <div className="relative">
              <button className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-ecorun-gray' : 'text-white'} hover:text-ecorun-green transition-colors`}>
                <span>Participanti</span>
                <ChevronDown size={16} />
              </button>
            </div>
            
            <div className="relative">
              <button className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-ecorun-gray' : 'text-white'} hover:text-ecorun-green transition-colors`}>
                <span>Voluntari</span>
                <ChevronDown size={16} />
              </button>
            </div>
            
            <div className="relative">
              <button className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-ecorun-gray' : 'text-white'} hover:text-ecorun-green transition-colors`}>
                <span>Informatii</span>
                <ChevronDown size={16} />
              </button>
            </div>
            
            <div className="relative">
              <button className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-ecorun-gray' : 'text-white'} hover:text-ecorun-green transition-colors`}>
                <span>Galerie</span>
                <ChevronDown size={16} />
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className={`${isScrolled ? 'text-ecorun-gray' : 'text-white'} hover:text-ecorun-green transition-colors`}>
                <Search size={20} />
              </button>
              <button className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-ecorun-gray' : 'text-white'} hover:text-ecorun-green transition-colors`}>
                <span>EN</span>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-ecorun-gray"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
              <span className="font-medium">Inscrieri</span>
              <ChevronDown size={16} />
            </button>
            
            <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
              <span className="font-medium">Participanti</span>
              <ChevronDown size={16} />
            </button>
            
            <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
              <span className="font-medium">Voluntari</span>
              <ChevronDown size={16} />
            </button>
            
            <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
              <span className="font-medium">Informatii</span>
              <ChevronDown size={16} />
            </button>
            
            <button className="flex items-center justify-between w-full py-2 border-b border-gray-100">
              <span className="font-medium">Galerie</span>
              <ChevronDown size={16} />
            </button>
            
            <div className="flex items-center justify-between pt-2">
              <button className="text-ecorun-gray">
                <Search size={20} />
              </button>
              <button className="flex items-center font-medium">
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
