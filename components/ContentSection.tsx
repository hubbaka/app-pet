import Image from 'next/image';
import React from 'react';

const effects = [
  {
    name: 'Memberdayakan 90% penjual berskala mikro',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum neque!',
    image: '/icon1.png',
  },
  {
    name: '76,4% penjual merasakan kemudahan mengelola bisnis',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum neque!',
    image: '/icon2.png',
  },
];

const features = [
  {
    name: 'E-commerce',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum neque!',
    image: '/icon1.png',
  },
  {
    name: 'Teknologi Periklanan & Pemasaran',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum neque!',
    image: '/icon2.png',
  },
  {
    name: 'Logistic & Fulfillment',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum neque!',
    image: '/icon2.png',
  },
];

const inovasions = [
  {
    name: 'Wipet Forum',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum neque!',
    image: '/icon1.png',
  },
  {
    name: 'Wipet E-Commerce',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum neque!',
    image: '/icon2.png',
  },
  {
    name: 'Wipet Academy',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum neque!',
    image: '/icon2.png',
  },
  {
    name: 'Wipet Adoption',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum neque!',
    image: '/icon1.png',
  },
];

const ContentSection = () => {
  return (
    <section className="mb-32 text-gray-800 text-center">
      <div>
        <h1 className="font-bold text-4xl dark:text-neutral-100">
          Wipet Effect{' '}
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-400 border-0 rounded" />
        </h1>
      </div>
      <div>
        <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-12 pt-10">
          {effects.map((effect, idx) => {
            return (
              <div key={idx} className="mb-6 lg:mb-0">
                <div className="relative block rounded-lg shadow-lg p-6 h-full hover:-translate-y-2 bg-gradient-to-r from-yellow-400 to-orange-300">
                  <div className="lg:flex flex-row justify-center items-center">
                    <div className="w-32 lg:w-3/12 lg:pr-6">
                      <Image
                        src={effect.image}
                        alt="Trendy Pants and Shoes"
                        className="w-full rounded-md mb-6 lg:mb-0"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="w-full lg:w-8/12 text-left text-white">
                      <h5 className="text-2xl lg:text-4xl font-bold mb-2">
                        {effect.name}
                      </h5>
                      <p className="mb-4">{effect.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-32">
        <h1 className="font-bold text-4xl dark:text-neutral-100">
          Wipet Feature{' '}
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-400 border-0 rounded" />
        </h1>
      </div>
      <div>
        <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12 pt-10">
          {features.map((feature, idx) => {
            return (
              <div key={idx} className="mb-6 lg:mb-0 ">
                <div className="relative block rounded-lg shadow-lg p-6 h-full hover:-translate-y-2 bg-gradient-to-r from-yellow-400 to-orange-300">
                  <div className="lg:flex flex-row justify-center items-center">
                    <div className="w-32 lg:w-3/12 lg:pr-6">
                      <Image
                        src={feature.image}
                        alt="Trendy Pants and Shoes"
                        className="w-full rounded-md mb-6 lg:mb-0"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="w-full lg:w-8/12 text-left text-white">
                      <h5 className="text-2xl lg:text-4xl font-bold mb-2 ">
                        {feature.name}
                      </h5>
                      <p className="mb-4">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-32">
        <h1 className="font-bold text-4xl dark:text-neutral-100">
          Wipet Inovation{' '}
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-400 border-0 rounded" />
        </h1>
      </div>
      <div>
        <div className="grid md:grid-cols-2 gap-6 xl:gap-x-12 pt-10">
          {inovasions.map((inovasion, idx) => {
            return (
              <div key={idx} className="mb-6 lg:mb-0 ">
                <div className="relative block rounded-lg shadow-lg p-6 h-full hover:-translate-y-2 bg-gradient-to-r from-yellow-400 to-orange-300">
                  <div className="lg:flex flex-row justify-center items-center">
                    <div className="w-32 lg:w-3/12 lg:pr-6">
                      <Image
                        src={inovasion.image}
                        alt="Trendy Pants and Shoes"
                        className="w-full rounded-md mb-6 lg:mb-0"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="w-full lg:w-8/12 text-left text-white">
                      <h5 className="text-2xl lg:text-4xl font-bold mb-2">
                        {inovasion.name}
                      </h5>
                      <p className="mb-4">{inovasion.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
