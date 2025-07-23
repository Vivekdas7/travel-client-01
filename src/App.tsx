import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import About from './pages/About';
import Contact from './pages/Contact';
import PackageDetails from './pages/PackageDetails';
import Footer from './components/Footer';

export type Package = {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  highlights: string[];
  included: string[];
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const packages: Package[] = [
    {
      id: 'ladakh',
      name: 'Ladakh Adventure',
      description: 'Experience the breathtaking landscapes of Ladakh with its pristine lakes, ancient monasteries, and rugged mountains.',
      price: '₹45,000',
      duration: '7 Days / 6 Nights',
      image: 'https://images.pexels.com/photos/3392154/pexels-photo-3392154.jpeg',
      highlights: ['Pangong Lake', 'Nubra Valley', 'Leh Monastery', 'Magnetic Hill'],
      included: ['Hotel Accommodation', 'All Meals', 'Transportation', 'Professional Guide']
    },
    {
      id: 'kaza-spiti',
      name: 'Kaza Spiti Valley',
      description: 'Explore the mystical Spiti Valley with its ancient monasteries, high-altitude desert landscapes, and unique culture.',
      price: '₹38,000',
      duration: '6 Days / 5 Nights',
      image: 'https://images.pexels.com/photos/31756488/pexels-photo-31756488.jpeg',
      highlights: ['Key Monastery', 'Chandratal Lake', 'Pin Valley', 'Dhankar Monastery'],
      included: ['Hotel Accommodation', 'All Meals', 'Transportation', 'Professional Guide']
    },
    {
      id: 'kashmir',
      name: 'Kashmir Paradise',
      description: 'Discover the paradise on earth with Dal Lake, Mughal gardens, and snow-capped mountains of Kashmir.',
      price: '₹35,000',
      duration: '5 Days / 4 Nights',
      image: 'https://images.pexels.com/photos/28839065/pexels-photo-28839065.jpeg',
      highlights: ['Dal Lake Houseboat', 'Gulmarg Gondola', 'Pahalgam Valley', 'Shalimar Gardens'],
      included: ['Houseboat Stay', 'All Meals', 'Transportation', 'Professional Guide']
    },
    {
      id: 'himachal',
      name: 'Himachal Hills',
      description: 'Experience the beauty of Himachal Pradesh with its hill stations, apple orchards, and colonial charm.',
      price: '₹28,000',
      duration: '5 Days / 4 Nights',
      image: 'https://images.pexels.com/photos/31216857/pexels-photo-31216857.jpeg',
      highlights: ['Shimla Mall Road', 'Manali Adventure', 'Rohtang Pass', 'Kullu Valley'],
      included: ['Hotel Accommodation', 'All Meals', 'Transportation', 'Professional Guide']
    },
    {
      id: 'goa',
      name: 'Goa Beach Paradise',
      description: 'Relax on pristine beaches, enjoy water sports, and experience the vibrant nightlife of Goa.',
      price: '₹25,000',
      duration: '4 Days / 3 Nights',
      image: 'https://images.pexels.com/photos/978667/pexels-photo-978667.jpeg',
      highlights: ['Baga Beach', 'Water Sports', 'Old Goa Churches', 'Spice Plantations'],
      included: ['Beach Resort Stay', 'All Meals', 'Transportation', 'Professional Guide']
    },
    {
      id: 'panchmarhi',
      name: 'Panchmarhi Hill Station',
      description: 'Explore the queen of Satpura with waterfalls, caves, and lush green forests in Madhya Pradesh.',
      price: '₹22,000',
      duration: '4 Days / 3 Nights',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      highlights: ['Bee Falls', 'Pandav Caves', 'Dhoopgarh Sunrise', 'Satpura National Park'],
      included: ['Hotel Accommodation', 'All Meals', 'Transportation', 'Professional Guide']
    },
    {
      id: 'kerala',
      name: 'Kerala Backwaters',
      description: 'Experience Gods Own Country with backwaters, spice gardens, and Ayurvedic treatments in Kerala.',
      price: '₹32,000',
      duration: '6 Days / 5 Nights',
      image: 'https://images.pexels.com/photos/17870091/pexels-photo-17870091.jpeg',
      highlights: ['Alleppey Houseboats', 'Munnar Tea Gardens', 'Kochi Fort', 'Thekkady Wildlife'],
      included: ['Houseboat Stay', 'All Meals', 'Transportation', 'Professional Guide']
    },
    {
      id: 'rajasthan',
      name: 'Rajasthan Royal Heritage',
      description: 'Discover the land of kings with majestic palaces, desert safaris, and rich cultural heritage.',
      price: '₹42,000',
      duration: '7 Days / 6 Nights',
      image: 'https://images.pexels.com/photos/3659960/pexels-photo-3659960.jpeg',
      highlights: ['Jaipur City Palace', 'Udaipur Lake Palace', 'Jaisalmer Desert', 'Jodhpur Blue City'],
      included: ['Heritage Hotels', 'All Meals', 'Transportation', 'Professional Guide']
    },
    {
      id: 'char-dham',
      name: 'Char Dham Yatra',
      description: 'Embark on a spiritual journey to the four sacred shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath.',
      price: '₹55,000',
      duration: '12 Days / 11 Nights',
      image: 'https://images.pexels.com/photos/19194412/pexels-photo-19194412.jpeg',
      highlights: ['Yamunotri Temple', 'Gangotri Glacier', 'Kedarnath Shrine', 'Badrinath Temple'],
      included: ['Hotel Accommodation', 'All Meals', 'Transportation', 'Professional Guide']
    },
    {
      id: 'amarnath',
      name: 'Amarnath Yatra',
      description: 'Join the sacred pilgrimage to the holy Amarnath cave and witness the naturally formed ice lingam.',
      price: '₹48,000',
      duration: '8 Days / 7 Nights',
      image: 'https://images.pexels.com/photos/12700036/pexels-photo-12700036.jpeg',
      highlights: ['Amarnath Cave', 'Baltal Base Camp', 'Pahalgam Route', 'Spiritual Experience'],
      included: ['Camp Accommodation', 'All Meals', 'Transportation', 'Professional Guide']
    }
  ];

  const filteredPackages = packages.filter(pkg =>
    pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query && currentPage !== 'packages') {
      setCurrentPage('packages');
    }
  };

  const viewPackageDetails = (pkg: Package) => {
    setSelectedPackage(pkg);
    setCurrentPage('package-details');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'destinations':
        return <Destinations packages={packages} onViewPackage={viewPackageDetails} />;
      case 'packages':
        return <Packages packages={filteredPackages} searchQuery={searchQuery} onViewPackage={viewPackageDetails} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'package-details':
        return selectedPackage ? <PackageDetails package={selectedPackage} onBack={() => setCurrentPage('home')} /> : <Home packages={packages} onViewPackage={viewPackageDetails} />;
      default:
        return <Home packages={packages} onViewPackage={viewPackageDetails} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;