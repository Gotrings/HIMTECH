import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import StoryCard from '@/components/StoryCard';

const Index = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const featuredStories = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
            title: "Tech Summit 2023",
            date: "November 15, 2023",
            description: "Our annual technology summit bringing together innovators and leaders in the tech industry."
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
            title: "Coding Workshop",
            date: "August 10, 2023",
            description: "Students learning advanced programming techniques during our hands-on coding workshops."
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
            title: "Innovation Hackathon",
            date: "October 5, 2023",
            description: "Teams collaborating on creative solutions during our 48-hour innovation challenge."
        }
    ];

    const upcomingEvent = {
        title: "MICO HIMTECH 2025",
        date: "Upcoming - 2025",
        time: "Upcoming",
        location: "Upcoming",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    };

    return (
        <div className="min-h-screen flex flex-col overflow-hidden page-transition-enter">
            <Navbar />
            <Hero
                title={
                    <>
                        <span className="text-himtech-blue">HIM</span>
                        <span className="text-himtech-red">TECH</span>
                    </>
                }
                subtitle="Capturing moments of innovation, learning, and connection from our technology community."
            />

            <main className="flex-grow">
                {/* Featured Stories Section */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-himtech-blue mb-4">
                                    Featured Stories
                                </h2>
                                <p className="text-himtech-gray max-w-2xl">
                                    Explore memorable moments from our recent events, workshops, and community gatherings.
                                </p>
                            </div>
                            <Link
                                to="/gallery"
                                className="inline-flex items-center mt-6 md:mt-0 text-himtech-blue hover:text-himtech-lightBlue transition-colors group"
                            >
                                <span className="story-link">View All Stories</span>
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredStories.map((story, index) => (
                                <StoryCard
                                    key={story.id}
                                    image={story.image}
                                    title={story.title}
                                    description={story.description}
                                    date={story.date}
                                    delay={index}
                                    className="aspect-[4/5] h-auto"
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Upcoming Event Section */}
                <section className="py-20 px-6 bg-gradient-to-r from-himtech-blue/5 to-himtech-lightBlue/5">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-himtech-blue mb-12 text-center">
                            Upcoming Event
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            <div className="lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                                    <img
                                        src={upcomingEvent.image}
                                        alt={upcomingEvent.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            <div className="lg:order-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                                <h3 className="text-2xl md:text-3xl font-bold text-himtech-blue mb-4">
                                    {upcomingEvent.title}
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <Calendar className="h-5 w-5 text-himtech-lightBlue mr-3 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Date</p>
                                            <p className="text-himtech-gray">{upcomingEvent.date}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Clock className="h-5 w-5 text-himtech-lightBlue mr-3 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Time</p>
                                            <p className="text-himtech-gray">{upcomingEvent.time}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <MapPin className="h-5 w-5 text-himtech-lightBlue mr-3 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Location</p>
                                            <p className="text-himtech-gray">{upcomingEvent.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/event-register" className="px-6 py-3 bg-himtech-blue text-white rounded-lg hover:bg-himtech-blue/90 transition-colors inline-flex items-center group">
                                    Register Now
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Index;