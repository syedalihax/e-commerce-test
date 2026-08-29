import React from 'react';

function ProductCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5f5f7] p-6 font-sans">
      <div className="group relative w-full max-w-sm rounded-3xl bg-white/80 p-8 backdrop-blur-xl shadow-md hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 border border-black/5 flex flex-col items-center text-center">
        
        {/* Subtle Badge */}
        <span className="text-xs font-semibold tracking-widest text-[#bf4800] uppercase mb-2">
          New
        </span>

        {/* Product Title & Subtitle */}
        <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">
          iPhone 15 Pro
        </h3>
        <p className="mt-1 text-sm font-medium text-[#86868b]">
          Titanium. So strong. So light. So Pro.
        </p>

        {/* Product Image */}
        <div className="my-8 relative w-48 h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg"
            alt="iPhone 15 Pro"
            className="object-contain max-h-full drop-shadow-lg"
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <span className="text-xs text-[#86868b] block">From</span>
          <span className="text-lg font-semibold text-[#1d1d1f]">$999</span>
          <span className="text-xs text-[#86868b]"> or $41.62/mo.</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 w-full justify-center">
          <button className="rounded-full bg-[#0071e3] px-5 py-2 text-sm font-medium text-white hover:bg-[#0077ed] active:scale-95 transition-all">
            Buy
          </button>
          <a
            href="#"
            className="text-sm font-medium text-[#0071e3] hover:underline flex items-center gap-1 group/link"
          >
            Learn more 
            <span className="transition-transform group-hover/link:translate-x-0.5">&gt;</span>
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;