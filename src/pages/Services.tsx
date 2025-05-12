
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Services = () => {
  const { serviceType } = useParams();

  const renderServiceContent = () => {
    switch (serviceType) {
      case "training":
        return (
          <div>
            <div className="py-16 bg-brand-600">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white">Training Services</h1>
                <p className="text-xl text-blue-100 mt-4">
                  Comprehensive training programs designed to enhance skills and knowledge
                </p>
              </div>
            </div>
            
            <div className="container mx-auto px-4 py-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Elevate Your Team's Capabilities</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our training programs are designed to provide your team with the skills and knowledge they need to excel in today's competitive business environment. From technical skills to leadership development, we offer a wide range of training options to meet your specific needs.
                </p>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Customized Learning Paths</h3>
                    <p className="text-gray-600">
                      We create tailored training programs that align with your organization's goals and address specific skill gaps.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Expert Trainers</h3>
                    <p className="text-gray-600">
                      Our trainers are industry veterans with both theoretical knowledge and practical experience in their respective fields.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Flexible Delivery Options</h3>
                    <p className="text-gray-600">
                      Choose from in-person workshops, virtual live sessions, or self-paced online courses based on your team's preferences and schedules.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Measurable Results</h3>
                    <p className="text-gray-600">
                      We provide comprehensive assessments before and after training to measure progress and ensure learning objectives are met.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "consulting":
        return (
          <div>
            <div className="py-16 bg-brand-600">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white">Consulting Services</h1>
                <p className="text-xl text-blue-100 mt-4">
                  Strategic guidance and solutions for sustainable business growth
                </p>
              </div>
            </div>
            
            <div className="container mx-auto px-4 py-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Business with Expert Consulting</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our consulting services help businesses identify opportunities, overcome challenges, and implement effective strategies for sustainable growth. With our data-driven approach and industry expertise, we deliver tangible results that drive your business forward.
                </p>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Business Analysis</h3>
                    <p className="text-gray-600">
                      Comprehensive assessment of your current business operations, identifying strengths, weaknesses, and opportunities for improvement.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Strategy Development</h3>
                    <p className="text-gray-600">
                      Creation of tailored strategies that align with your business objectives and market conditions.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Process Optimization</h3>
                    <p className="text-gray-600">
                      Streamlining operations to improve efficiency, reduce costs, and enhance quality.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Implementation Support</h3>
                    <p className="text-gray-600">
                      Hands-on guidance during the implementation phase to ensure successful execution of recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "certification":
        return (
          <div>
            <div className="py-16 bg-brand-600">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white">Certification Programs</h1>
                <p className="text-xl text-blue-100 mt-4">
                  Industry-recognized credentials to validate professional competencies
                </p>
              </div>
            </div>
            
            <div className="container mx-auto px-4 py-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Validate Your Expertise with Recognized Certifications</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our certification programs provide professionals with industry-recognized credentials that validate their skills and knowledge. Whether you're looking to advance your career or ensure your team meets industry standards, our certification programs offer the validation you need.
                </p>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Preparation Courses</h3>
                    <p className="text-gray-600">
                      Comprehensive courses designed to prepare candidates for certification exams with focus on key concepts and exam-specific strategies.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Examination Services</h3>
                    <p className="text-gray-600">
                      Authorized testing facilities and proctoring services for a wide range of industry certifications.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Corporate Certification Programs</h3>
                    <p className="text-gray-600">
                      Customized certification paths for organizations looking to upskill their workforce and ensure standardized competencies.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Continuous Education</h3>
                    <p className="text-gray-600">
                      Ongoing learning opportunities to maintain certifications and stay current with industry developments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "matchmaking":
        return (
          <div>
            <div className="py-16 bg-brand-600">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white">HR Matchmaking</h1>
                <p className="text-xl text-blue-100 mt-4">
                  Connecting businesses with the right talent for sustainable growth
                </p>
              </div>
            </div>
            
            <div className="container mx-auto px-4 py-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Find the Perfect Talent Match for Your Business</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our HR matchmaking service goes beyond traditional recruitment by focusing on long-term compatibility between candidates and companies. We consider not only skills and experience but also cultural fit, values alignment, and growth potential to ensure successful placements.
                </p>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Comprehensive Talent Assessment</h3>
                    <p className="text-gray-600">
                      In-depth evaluation of candidates' skills, experience, work style, and career aspirations to ensure the right match.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Organizational Culture Analysis</h3>
                    <p className="text-gray-600">
                      Assessment of your company's values, work environment, and team dynamics to find candidates who will thrive within your organization.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Flexible Engagement Models</h3>
                    <p className="text-gray-600">
                      Options for permanent placement, contract-to-hire, or project-based engagements based on your specific needs.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-brand-700 mb-3">Post-Placement Support</h3>
                    <p className="text-gray-600">
                      Ongoing support to ensure smooth integration and long-term success of placed candidates within your organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div>
            <div className="py-16 bg-gradient-to-r from-brand-800 to-brand-600">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white">Our Services</h1>
                <p className="text-xl text-blue-100 mt-4">
                  Comprehensive solutions tailored to meet your business needs
                </p>
              </div>
            </div>
            
            <div className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-16 w-16 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Training</h2>
                  <p className="text-gray-600 mb-6">Our comprehensive training programs are designed to enhance skills and knowledge across various business domains, delivered by industry experts with practical experience.</p>
                  <a href="/services/training" className="text-brand-600 font-medium hover:text-brand-700 flex items-center">
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-16 w-16 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Consulting</h2>
                  <p className="text-gray-600 mb-6">Our consulting services provide strategic guidance and practical solutions to help businesses overcome challenges and achieve sustainable growth in today's competitive market.</p>
                  <a href="/services/consulting" className="text-brand-600 font-medium hover:text-brand-700 flex items-center">
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-16 w-16 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Certification</h2>
                  <p className="text-gray-600 mb-6">Our certification programs provide professionals with industry-recognized credentials that validate their skills and knowledge, enhancing career opportunities and demonstrating expertise.</p>
                  <a href="/services/certification" className="text-brand-600 font-medium hover:text-brand-700 flex items-center">
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-16 w-16 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">HR Matchmaking</h2>
                  <p className="text-gray-600 mb-6">Our HR matchmaking service connects businesses with the right talent, focusing on skills, experience, cultural fit, and long-term compatibility to ensure successful placements.</p>
                  <a href="/services/matchmaking" className="text-brand-600 font-medium hover:text-brand-700 flex items-center">
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {renderServiceContent()}
      </main>
      <Footer />
    </div>
  );
};

export default Services;
