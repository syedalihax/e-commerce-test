import React from 'react'

function Mainapple() {
  const imageUrl = "https://www.apple.com/v/home/images/apple-event-september-2026/a/hero_apple_event_september_2026__fkq1w4m2h2eu_medium_2x.jpg"

  return (
    <section 
      className="w-full h-[580px] bg-cover bg-center flex flex-col justify-end items-center pb-12 text-white"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {/* Content Container */}
      <div className="text-center flex flex-col items-center gap-3">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Surprise and shine.
        </h1>
        <p className="text-lg md:text-2xl font-normal text-gray-100">
          Watch a special Apple Event online on 9/9 at 10 a.m. PT.
        </p>
        <button className="mt-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-opacity-90 transition">
          Add to calendar
        </button>
      </div>
    </section>
  )
}

export default Mainapple