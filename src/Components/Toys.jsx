import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const toys = [
  { name: 'Headphones', img: 'https://m.media-amazon.com/images/I/61NZPCYSeVL._SL1500_.jpg', price: '₹2,999' },
  { name: 'Smartwatch', img: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg', price: '₹4,499' },
  { name: 'Tablet', img: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg', price: '₹14,999' },
  { name: 'Laptop', img: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UF1000,1000_QL80_.jpg', price: '₹49,999' },
  { name: 'Speaker', img: 'https://www.lg.com/content/dam/channel/wcms/in/images/audio/xl9t-dindllk-eail-in-c/gallery1/XL9T-DZ-01.jpg/_jcr_content/renditions/thum-1600x1062.jpeg', price: '₹1,999' },
  { name: 'Monitor', img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._SL1500_.jpg', price: '₹9,999' },
  { name: 'Power Bank', img: 'https://d57avc95tvxyg.cloudfront.net/images/thumbnails/1125/1125/detailed/868/10000mah-power-bank-portable-charger-for-apple-iphone-6s-plus-maxbhi-0-4-1.jpg?t=1731831889', price: '₹899' },
  { name: 'Router', img: 'https://t3.ftcdn.net/jpg/02/86/00/50/360_F_286005066_jjAYqVl95Kw1eD6GMWoCSqi9OjgD8WSh.jpg', price: '₹1,299' },
  { name: 'Camera', img: 'https://pro.sony/s3/2017/09/04150224/F65-category-image.jpg', price: '₹24,999' },
];

const Toys = () => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollAmount = 600;

  const checkScroll = () => {
    const el = containerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll(); // initial check
    }
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="bg-gray-100 py-3">
      <div className="relative w-full px-2">
        <div className="relative bg-white p-4 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 px-4">Toys</h2>

          {/* Left Scroll Button */}
          {canScrollLeft && (
            <button
              onClick={() => containerRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })}
              className="hidden md:block absolute text-black left-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-300 hover:bg-gray-100 px-2 py-8 shadow"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Cards Container */}
          <ul
            ref={containerRef}
            className="
              grid grid-cols-2 sm:grid-cols-3 gap-4 px-2
              md:flex md:overflow-x-auto md:space-x-4 md:gap-0 md:scrollbar-hide md:px-2
            "
            style={{ scrollBehavior: 'smooth' }}
          >
            {toys.map((item, index) => (
              <li
                key={index}
                className="text-center md:min-w-[200px] md:max-w-[200px] md:flex-shrink-0"
              >
                <a href="#" className="flex flex-col items-center text-gray-700 group">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-36 h-36 object-contain mb-2 transition-transform transform group-hover:scale-105 group-hover:z-10"
                  />
                  <span className="text-base font-medium">{item.name}</span>
                  <span className="text-blue-600 text-sm font-semibold mt-1">{item.price}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right Scroll Button */}
          {canScrollRight && (
            <button
              onClick={() => containerRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' })}
              className="hidden md:block absolute text-black right-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-300 hover:bg-gray-100 px-2 py-8 shadow"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Toys;
