import React from 'react'

function MainIphone() {
  const imageUrl = "https://www.apple.com/v/home/images/iphone-family/a/hero_iphone_family__be5jkzxszb1e_medium_2x.jpg"

  return (
    <section className="w-full bg-[#fbfbfd] pt-14 pb-0 flex flex-col items-center justify-between overflow-hidden my-3">
      {/* Top Text Content */}
      <div className="text-center px-4 z-10 flex flex-col items-center">
        {/* Main Title */}
        <h2 className="text-5xl sm:text-6xl md:text-[56px] font-semibold text-[#1d1d1f] tracking-tight">
          iPhone
        </h2>

        {/* Subtitle */}
        <p className="mt-1 text-xl sm:text-2xl md:text-[24px] font-normal text-[#1d1d1f]">
          Meet the latest iPhone lineup.
        </p>

        {/* Action Buttons */}
        <div className="mt-4 flex items-center gap-3">
          {/* Learn More Button */}
          <a
            href="/iphone"
            className="px-5 py-2 bg-[#0071e3] text-white text-sm md:text-base font-normal rounded-full hover:bg-[#0077ed] transition-colors"
          >
            Learn more
          </a>

          {/* Shop iPhone Button */}
          <a
            href="/shop/iphone"
            className="px-5 py-2 bg-transparent text-[#0071e3] border border-[#0071e3] text-sm md:text-base font-normal rounded-full hover:bg-[#0071e3] hover:text-white transition-all"
          >
            Shop iPhone
          </a>
        </div>
      </div>

      {/* Bottom Image Container */}
      <div className="w-full max-w-[1068px] mt-8 flex justify-center items-end px-4">
        <img 
          src={imageUrl} 
          alt="iPhone Lineup" 
          className="w-full h-auto object-contain max-h-[480px]"
        />
      </div>
    </section>
  )
}

export default MainIphone