import React from 'react';
import Image from 'next/image';
const HeroSection = () => {
  return (
    <section className="mb-32">
      <div className="flex flex-wrap">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
          <div className="flex lg:py-12">
            <Image
              src="/children.jpg"
              className="w-full rounded-lg shadow-lg z-10 md:ml-12"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
          <div className="bg-yellow-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
            <div className="lg:pl-12">
              <h2 className="text-5xl font-bold mb-6"> Wipet!</h2>
              <p className="mb-6 pb-2 lg:pb-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa
                enim quibusdam illo laboriosam omnis. Labore itaque illum
                distinctio eum neque!
              </p>

              <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20 text-xl">
                  <span className="bg-red-500 rounded-full p-2 mx-1">🐈</span>{' '}
                  Best team
                </p>

                <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20 text-xl">
                  <span className="bg-red-500 rounded-full p-2 mx-1">🦅</span>{' '}
                  Best Quality
                </p>

                <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20 text-xl">
                  <span className="bg-red-500 rounded-full p-2 mx-1">🐕‍🦺</span>{' '}
                  Best Service
                </p>
              </div>

              <p>
                Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                porta dui, sit amet rutrum enim massa in ante. Curabitur in
                justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
                faucibus sapien eget tortor finibus, a eleifend lectus dictum.
                Cras tempor convallis magna id rhoncus. Suspendisse potenti. Nam
                mattis faucibus imperdiet. Proin tempor lorem at neque tempus
                aliquet. Phasellus at ex volutpat, varius arcu id, aliquam
                lectus. Vestibulum mattis felis quis ex pharetra luctus. Etiam
                luctus sagittis massa, sed iaculis est vehicula ut.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Wipet Stat
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
            sint, repellat vel quo quisquam accusamus in qui at ipsa enim
            quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum
            neque!
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="px-4 py-6 rounded-lg shadow-lg  hover:-translate-y-2 bg-gradient-to-r from-yellow-400 to-orange-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="text-red-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-white">
                2.7K
              </h2>
              <p className="leading-relaxed text-white">Downloads</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="px-4 py-6 rounded-lg shadow-lg  hover:-translate-y-2 bg-gradient-to-r from-yellow-400 to-orange-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="text-red-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-white">
                1.3K
              </h2>
              <p className="leading-relaxed text-white">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="px-4 py-6 rounded-lg shadow-lg  hover:-translate-y-2 bg-gradient-to-r from-yellow-400 to-orange-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="text-red-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-white">74</h2>
              <p className="leading-relaxed text-white">Files</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="px-4 py-6 rounded-lg shadow-lg  hover:-translate-y-2 bg-gradient-to-r from-yellow-400 to-orange-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="text-red-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-white">46</h2>
              <p className="leading-relaxed text-white">Places</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
