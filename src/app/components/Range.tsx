import React from 'react';

const Range = () => {
  return (
    <div>
      <section className="text-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl text-black tracking-widest font-extrabold title-font mb-1">
              <strong>Browse The Range</strong>
            </h1>
            <h3 className="sm:text-3xl text-2xl font-small title-font text-gray-900">
              Lorem ipsum dolor, sit amet consectetur adipisicing
            </h3>
            <div className="flex justify-between items-center mt-10 space-x-6">
              <div className="w-[1183px] h-[685px] overflow-hidden top-[1008] left-[131] gap-60 border-emerald-50">
                <img src="/images/Mask Group.svg" alt="Image 1" className="w-full h-full object-cover" />
                <div className="mt-3 text-center text-black">
                  <strong>Dining</strong>
                </div>
              </div>
              <div className="w-[1183px] h-[685px] overflow-hidden">
                <img src="/images/livingroom.svg" alt="Image 2" className="w-full h-full object-cover" />
                <div className="mt-3 text-center text-black">
                  <strong>Living</strong>
                </div>
              </div>
              <div className="w-[1183px] h-[685px] overflow-hidden">
                <img src="/images/bedroom.svg" alt="Image 3" className="w-full h-full object-cover" />
                <div className="mt-3 text-center text-black">
                  <strong>Bedroom</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Range;
