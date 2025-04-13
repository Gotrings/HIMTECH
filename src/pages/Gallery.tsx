import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StoryCard from '@/components/StoryCard';
import { Search, Filter } from 'lucide-react';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const stories = [
    {
      id: 1,
      image: "./pict/P1010039.JPG",
      title: "MICO 2024",
      date: "1 September 2024",
      category: "event",
      description: "Day 1."
    },
    {
      id: 2,
      image: "./pict/IMG20240901125053.jpg",
      title: "Himpunan Games",
      date: "1 September 2024",
      category: "event",
      description: "Foto Bersama."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: "Innovation Hackathon",
      date: "October 5, 2023",
      category: "hackathon",
      description: "Teams collaborating on creative solutions during our 48-hour innovation challenge."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "Web Development Workshop",
      date: "July 22, 2023",
      category: "workshop",
      description: "Learning modern web development techniques with hands-on practice sessions."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "AI Research Presentation",
      date: "September 3, 2023",
      category: "presentation",
      description: "Faculty and students presenting their latest research in artificial intelligence."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      title: "Women in Tech Panel",
      date: "December 12, 2023",
      category: "event",
      description: "Celebrating diversity in tech with inspiring stories from women leaders in the industry."
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: "Robotics Competition",
      date: "October 25, 2023",
      category: "competition",
      description: "Students showcasing their engineering skills in our annual robotics competition."
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "Mobile App Development",
      date: "June 8, 2023",
      category: "workshop",
      description: "Creating innovative mobile applications during our intensive development workshops."
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "Tech Career Fair",
      date: "February 15, 2023",
      category: "event",
      description: "Connecting students with industry professionals and employment opportunities."
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'event', label: 'Events' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'presentation', label: 'Presentations' },
    { id: 'competition', label: 'Competitions' }
  ];

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          story.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || story.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen flex flex-col page-transition-enter">
      <Navbar />
      
      <header className="pt-28 pb-16 px-6 bg-gradient-to-b from-himtech-blue/5 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-himtech-blue mb-6 animate-fade-in">
            Photo Gallery
          </h1>
          <p className="text-himtech-gray max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Explore our collection of memories from HIMTECH events, workshops, hackathons, and community gatherings.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-himtech-lightBlue/50"
              />
            </div>
            
            <div className="relative flex items-center justify-center">
              <Filter className="h-5 w-5 text-himtech-blue mr-2" />
              <span className="text-himtech-blue font-medium">Filter:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center mt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-himtech-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </header>
      
      <main className="flex-grow py-10 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, index) => (
                <StoryCard
                  key={story.id}
                  image={story.image}
                  title={story.title}
                  description={story.description}
                  date={story.date}
                  delay={index % 9}
                  className="aspect-[4/3] h-auto"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium text-himtech-blue mb-2">No stories found</h3>
              <p className="text-himtech-gray">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
