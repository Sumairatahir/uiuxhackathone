import React from 'react';
import Image from 'next/image';

const Product = () => {
  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl font-poppins">OUR PRODUCT</h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  src="/images/FeaturedProducts.svg"
                  alt="ecommerce"
                  layout="fill"
                  className="object-cover object-center w-285px h-381px block"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Syltherine
                </h2>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Stylish cafe chair
                </h2>
                <p className="mt-1">Rp 2.500.000</p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/images/Featuredone.svg"
                  layout="fill"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Leviosa
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Stylish cafe chair
                </h2>
                <p className="mt-1">Rp 2.500.000</p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/images/FeaturedProductstwo.svg"
                  layout="fill"
                />
              </a>
              <div className="mt-4">
                <h1 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  lolito
                </h1>
                <h3 className="text-gray-900 title-font text-lg font-medium">
                  Luxury Big Sofa
                </h3>
                <p className="mt-1">Rp 7.000.000</p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/images/FeaturedProductsthree.svg"
                  layout="fill"
                />
              </a>
              <div className="mt-4">
                <h1 className="text-gray-900 text-s tracking-widest title-font mb-1">
                  <strong>Respira</strong>
                </h1>
                <h2 className="text-gray-500 title-font text-lg font-small">
                  Outdoor bar table and stool
                </h2>
                <p className="mt-1 text-gray-900">Rp 500.000</p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/images/FeaturedProductsfour.svg"
                  layout="fill"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-900 text-xs tracking-widest title-font mb-1">
                  <strong>Grifo</strong>
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  night lamp
                </h2>
                <p className="mt-1">Rp 1.500.00</p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/images/FeaturedProductsfive.svg"
                  layout="fill"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-900 text-s tracking-widest title-font mb-1">
                  <strong>Muggo</strong>
                </h3>
                <h2 className="text-gray-500 title-font text-lg font-medium">
                  Small mug
                </h2>
                <p className="mt-1">Rp 150.000</p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/images/FeaturedProductsfive.svg"
                  layout="fill"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-900 text-s tracking-widest title-font mb-1">
                  <strong>pingky</strong>
                </h3>
                <h2 className="text-gray-500 title-font text-lg font-medium">
                  small bed set
                </h2>
                <p className="mt-1">Rp 7.000.00</p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/images/FeaturedProductssix.svg"
                  layout="fill"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-900 text-s tracking-widest title-font mb-1">
                  <strong>potty</strong>
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Minimalist flower pot
                </h2>
                <p className="mt-1">Rp 500.003</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
