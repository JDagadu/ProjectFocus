
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Clients = () => {
  // Placeholder client data
  const featuredClients = [
    { 
      name: 'Tech Innovators Inc.', 
      logo: 'https://via.placeholder.com/150x150?text=Tech+Innovators', 
      industry: 'Technology',
      services: ['Training', 'HR Matchmaking'],
      testimonial: "Project Focus helped us build a comprehensive training program that significantly improved our team's productivity and innovation capabilities.",
      contactPerson: 'Jane Smith, CTO'
    },
    { 
      name: 'Global Finance Group', 
      logo: 'https://via.placeholder.com/150x150?text=Global+Finance', 
      industry: 'Finance',
      services: ['Consulting', 'Certification'],
      testimonial: 'The strategic consulting provided by Project Focus was instrumental in our successful digital transformation initiative.',
      contactPerson: 'Michael Brown, COO'
    },
    { 
      name: 'Healthcare Solutions', 
      logo: 'https://via.placeholder.com/150x150?text=Healthcare+Solutions', 
      industry: 'Healthcare',
      services: ['Training', 'Consulting'],
      testimonial: 'Project Focus delivered tailored training programs that helped our staff adapt to new regulatory requirements while improving patient care.',
      contactPerson: 'Dr. Elizabeth Chen, Director of Operations'
    },
    { 
      name: 'Retail Innovations', 
      logo: 'https://via.placeholder.com/150x150?text=Retail+Innovations', 
      industry: 'Retail',
      services: ['HR Matchmaking', 'Training'],
      testimonial: 'The HR matchmaking service from Project Focus helped us find qualified professionals who aligned perfectly with our company culture and vision.',
      contactPerson: 'Robert Johnson, HR Director'
    },
    { 
      name: 'Manufacturing Excellence', 
      logo: 'https://via.placeholder.com/150x150?text=Manufacturing+Excellence', 
      industry: 'Manufacturing',
      services: ['Consulting', 'Certification'],
      testimonial: 'With the help of Project Focus, we optimized our manufacturing processes and achieved industry certification, resulting in significant cost savings.',
      contactPerson: 'Sarah Williams, Production Manager'
    },
    { 
      name: 'EduTech Solutions', 
      logo: 'https://via.placeholder.com/150x150?text=EduTech+Solutions', 
      industry: 'Education',
      services: ['Training', 'Consulting'],
      testimonial: 'Project Focus understood our unique challenges and provided innovative solutions that helped us enhance our educational programs.',
      contactPerson: 'David Miller, Academic Director'
    }
  ];
  
  const clientLogos = [
    { name: 'Client 1', logo: 'https://via.placeholder.com/150x50?text=Client+1' },
    { name: 'Client 2', logo: 'https://via.placeholder.com/150x50?text=Client+2' },
    { name: 'Client 3', logo: 'https://via.placeholder.com/150x50?text=Client+3' },
    { name: 'Client 4', logo: 'https://via.placeholder.com/150x50?text=Client+4' },
    { name: 'Client 5', logo: 'https://via.placeholder.com/150x50?text=Client+5' },
    { name: 'Client 6', logo: 'https://via.placeholder.com/150x50?text=Client+6' },
    { name: 'Client 7', logo: 'https://via.placeholder.com/150x50?text=Client+7' },
    { name: 'Client 8', logo: 'https://via.placeholder.com/150x50?text=Client+8' },
    { name: 'Client 9', logo: 'https://via.placeholder.com/150x50?text=Client+9' },
    { name: 'Client 10', logo: 'https://via.placeholder.com/150x50?text=Client+10' },
    { name: 'Client 11', logo: 'https://via.placeholder.com/150x50?text=Client+11' },
    { name: 'Client 12', logo: 'https://via.placeholder.com/150x50?text=Client+12' }
  ];
  
  const industries = [
    'Technology', 
    'Finance', 
    'Healthcare', 
    'Manufacturing', 
    'Retail', 
    'Education', 
    'Hospitality',
    'Transportation',
    'Energy',
    'Telecommunications'
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-brand-600">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white">Client Portfolio</h1>
            <p className="text-xl text-blue-100 mt-4">
              Trusted by leading organizations across industries
            </p>
          </div>
        </section>
        
        {/* Featured Clients */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Clients</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredClients.map((client, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="h-16 w-16 bg-gray-100 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                        <p className="text-brand-600">{client.industry}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {client.services.map((service, i) => (
                        <span 
                          key={i} 
                          className="bg-brand-50 text-brand-700 text-xs px-3 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    
                    <blockquote className="italic text-gray-600 mb-4 flex-grow">
                      "{client.testimonial}"
                    </blockquote>
                    
                    <p className="text-sm text-gray-500 font-medium">{client.contactPerson}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Client Logos */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Clients</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {clientLogos.map((client, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-12 w-auto" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Industries Served */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industries We Serve</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all"
                >
                  <p className="text-gray-800 font-medium">{industry}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Don't see your industry? No problem! Our services are adaptable to meet the unique needs of any business.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-brand-600 text-white py-2 px-6 rounded-md hover:bg-brand-700 transition-colors"
              >
                Contact Us to Learn More
              </a>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default Clients;
