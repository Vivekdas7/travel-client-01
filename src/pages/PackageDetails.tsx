import React from 'react';
import { Package } from '../App';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Star, 
  CheckCircle, 
  ArrowLeft,
  Phone,
  Mail
} from 'lucide-react';

interface PackageDetailsProps {
  package: Package;
  onBack: () => void;
}

const PackageDetails: React.FC<PackageDetailsProps> = ({ package: pkg, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Packages
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="flex items-center bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  4.8 (124 reviews)
                </div>
              </div>
            </div>

            {/* Package Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-gray-500 mr-2" />
                <h1 className="text-3xl font-bold text-gray-800">{pkg.name}</h1>
              </div>

              <div className="flex items-center space-x-6 mb-6 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>2-8 People</span>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">{pkg.description}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Package Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.included.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary Preview */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Itinerary</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-800">Day 1: Arrival & Welcome</h3>
                  <p className="text-gray-600">Arrive at your destination and check into accommodation. Welcome briefing and local orientation.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-semibold text-gray-800">Day 2-4: Main Attractions</h3>
                  <p className="text-gray-600">Explore the major highlights and attractions of your chosen destination with expert guides.</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold text-gray-800">Final Days: Cultural Experience</h3>
                  <p className="text-gray-600">Immerse yourself in local culture, cuisine, and traditions before departure.</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * This is a sample itinerary. Actual itinerary may vary based on weather conditions and local circumstances.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-800 mb-2">{pkg.price}</div>
                <div className="text-gray-600">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                  Buy Now
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                  Customize Package
                </button>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Free cancellation up to 48 hours</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Best price guarantee</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Our travel experts are here to help you plan the perfect trip.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>bookings@wanderindia.com</span>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Why Book With Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">500+ happy travelers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">10+ years of experience</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Local expert guides</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;