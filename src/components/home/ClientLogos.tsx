
const ClientLogos = () => {
  // Placeholder client logos
  const clients = [
    { name: 'Client 1', logo: 'https://via.placeholder.com/150x50?text=Client+1' },
    { name: 'Client 2', logo: 'https://via.placeholder.com/150x50?text=Client+2' },
    { name: 'Client 3', logo: 'https://via.placeholder.com/150x50?text=Client+3' },
    { name: 'Client 4', logo: 'https://via.placeholder.com/150x50?text=Client+4' },
    { name: 'Client 5', logo: 'https://via.placeholder.com/150x50?text=Client+5' },
    { name: 'Client 6', logo: 'https://via.placeholder.com/150x50?text=Client+6' },
  ];
  
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Leading Organizations</h2>
          <p className="text-gray-600">We're proud to collaborate with these amazing companies</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
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
  );
};

export default ClientLogos;
