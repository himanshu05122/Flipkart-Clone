import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, BadgeDollarSign, Megaphone, Gift, LifeBuoy } from 'lucide-react'; // imported icons

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 px-10 py-8 text-sm">
      <div className="flex flex-wrap justify-between gap-y-10">
        {/* Top Columns */}
        <div className="flex flex-wrap gap-2">
          {/* About */}
          <div className="min-w-[150px]">
            <h3 className="text-gray-500 text-sm font-semibold mb-3">ABOUT</h3>
            <ul className="space-y-1">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          {/* Group Companies */}
          <div className="min-w-[150px]">
            <h3 className="text-gray-500 font-semibold mb-3">GROUP COMPANIES</h3>
            <ul className="space-y-1">
              <li>Myntra</li>
              <li>Cleartrip</li>
              <li>Shopsy</li>
            </ul>
          </div>

          {/* Help */}
          <div className="min-w-[150px]">
            <h3 className="text-gray-500 font-semibold mb-3">HELP</h3>
            <ul className="space-y-1">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Consumer Policy */}
          <div className="min-w-[200px]">
            <h3 className="text-gray-500 font-semibold mb-3">CONSUMER POLICY</h3>
            <ul className="space-y-1">
              <li>Cancellation & Returns</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>EPR Compliance</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="border-l border-gray-600 h-auto hidden sm:block" />
        </div>

        {/* Mail and Address */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
          {/* Mail Us */}
          <div>
            <h3 className="text-gray-500 font-semibold mb-3">Mail Us:</h3>
            <p className="text-white leading-relaxed">
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India
            </p>

            <div className="flex gap-3 mt-3">
              <Twitter size={20} />
              <Facebook size={20} />
              <Youtube size={20} />
              <Instagram size={20} />
            </div>
          </div>

          {/* Registered Address */}
          <div>
            <h3 className="text-gray-500 font-semibold mb-3">Registered Office Address:</h3>
            <p className="text-white leading-relaxed">
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India<br />
              CIN: U51109KA2012PTC066107<br />
              <span className="text-blue-400">Telephone: 044-45614700 / 044-67415800</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-wrap justify-between items-center text-gray-400 text-xs">
        <div className="flex flex-wrap gap-25 items-center">
          <span className="flex items-center gap-1">
            <BadgeDollarSign className='text-yellow-500' size={14} /> Become a Seller
          </span>
          <span className="flex items-center gap-1">
            <Megaphone className='text-yellow-500' size={14} /> Advertise
          </span>
          <span className="flex items-center gap-1">
            <Gift className='text-yellow-500' size={14} /> Gift Cards
          </span>
          <span className="flex items-center gap-1">
            <LifeBuoy className='text-yellow-500' size={14} /> Help Center
          </span>
          <span>© 2007-2025 Flipkart.com</span>
        </div>

        {/* Payment icons */}
        <div className="flex gap-2 mt-4 sm:mt-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="w-8 h-auto" />
          <img src="https://preview.redd.it/icici-sent-a-debit-that-looks-like-a-kids-play-zone-card-v0-c8l09fqsz9le1.png?auto=webp&s=54731e674c3acdad5726962315def85f2ddc7fdd" alt="ICICI" className="w-8 h-auto" />
          <img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/31/Photos/Processed/cards-kWDH--621x414@LiveMint.jpg" alt="Other" className="w-8 h-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="w-8 h-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="w-8 h-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="w-8 h-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="w-8 h-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
