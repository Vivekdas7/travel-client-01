import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About WanderIndia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in exploring the incredible beauty and rich culture of India
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, WanderIndia has been at the forefront of providing exceptional 
                travel experiences across India. Our passion for showcasing the diverse landscapes, 
                rich heritage, and vibrant cultures of our incredible nation drives everything we do.
              </p>
              <p className="text-gray-600 mb-4">
                From the snow-capped peaks of the Himalayas to the serene backwaters of Kerala, 
                from spiritual pilgrimages to adventurous treks, we have curated experiences that 
                create lasting memories for travelers from around the world.
              </p>
              <p className="text-gray-600">
                With over 500 satisfied travelers and countless unforgettable journeys, we continue 
                to set new standards in travel excellence and customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Travel team"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Expert Knowledge</h3>
            <p className="text-gray-600">Deep understanding of local cultures and hidden gems</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Personalized Service</h3>
            <p className="text-gray-600">Tailored experiences to match your preferences</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Assurance</h3>
            <p className="text-gray-600">Highest standards in accommodation and services</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Passionate Team</h3>
            <p className="text-gray-600">Dedicated professionals who love what they do</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide authentic, safe, and memorable travel experiences that showcase the true 
              essence of India while supporting local communities and preserving our natural and 
              cultural heritage.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become India's most trusted travel partner, known for exceptional service, 
              sustainable tourism practices, and creating transformative journeys that inspire 
              a deeper connection with our incredible country.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Rahul Sharma"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Rahul Sharma</h3>
              <p className="text-blue-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                With 15 years in the travel industry, Rahul founded WanderIndia with a vision 
                to showcase India's incredible diversity.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Priya Patel"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Priya Patel</h3>
              <p className="text-blue-600 mb-2">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Priya ensures every journey runs smoothly with her exceptional organizational 
                skills and attention to detail.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Arjun Kumar"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Arjun Kumar</h3>
              <p className="text-blue-600 mb-2">Lead Travel Designer</p>
              <p className="text-gray-600 text-sm">
                Arjun crafts unique itineraries that perfectly blend adventure, culture, 
                and relaxation for unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;