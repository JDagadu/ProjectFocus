
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Team = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
      bio: 'With over 20 years of experience in business consulting and leadership, John founded Project Focus with a vision to help organizations maximize their potential through targeted professional development and strategic consulting.',
      education: 'MBA, Harvard Business School',
      expertise: ['Strategic Planning', 'Organizational Development', 'Executive Leadership']
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Training',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces',
      bio: 'Sarah brings over 15 years of experience in corporate training and development. She specializes in designing innovative educational programs that bridge skill gaps and drive measurable performance improvements.',
      education: 'Ph.D. in Organizational Psychology, Stanford University',
      expertise: ['Instructional Design', 'Learning & Development', 'Performance Management']
    },
    {
      name: 'Michael Chen',
      role: 'Senior Consultant',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces',
      bio: 'Michael has consulted for Fortune 500 companies across various industries, helping them optimize their operations and implement strategic initiatives that drive growth and innovation.',
      education: 'MS in Business Analytics, MIT',
      expertise: ['Process Optimization', 'Data Analytics', 'Change Management']
    },
    {
      name: 'Emily Rodriguez',
      role: 'HR Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
      bio: "Emily has a proven track record in talent acquisition and management. Her approach to HR matchmaking focuses on finding the perfect alignment between candidates' skills and companies' cultural and technical needs.",
      education: 'BA in Human Resources, Cornell University',
      expertise: ['Talent Acquisition', 'Organizational Culture', 'Employee Development']
    },
    {
      name: 'David Wilson',
      role: 'Certification Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces',
      bio: 'David oversees our certification programs, ensuring they meet industry standards and provide real value to professionals seeking to validate their skills and knowledge.',
      education: 'MS in Education, University of Pennsylvania',
      expertise: ['Assessment Development', 'Certification Standards', 'Professional Development']
    },
    {
      name: 'Lisa Zhang',
      role: 'Client Relations Manager',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces',
      bio: 'Lisa ensures our clients receive exceptional service from initial contact through project completion. She works closely with all departments to coordinate seamless delivery of our services.',
      education: 'BA in Business Administration, UCLA',
      expertise: ['Account Management', 'Client Success', 'Project Coordination']
    },
    {
      name: 'Robert Taylor',
      role: 'Financial Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
      bio: 'Robert manages our financial operations, ensuring fiscal responsibility and sustainable growth as we continue to expand our service offerings and market reach.',
      education: 'MBA in Finance, Wharton School of Business',
      expertise: ['Financial Planning', 'Risk Management', 'Strategic Investment']
    },
    {
      name: 'Sophia Martinez',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces',
      bio: 'Sophia leads our marketing initiatives, developing strategies that effectively communicate our value proposition and establish Project Focus as a thought leader in the industry.',
      education: 'MA in Marketing, Columbia University',
      expertise: ['Brand Development', 'Content Strategy', 'Digital Marketing']
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-brand-600">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white">Our Team</h1>
            <p className="text-xl text-blue-100 mt-4">
              Meet the experts behind Project Focus
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dedicated Professionals</h2>
              <p className="text-lg text-gray-600">
                Our team brings together decades of experience across various industries and disciplines. 
                We're united by a passion for helping businesses and individuals achieve their full potential 
                through professional development, strategic guidance, and the right connections.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-brand-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500">Education:</p>
                      <p className="text-gray-800">{member.education}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Areas of Expertise:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {member.expertise.map((skill, i) => (
                          <span 
                            key={i} 
                            className="bg-brand-50 text-brand-700 text-xs px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Join Our Team</h2>
                <p className="text-gray-600 mb-6">
                  We're always looking for talented individuals to join our team. If you're passionate about 
                  helping businesses and professionals reach their full potential, we'd love to hear from you.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-brand-600 text-white py-2 px-6 rounded-md hover:bg-brand-700 transition-colors"
                >
                  View Open Positions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
