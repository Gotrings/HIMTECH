import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Award, Calendar, Clock, Lightbulb, Laptop, Globe, Code } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "President",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Sarah Kim",
      role: "Vice President",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Michael Wong",
      role: "Events Coordinator",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Jessica Patel",
      role: "Tech Lead",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col page-transition-enter">
      <Navbar />
      
      <header className="pt-28 pb-16 px-6 bg-gradient-to-b from-himtech-blue/5 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-3 rounded-full bg-himtech-lightBlue/10 mb-6 animate-fade-in">
            <img 
              src="/lovable-uploads/db36c826-889a-48b0-9bd1-6165fdf6dd90.png" 
              alt="HIMTECH Logo" 
              className="h-16 md:h-20 w-auto" 
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-himtech-blue mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            About&nbsp;
            <span className="text-himtech-blue">HIM</span>
            <span className="text-himtech-red">TECH</span>
          </h1>
          <p className="text-himtech-gray max-w-3xl mx-auto mb-12 text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            HIMTECH is a student-led technology organization dedicated to fostering innovation, learning, 
            and community among tech enthusiasts.
          </p>
        </div>
      </header>
      
      <main className="flex-grow">
        {/* Our Mission Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-3xl font-bold text-himtech-blue mb-6">Our Mission</h2>
                <p className="text-himtech-gray mb-6">
                  HIMTECH was founded with a clear mission: to create a vibrant community where technology enthusiasts can learn, 
                  collaborate, and grow together. We believe in the power of technology to transform lives and solve
                  real-world problems.
                </p>
                <p className="text-himtech-gray mb-6">
                  Through our events, workshops, and hackathons, we aim to provide hands-on learning experiences
                  that bridge the gap between theoretical knowledge and practical application. We strive to make
                  technology accessible to everyone, regardless of their background or experience level.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start">
                    <div className="rounded-lg bg-himtech-lightBlue/10 p-3 mr-4">
                      <Users className="h-6 w-6 text-himtech-lightBlue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-himtech-blue">Community</h3>
                      <p className="text-sm text-himtech-gray">Building connections</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-lg bg-himtech-lightBlue/10 p-3 mr-4">
                      <Lightbulb className="h-6 w-6 text-himtech-lightBlue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-himtech-blue">Innovation</h3>
                      <p className="text-sm text-himtech-gray">Encouraging creativity</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-lg bg-himtech-lightBlue/10 p-3 mr-4">
                      <Laptop className="h-6 w-6 text-himtech-lightBlue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-himtech-blue">Learning</h3>
                      <p className="text-sm text-himtech-gray">Continuous growth</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-lg bg-himtech-lightBlue/10 p-3 mr-4">
                      <Globe className="h-6 w-6 text-himtech-lightBlue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-himtech-blue">Impact</h3>
                      <p className="text-sm text-himtech-gray">Creating positive change</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-himtech-blue/20 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="HIMTECH Team Collaboration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-himtech-blue/80 to-transparent p-6 z-20">
                  <div className="flex items-center text-white">
                    <Award className="h-5 w-5 mr-2" />
                    <span className="font-medium">Established in 2018</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-himtech-blue/5 to-himtech-lightBlue/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-himtech-blue mb-6">Our Team</h2>
              <p className="text-himtech-gray max-w-2xl mx-auto">
                Meet the dedicated individuals who make HIMTECH possible. Our team works tirelessly to organize events, 
                create learning opportunities, and foster our technology community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name} 
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-medium text-lg text-himtech-blue mb-1">{member.name}</h3>
                    <p className="text-himtech-gray">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Events Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-himtech-blue mb-6">Our Events</h2>
              <p className="text-himtech-gray max-w-2xl mx-auto">
                We organize a variety of events throughout the year to bring together our community,
                share knowledge, and create opportunities for growth and collaboration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-gray-200 rounded-xl p-6 hover:border-himtech-lightBlue/50 transition-colors animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="rounded-lg bg-himtech-lightBlue/10 p-4 inline-flex mb-6">
                  <Code className="h-6 w-6 text-himtech-lightBlue" />
                </div>
                <h3 className="font-medium text-xl text-himtech-blue mb-4">Hackathons</h3>
                <p className="text-himtech-gray mb-6">
                  Intensive coding events where teams collaborate to build innovative solutions to real-world problems.
                </p>
                <div className="flex items-center space-x-6 text-sm text-himtech-gray mt-auto">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Quarterly</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>48 Hours</span>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-6 hover:border-himtech-lightBlue/50 transition-colors animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="rounded-lg bg-himtech-lightBlue/10 p-4 inline-flex mb-6">
                  <Laptop className="h-6 w-6 text-himtech-lightBlue" />
                </div>
                <h3 className="font-medium text-xl text-himtech-blue mb-4">Workshops</h3>
                <p className="text-himtech-gray mb-6">
                  Hands-on learning experiences covering various technology topics, from web development to AI.
                </p>
                <div className="flex items-center space-x-6 text-sm text-himtech-gray mt-auto">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Monthly</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>3-4 Hours</span>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-6 hover:border-himtech-lightBlue/50 transition-colors animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="rounded-lg bg-himtech-lightBlue/10 p-4 inline-flex mb-6">
                  <Users className="h-6 w-6 text-himtech-lightBlue" />
                </div>
                <h3 className="font-medium text-xl text-himtech-blue mb-4">Tech Talks</h3>
                <p className="text-himtech-gray mb-6">
                  Engaging presentations and panel discussions with industry experts and academics.
                </p>
                <div className="flex items-center space-x-6 text-sm text-himtech-gray mt-auto">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Bi-Monthly</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>2 Hours</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link 
                to="/gallery" 
                className="px-8 py-3 bg-himtech-blue text-white rounded-lg hover:bg-himtech-blue/90 transition-colors inline-flex items-center"
              >
                View Event Gallery
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
