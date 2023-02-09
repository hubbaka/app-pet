import React from 'react';
import style from '/styles/style.module.css';
const HeaderSection = () => {
  return (
    <section className="mb-32 text-gray-800 bg-gradient-to-r from-orange-400 to-yellow-200 rounded-xl">
      <div className="px-6 py-12 md:px-12 text-center lg:text-left">
        <div className="container mx-auto">
          <div className="lg:grid-cols-2 gap-12 flex items-center">
            <div className="mt-12 lg:mt-0">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Are you ready <br />
                <span className="text-white">Animal lovers?</span>
              </h1>
            </div>
            <div className="mb-12 lg:mb-0">
              <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
