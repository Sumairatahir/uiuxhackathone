import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="relative">
      {/* First Image Section */}
      <div className="w-full h-[48px]">
        <Image 
          src="/images/icon.svg" 
          alt="Header Icon" 
          width={1920} 
          height={48} 
        />
      </div>

      {/* Second Image Section */}
      <div className="relative w-full h-[716px] mt-[96px]">
        <Image 
          src="/images/picture.svg" 
          alt="Picture" 
          width={1920} 
          height={716}
        />
        <div 
          className="absolute top-[200px] left-[800px] w-[643px] h-[443px] bg-[#FFF3E3] border border-black rounded-[10px] p-6"
        >
          
          <h6 className="text-sm font-semibold text-gray-600 mb-4">New Arrival</h6>

                    <h2 className="text-left text-black text-2xl font-bold">
            Discover Our <br /> New Collection
          </h2>

          {/* Description */}
          <p className="w-[546px] h-[52px] mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut
            <br /> magnam voluptas provident ut, eligendi voluptatem sss..
          </p>

          {/* Button */}
          <button className="bg-[#B88E2F] text-white w-[222px] h-[74px] mt-6 flex items-center justify-center rounded-lg">
            BUY NOW
          </button>
        </div>
        ...
      </div>
    </div>
  );
};

export default Header;
