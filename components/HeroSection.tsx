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
    </section>
  );
};

export default HeroSection;
