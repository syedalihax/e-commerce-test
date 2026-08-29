import React from 'react';

// Array mein har route / page ka address define kar diya hai
const navLinks = [
  { name: 'store', path: '/home' },
  { name: 'Mac', path: '/mac' },
  { name: 'iPad', path: '/ipad' },
  { name: 'iPhone', path: '/iphone' },
  { name: 'Watch', path: '/watch' },
  { name: 'Vision', path: '/vision' },
  { name: 'AirPods', path: '/airpods' },
  { name: 'TV & Home', path: '/tv-home' },
  { name: 'Entertainment', path: '/entertainment' },
  { name: 'register', path: '/register' },
  { name: 'login', path: '/login' },
];

const AppleNavbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 h-[44px] bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-[1024px] mx-auto h-full flex items-center justify-between px-4 md:px-[22px]">
        
        {/* Apple Logo */}
        <aa href="/" className="text-black/80 hover:text-black transition-colors">
          <svg className="w-[14px] h-[17px] fill-current" viewBox="0 0 17 21" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0C12.5 0 10.1 0 8.7 1.5C7.3 3 7.5 5 7.5 5C7.5 5 9.5 5.5 10.8 4C12.1 2.5 12.5 0 12.5 0ZM10.5 6.5C9.5 6.5 8.8 7.2 8 7.2C7.2 7.2 6.5 6.5 5.3 6.5C3.2 6.5 1.2 8.3 1.2 11.3C1.2 14.3 4 18.5 6.2 18.5C7.1 18.5 7.6 17.8 8.7 17.8C9.8 17.8 10.2 18.5 11.2 18.5C13.3 18.5 16 14.2 16 11.2C16 9.5 15.2 8.3 14.2 7.6C13.5 7.1 12.5 6.5 10.5 6.5Z"/>
          </svg>
        </aa>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a 
                href={item.path}
                className="text-[12px] font-normal text-black/80 hover:text-black transition-colors no-underline"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="bg-transparent border-none p-0 cursor-pointer text-black/80 hover:text-black transition-colors">
            <svg className="w-[15px] h-[15px]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </button>

          <button className="bg-transparent border-none p-0 cursor-pointer text-black/80 hover:text-black transition-colors">
            <svg className="w-[15px] h-[15px]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 5.5H12.5L13.5 13.5H1.5L2.5 5.5Z" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M5.5 5.5V3.5C5.5 2.5 6.5 1.5 7.5 1.5C8.5 1.5 9.5 2.5 9.5 3.5V5.5" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default AppleNavbar;