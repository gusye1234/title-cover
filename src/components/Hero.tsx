import React from 'react';
import Logo from '@/../public/logo.png';
import Image from 'next/image';

const Background = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl md:-top-20">
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative">
      <div className="text-center w-full">
        <h2 className="text-3xl font-bold sm:text-4xl flex flex-row justify-center items-center gap-1">
          <Image src={Logo} alt="Title Cover" width={50} height={50} />
          Cover Generate
        </h2>

        <p className=" text-zinc-500">
          Generate your cover for the title with few clicks
        </p>
      </div>
      <Background />
    </div>
  );
};

export default Hero;
