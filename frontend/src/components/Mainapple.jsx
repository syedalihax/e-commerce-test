import React from 'react'

function Mainapple() {
  const imageUrl = "https://www.apple.com/v/home/images/apple-event-september-2026/a/hero_apple_event_september_2026__fkq1w4m2h2eu_medium_2x.jpg"

  return (
    <section 
      className="w-full h-[550px] md:h-[620px] bg-cover bg-center flex flex-col justify-end items-center pb-14 text-white"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {/* Content Container */}
      <div className="flex flex-col items-center text-center px-4">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-semibold tracking-tight leading-none drop-shadow-sm">
          Surprise and shine.
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-lg sm:text-xl md:text-[21px] font-normal text-gray-100 max-w-xl drop-shadow-sm">
          Watch a special Apple Event online on 9/9 at 10 a.m. PT.
        </p>

        {/* Action Button */}
        <div className="mt-6">
          <a
            href="#"
            className="inline-block px-5 py-2.5 bg-white text-black text-sm md:text-base font-normal rounded-full hover:bg-gray-100 transition-all duration-200"
          >
            Add to calendar
          </a>
        </div>
      </div>
    </section>
  )
}

export default Mainapple