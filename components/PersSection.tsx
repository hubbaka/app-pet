import React from 'react';
import Image from 'next/image';

const effects = [{ image: '', name: '', description: '' }];

const PersSection = () => {
  return (
    <section className="mb-32 text-gray-800 text-center">
      <div>
        <h1 className="font-bold text-4xl dark:text-neutral-100">
          Siaran Pers{' '}
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-400 border-0 rounded" />
        </h1>
      </div>
      <div>
        {effects.length > 1 ? (
          effects.map((effect, idx) => {
            return (
              <div
                key={idx}
                className="grid md:grid-cols-2 gap-x-6 lg:gap-x-12 pt-10"
              >
                <div className="mb-6 lg:mb-0">
                  <div className="relative block rounded-lg shadow-lg bg-white p-6 h-full hover:-translate-y-2">
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
                      <div className="w-full lg:w-8/12 text-left">
                        <h5 className="text-2xl lg:text-4xl font-bold mb-2 text-orange-300">
                          {effect.name}
                        </h5>
                        <p className="text-gray-500 mb-4">
                          {effect.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex justify-center items-center pt-10">
            <div className="block rounded-lg shadow-lg  max-w-sm text-center bg-orange-300">
              <div className="p-6">
                <h5 className="text-white text-xl font-medium mb-2 ">
                  currently not available
                </h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PersSection;
