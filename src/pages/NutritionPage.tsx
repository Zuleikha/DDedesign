import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, PawPrint, Bone, ArrowLeft, Heart } from 'lucide-react';
import SEO from '../components/common/SEO';
import BackToHomeButton from '../components/common/BackToHomeButton';
import ListingCard from '../components/listings/ListingCard';

// Import the hero image
import nutritionHeroImage from '../assets/images/nutrition/nutrition_hero.png';

// Import nutrition data
import nutritionData from '../data/nutrition_data';

// Add products property to the type
interface NutritionItem {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  services: string[];
  brands: string[];
  hours: string;
  products?: string[];
}

const NutritionPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState<NutritionItem[]>(nutritionData as NutritionItem[]);
  const [visibleItems, setVisibleItems] = useState(6);
  const [showAll, setShowAll] = useState(false);

  // Get unique counties for filter dropdown
  const counties = [...new Set(nutritionData.map(item => item.county))].sort();

  // SVG Paw Print Component
  const PawPrint = ({ size = 24, className = "", opacity = 0.2 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      style={{ opacity }}
    >
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C22.1 9 23 9.9 23 11C23 12.1 22.1 13 21 13C19.9 13 19 12.1 19 11C19 9.9 19.9 9 21 9ZM3 9C4.1 9 5 9.9 5 11C5 12.1 4.1 13 3 13C1.9 13 1 12.1 1 11C1 9.9 1.9 9 3 9ZM15 7C16.1 7 17 7.9 17 9C17 10.1 16.1 11 15 11C13.9 11 13 10.1 13 9C13 7.9 13.9 7 15 7ZM9 7C10.1 7 11 7.9 11 9C11 10.1 10.1 11 9 11C7.9 11 7 10.1 7 9C7 7.9 7.9 7 9 7ZM12 14C15.31 14 18 16.69 18 20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20C6 16.69 8.69 14 12 14Z"/>
    </svg>
  );

  // SVG Bone Component
  const Bone = ({ size = 24, className = "", opacity = 0.2 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      style={{ opacity }}
    >
      <path d="M3.5 6C2.67 6 2 6.67 2 7.5S2.67 9 3.5 9C4.33 9 5 8.33 5 7.5S4.33 6 3.5 6ZM20.5 6C19.67 6 19 6.67 19 7.5S19.67 9 20.5 9C21.33 9 22 8.33 22 7.5S21.33 6 20.5 6ZM3.5 15C2.67 15 2 15.67 2 16.5S2.67 18 3.5 18C4.33 18 5 17.33 5 16.5S4.33 15 3.5 15ZM20.5 15C19.67 15 19 15.67 19 16.5S19.67 18 20.5 18C21.33 18 22 17.33 22 16.5S21.33 15 20.5 15ZM6 7.5C6 8.88 7.12 10 8.5 10H15.5C16.88 10 18 8.88 18 7.5C18 6.12 16.88 5 15.5 5H8.5C7.12 5 6 6.12 6 7.5ZM6 16.5C6 17.88 7.12 19 8.5 19H15.5C16.88 19 18 17.88 18 16.5C18 15.12 16.88 14 15.5 14H8.5C7.12 14 6 15.12 6 16.5Z"/>
    </svg>
  );

  useEffect(() => {
    // Filter items based on search term and county filter
    const filtered = (nutritionData as NutritionItem[]).filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Safely check if products exists and contains the search term
      const matchesProducts = item.products ? 
        item.products.some((product: string) => product.toLowerCase().includes(searchTerm.toLowerCase())) : 
        false;
      
      const matchesCounty = countyFilter === '' || item.county === countyFilter;
      return (matchesSearch || matchesProducts) && matchesCounty;
    });
    
    setFilteredItems(filtered);
    setVisibleItems(6); // Reset to show 6 items when filter changes
    setShowAll(false);
  }, [searchTerm, countyFilter]);

  const handleShowMore = () => {
    setVisibleItems(filteredItems.length);
    setShowAll(true);
  };

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, visibleItems);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Nutrition Services in Ireland | DogDays.ie"
        description="Find dog nutrition services, pet food stores, and dietary consultants across Ireland. Get expert advice on your dog's dietary needs."
        canonicalUrl="https://www.dogdays.ie/nutrition"
      />

      {/* Responsive Hero Section */}
      <section className="relative bg-gray-100 text-gray-800 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${nutritionHeroImage})`
          }}
        ></div>

        {/* Background decorative elements with responsive positioning */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 sm:top-8 md:top-10 left-4 sm:left-8 md:left-10 animate-pulse">
            <PawPrint size={40} opacity={0.3} className="animate-bounce text-white sm:w-12 sm:h-12 md:w-16 md:h-16" />
          </div>
          <div className="absolute top-8 sm:top-12 md:top-20 right-8 sm:right-12 md:right-20 animate-pulse" style={{animationDelay: '1s'}}>
            <Bone size={30} opacity={0.3} className="animate-bounce text-white sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </div>
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-1/4 animate-pulse" style={{animationDelay: '2s'}}>
            <PawPrint size={60} opacity={0.2} className="animate-bounce text-white sm:w-16 sm:h-16 md:w-20 md:h-20" />
          </div>
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-10 right-4 sm:right-8 md:right-10 animate-pulse" style={{animationDelay: '0.5s'}}>
            <Bone size={40} opacity={0.3} className="animate-bounce text-white sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BackToHomeButton variant="light" />
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
              <PawPrint size={30} opacity={0.8} className="text-white sm:w-8 sm:h-8 md:w-10 md:h-10" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                Dog Nutrition Services
              </h1>
              <PawPrint size={30} opacity={0.8} className="text-white sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </div>
            
            <div className="flex justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Bone size={20} opacity={0.6} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <Bone size={20} opacity={0.6} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <Bone size={20} opacity={0.6} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-10 max-w-2xl md:max-w-4xl mx-auto leading-relaxed text-white">
              Find specialized pet food stores, canine nutritionists, and dietary consultants across Ireland. 
              Get expert advice on your dog's dietary needs and discover premium nutrition solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Responsive Search and Filter Section */}
      <section className="py-6 sm:py-8 bg-white shadow relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none text-gray-100">
          <div className="absolute top-2 sm:top-4 right-4 sm:right-8">
            <PawPrint size={25} opacity={0.3} className="text-orange-200 sm:w-7 sm:h-7" />
          </div>
          <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-8">
            <Bone size={20} opacity={0.3} className="text-orange-200 sm:w-6 sm:h-6" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm sm:text-base"
                placeholder="Search by name or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <select
                className="block w-full py-2 sm:py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm sm:text-base"
                value={countyFilter}
                onChange={(e) => setCountyFilter(e.target.value)}
              >
                <option value="">All Counties</option>
                {counties.map((county) => (
                  <option key={county} value={county}>
                    {county}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Listings Section */}
      <section className="py-8 sm:py-12 md:py-16 relative overflow-hidden">
        {/* Background decorations with responsive positioning */}
        <div className="absolute inset-0 pointer-events-none text-gray-200">
          <div className="absolute top-8 sm:top-12 md:top-16 left-8 sm:left-12 md:left-16">
            <Bone size={35} opacity={0.2} className="text-orange-200 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </div>
          <div className="absolute top-20 sm:top-32 md:top-40 right-12 sm:right-16 md:right-20">
            <PawPrint size={30} opacity={0.2} className="text-orange-200 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </div>
          <div className="absolute bottom-20 sm:bottom-32 md:bottom-40 left-1/4">
            <PawPrint size={40} opacity={0.2} className="text-orange-200 sm:w-11 sm:h-11 md:w-14 md:h-14" />
          </div>
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-8 sm:right-12 md:right-16">
            <Bone size={25} opacity={0.2} className="text-orange-200 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8">
            <PawPrint size={20} opacity={0.4} className="text-orange-500 sm:w-6 sm:h-6" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              {filteredItems.length} {filteredItems.length === 1 ? 'Nutrition Service' : 'Nutrition Services'} Found
            </h2>
            <PawPrint size={20} opacity={0.4} className="text-orange-500 sm:w-6 sm:h-6" />
          </div>
          
          {filteredItems.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {displayedItems.map((item) => (
                  <ListingCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    rating={item.rating}
                    reviewCount={item.reviewCount}
                    description={item.description}
                    county={item.county}
                    category="nutrition"
                  />
                ))}
              </div>
              
              {/* Responsive Show More Button */}
              {!showAll && filteredItems.length > 6 && (
                <div className="text-center mt-8 sm:mt-12">
                  <button
                    onClick={handleShowMore}
                    className="inline-flex items-center bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-orange-700 transition-colors group text-base sm:text-lg font-semibold"
                  >
                    <PawPrint size={18} className="mr-2 sm:mr-3 group-hover:animate-bounce sm:w-5 sm:h-5" />
                    Show More Nutrition Services ({filteredItems.length - 6} more)
                    <Bone size={18} className="ml-2 sm:ml-3 group-hover:animate-bounce sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="bg-gray-100 p-6 sm:p-8 rounded-lg text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">No nutrition services found</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Try adjusting your search or filter criteria to find dog nutrition services.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NutritionPage;

