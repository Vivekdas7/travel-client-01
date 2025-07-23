import React from 'react';
import { Calendar, Users, Star, MapPin } from 'lucide-react';
import { Package } from '../App';

interface PackageCardProps {
  package: Package;
  onViewPackage: (pkg: Package) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg, onViewPackage }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <div className="flex items-center bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-sm font-semibold">
            <Star className="h-4 w-4 mr-1 fill-current" />
            4.8
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {pkg.price}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 text-gray-500 mr-1" />
          <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{pkg.description}</p>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>2-8 People</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onViewPackage(pkg)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            View Details
          </button>
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;