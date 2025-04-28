import React from 'react';

const categories = [
  { name: 'Kilos', img: 'https://m.media-amazon.com/images/I/61s5orKgmwL._AC_UF1000,1000_QL80_.jpg' },
  { name: 'Mobile', img: 'https://darlingretail.com/cdn/shop/products/1_7b64958c-304b-43bd-b759-c5366bfa9914_600x.jpg?v=1661581431' },
  { name: 'Fashion', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIA7GT-kqTwEx-CiRew-pNJsi0tsvYsNn1Q&s' },
  { name: 'Electronics', img: 'https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ=' },
  { name: 'Home & Furniture', img: 'https://expatliving.net/wp-content/uploads/2018/11/001.jpg' },
  { name: 'Appliances', img: 'https://amstradworld.com/wp-content/uploads/2023/12/Amstrad-AM65UWGTA-WebOS-TV_front.jpg' },
  { name: 'Flight Bookings', img: 'https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=' },
  { name: 'Beauty', img: 'https://professionalbeauty.in/wp-content/uploads/2023/06/BANNER-OPTION-1-1024x706.jpg' },
  { name: 'Two Wheelers', img: 'https://m.media-amazon.com/images/I/51WRaOtap-L.jpg' },
];

const List = () => {
  const handleCategoryClick = (category) => {
    const searchQuery = encodeURIComponent(category);
    window.location.href = `https://www.flipkart.com/search?q=${searchQuery}`;
  };

  return (
    <div className="bg-gray-100 px-4 py-2">
      <div className="bg-white shadow-md rounded-lg overflow-x-auto scrollbar-hide">
        <ul className="flex md:justify-around items-center gap-4 px-4 py-4 min-w-max md:min-w-full">
          {categories.map((category, index) => (
            <li key={index} className="flex flex-col items-center text-sm md:text-base font-medium text-gray-700 hover:text-blue-600 transition duration-200 cursor-pointer"
              onClick={() => handleCategoryClick(category.name)}
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-12 h-12 md:w-16 md:h-16 mb-1 object-contain rounded-md"
              />
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
