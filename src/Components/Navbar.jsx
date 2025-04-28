import React, { useState } from 'react';
import { 
  ShoppingCart, 
  User, 
  Store, 
  Search, 
  MoreVertical, 
  Heart, 
  Gift, 
  CreditCard, 
  UserCircle, 
  BadgePercent, 
  Package, 
  ChevronDown, 
  ChevronUp, 
  Bell, 
  LifeBuoy, 
  Megaphone, 
  Download 
} from 'lucide-react';

const Navbar = () => {
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');  // state to hold search query

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to Flipkart search page with the search query
      window.location.href = `https://www.flipkart.com/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="bg-white text-black">
      <div className="bg-white px-4 py-2 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo and Explore Plus */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex flex-col items-start">
              <img
                src="https://findvectorlogo.com/wp-content/uploads/2019/03/flipkart-vector-logo.png"
                alt="Flipkart"
                className="h-8"
              />
              <span className="text-xs italic text-blue-600">
                Explore <b className="text-yellow-500">Plus</b>
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSearch}>
              <div className="flex items-center bg-gray-200 px-3 py-2 rounded-lg">
                <Search className="text-gray-500 w-5 h-5 mr-2" />
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="bg-transparent w-full focus:outline-none text-base placeholder:text-sm"
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)}  // Capture input change
                />
              </div>
            </form>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 mt-4 md:mt-0 relative">
            
            {/* Login with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsLoginDropdownOpen(true)}
              onMouseLeave={() => setIsLoginDropdownOpen(false)}
            >
              <button
                className={`text-black cursor-pointer px-4 py-1 rounded-sm font-medium flex items-center ${isLoginDropdownOpen ? 'bg-blue-500 text-white' : ''}`}
              >
                <User className="w-4 h-4 mr-1" /> Login
                {isLoginDropdownOpen ? (
                  <ChevronUp className="w-4 h-4 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-2" />
                )}
              </button>

              <div
                className={`absolute ${isLoginDropdownOpen ? 'block' : 'hidden'} top-10 left-1 right-0 w-64 bg-white shadow-lg rounded-md z-50`}
              >
                <div className="flex justify-between items-center px-4 py-2 text-sm">
                  <span className="text-black text-l">New Customer?</span>
                  <button className="text-blue-600 font-medium hover:underline">
                    Sign Up
                  </button>
                </div>
                <hr />
                <ul className="text-sm p-2">
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <UserCircle className="w-4 h-4 mr-3" /> My Profile
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <BadgePercent className="w-4 h-4 mr-3" /> Flipkart Plus Zone
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Package className="w-4 h-4 mr-3" /> Orders
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Heart className="w-4 h-4 mr-3" /> Wishlist
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Gift className="w-4 h-4 mr-3" /> Rewards
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <CreditCard className="w-4 h-4 mr-3" /> Gift Cards
                  </li>
                </ul>
              </div>
            </div>

            {/* Become a Seller */}
            <button className="text-black cursor-pointer text-sm flex items-center">
              <Store className="w-4 h-4 mr-1" /> Become a Seller
            </button>

            {/* Cart */}
            <button className="text-black cursor-pointer text-sm hover:underline flex items-center">
              <ShoppingCart className="w-5 h-5 mr-1" /> Cart
            </button>

            {/* More Icon with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsMoreDropdownOpen(true)}
              onMouseLeave={() => setIsMoreDropdownOpen(false)}
            >
              <button className="text-black cursor-pointer">
                <MoreVertical className="w-5 h-5" />
              </button>

              <div
                className={`absolute ${isMoreDropdownOpen ? 'block' : 'hidden'} top-10 right-0 w-64 bg-white shadow-lg rounded-md z-50`}
              >
                <ul className="text-sm p-2">
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Bell className="w-4 h-4 mr-3" /> Notification Preferences
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <LifeBuoy className="w-4 h-4 mr-3" /> 24/7 Customer Support
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Megaphone className="w-4 h-4 mr-3" /> Advertise
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Download className="w-4 h-4 mr-3" /> Download App
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
