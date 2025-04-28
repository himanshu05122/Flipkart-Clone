import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://wp.redbytes.in/wp-content/uploads/2019/04/how-to-make-an-app-like-flipkart.jpg',
  'https://www.gyftr.com/flipkartsupercoins/images/banner-mobile.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPl_8PJ1BmIrbTRZljUV8UOnygLPMrxxuS26gHtz-hfvCF8D8mPu6xNGWK5tUE2hhwEp8&usqp=CAU',
  'https://lh6.googleusercontent.com/proxy/wHzfJV_YwH7ZTGA1BgOIGP9TXUkmwY0nZWOI2176gM5LZ6hicRqDVVCii7IyTgV8AbTbHR88mr3M_tv0Pxr_MoDxHb2_W1VBexAV3bZhdEifafLrtCfXcQ',
  'https://d8it4huxumps7.cloudfront.net/uploads/images/flipkart-grid-03.jpg?d=1920x418',
  'https://cdn.slidesharecdn.com/ss_thumbnails/teameruditesbusinesstrack8slider1-240628111926-22d9753b-thumbnail.jpg?width=560&fit=bounds',
  'https://harshaindia.com/deepavali-sale/images/top_banner_1.jpg',
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  return (
    <div className="bg-gray-100 w-full">
      <div className="relative max-w-8xl mx-auto overflow-hidden px-4">
        {/* Image */}
        <div className="transition-all duration-700 ease-in-out bg-white rounded-md">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-[200px] md:h-[200px] object-cover rounded-md"
          />
        </div>

        {/* Left Button (hidden on small screens) */}
        <button
          onClick={prevSlide}
          className="hidden md:flex items-center justify-center absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 hover:bg-gray-100 rounded-r-lg px-3 py-8 shadow-md z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Button (hidden on small screens) */}
        <button
          onClick={nextSlide}
          className="hidden md:flex items-center justify-center absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 hover:bg-gray-100 rounded-l-lg px-3 py-8 shadow-md z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
