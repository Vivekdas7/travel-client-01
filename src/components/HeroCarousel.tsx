import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, Star } from 'lucide-react';
import { Package } from '../App';

interface HeroCarouselProps {
  packages: Package[];
  onViewPackage: (pkg: Package) => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ packages, onViewPackage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % packages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [packages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % packages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + packages.length) % packages.length);
  };

  const currentPackage = packages[currentSlide];

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${currentPackage.image})` }}
      />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in pt-20"> {/* Adjusted font size for mobile */}
            Explore Incredible India
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90"> {/* Adjusted font size for mobile */}
            Discover breathtaking destinations and create memories that last a lifetime
          </p>

          {/* Featured Package Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-4 max-w-2xl mx-auto border border-white border-opacity-20 flex flex-col justify-center items-center mb-8 md:mb-0 overflow-hidden">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center text-yellow-400 mr-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <span className="text-white font-semibold text-sm md:text-base">Featured Package</span> {/* Adjusted font size for mobile */}
            </div>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">{currentPackage.name}</h2> {/* Adjusted font size for mobile */}
            <p className="text-base md:text-lg mb-6 opacity-90">{currentPackage.description}</p> {/* Adjusted font size for mobile */}
            
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="text-sm md:text-base">{currentPackage.duration}</span> {/* Adjusted font size for mobile */}
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span className="text-sm md:text-base">2-8 People</span> {/* Adjusted font size for mobile */}
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <span className="text-xl md:text-3xl font-bold">{currentPackage.price}</span> {/* Adjusted font size for mobile */}
              <span className="text-sm md:text-lg opacity-75">per person</span> {/* Adjusted font size for mobile */}
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => onViewPackage(currentPackage)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                View Details
              </button>
              <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {packages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;