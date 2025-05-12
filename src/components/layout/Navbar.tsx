
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <img src="/lovable-uploads/19300772-c85a-4599-8224-2bd0e4138d83.png" alt="Project Focus Logo" className="h-12 w-auto" />
              <span className="ml-2 text-xl font-bold text-brand-800">Project Focus</span>
            </NavLink>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                isActive ? "text-brand-600 font-medium" : "text-gray-600 hover:text-brand-600 transition-colors"
              }
              end
            >
              Home
            </NavLink>
            
            <div className="relative">
              <button 
                className="text-gray-600 hover:text-brand-600 transition-colors flex items-center gap-1"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <ChevronDown className="h-4 w-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg p-2">
                  <NavLink 
                    to="/services" 
                    className={({isActive}) => 
                      isActive ? "block px-4 py-2 text-brand-600 font-medium" : "block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                    }
                    end
                  >
                    All Services
                  </NavLink>
                  <NavLink 
                    to="/services/training" 
                    className={({isActive}) => 
                      isActive ? "block px-4 py-2 text-brand-600 font-medium" : "block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                    }
                  >
                    Training
                  </NavLink>
                  <NavLink 
                    to="/services/consulting" 
                    className={({isActive}) => 
                      isActive ? "block px-4 py-2 text-brand-600 font-medium" : "block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                    }
                  >
                    Consulting
                  </NavLink>
                  <NavLink 
                    to="/services/certification" 
                    className={({isActive}) => 
                      isActive ? "block px-4 py-2 text-brand-600 font-medium" : "block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                    }
                  >
                    Certification
                  </NavLink>
                  <NavLink 
                    to="/services/matchmaking" 
                    className={({isActive}) => 
                      isActive ? "block px-4 py-2 text-brand-600 font-medium" : "block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                    }
                  >
                    HR Matchmaking
                  </NavLink>
                </div>
              )}
            </div>
            
            <NavLink 
              to="/team" 
              className={({isActive}) => 
                isActive ? "text-brand-600 font-medium" : "text-gray-600 hover:text-brand-600 transition-colors"
              }
            >
              Our Team
            </NavLink>
            
            <NavLink 
              to="/clients" 
              className={({isActive}) => 
                isActive ? "text-brand-600 font-medium" : "text-gray-600 hover:text-brand-600 transition-colors"
              }
            >
              Client Portfolio
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                isActive ? "text-brand-600 font-medium" : "text-gray-600 hover:text-brand-600 transition-colors"
              }
            >
              Contact Us
            </NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-brand-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-white bg-brand-600"
                  : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
              }
              onClick={toggleMenu}
              end
            >
              Home
            </NavLink>
            
            <div>
              <button 
                className="w-full text-left px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 flex justify-between items-center"
                onClick={toggleServices}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {servicesOpen && (
                <div className="pl-4">
                  <NavLink 
                    to="/services" 
                    className={({isActive}) => 
                      isActive 
                        ? "block px-3 py-2 rounded-md text-white bg-brand-600"
                        : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
                    }
                    onClick={toggleMenu}
                    end
                  >
                    All Services
                  </NavLink>
                  <NavLink 
                    to="/services/training" 
                    className={({isActive}) => 
                      isActive 
                        ? "block px-3 py-2 rounded-md text-white bg-brand-600"
                        : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
                    }
                    onClick={toggleMenu}
                  >
                    Training
                  </NavLink>
                  <NavLink 
                    to="/services/consulting" 
                    className={({isActive}) => 
                      isActive 
                        ? "block px-3 py-2 rounded-md text-white bg-brand-600"
                        : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
                    }
                    onClick={toggleMenu}
                  >
                    Consulting
                  </NavLink>
                  <NavLink 
                    to="/services/certification" 
                    className={({isActive}) => 
                      isActive 
                        ? "block px-3 py-2 rounded-md text-white bg-brand-600"
                        : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
                    }
                    onClick={toggleMenu}
                  >
                    Certification
                  </NavLink>
                  <NavLink 
                    to="/services/matchmaking" 
                    className={({isActive}) => 
                      isActive 
                        ? "block px-3 py-2 rounded-md text-white bg-brand-600"
                        : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
                    }
                    onClick={toggleMenu}
                  >
                    HR Matchmaking
                  </NavLink>
                </div>
              )}
            </div>
            
            <NavLink 
              to="/team" 
              className={({isActive}) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-white bg-brand-600"
                  : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
              }
              onClick={toggleMenu}
            >
              Our Team
            </NavLink>
            
            <NavLink 
              to="/clients" 
              className={({isActive}) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-white bg-brand-600"
                  : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
              }
              onClick={toggleMenu}
            >
              Client Portfolio
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-white bg-brand-600"
                  : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
              }
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
