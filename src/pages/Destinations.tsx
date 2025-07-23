import React from 'react';
import PackageCard from '../components/PackageCard';
import { Package } from '../App';
import { MapPin, Calendar, Users } from 'lucide-react';

interface DestinationsProps {
  packages: Package[];
  onViewPackage: (pkg: Package) => void;
}

const Destinations: React.FC<DestinationsProps> = ({ packages, onViewPackage }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Amazing Destinations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the snow-capped peaks of the Himalayas to the serene backwaters of Kerala, 
            discover the incredible diversity of India with our curated travel experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-800">{packages.length}+</h3>
            <p className="text-gray-600">Destinations</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-800">500+</h3>
            <p className="text-gray-600">Happy Travelers</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-800">10+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} onViewPackage={onViewPackage} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Discover India Like Never Before
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our destinations cover every corner of this beautiful country, from spiritual journeys 
              to adventure treks, beach holidays to cultural explorations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Mountain Adventures</h3>
              <p className="text-gray-600 text-sm">Ladakh, Spiti, Himachal Pradesh</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Spiritual Journeys</h3>
              <p className="text-gray-600 text-sm">Char Dham, Amarnath Yatra</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Beach Destinations</h3>
              <p className="text-gray-600 text-sm">Goa, Kerala Backwaters</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cultural Heritage</h3>
              <p className="text-gray-600 text-sm">Rajasthan, Kashmir Valley</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;