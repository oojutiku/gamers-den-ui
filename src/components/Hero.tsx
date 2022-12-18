import React, { FC } from 'react';
import pic from '../assets/controller-gb662aa2f1_1280.png'

interface HeroProps {}

const Hero: FC<HeroProps> = () => (
  <section className = "container m-auto px-4 py-32 lg:flex lg:h-screen lg:items-center justify-around">
    <div className="text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Welcome to the <br />
        <strong className="font-extrabold text-red-700 sm:block">
          Gamer's Den.
        </strong>
      </h1>

      <p className="mt-4 sm:text-xl sm:leading-relaxed">
        The premier game database and organizer
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-red-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-red-800 border shadow hover:text-red-900 focus:outline-none focus:ring active:text-red-900 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
    <img src={pic} className="hidden lg:block h-full" title='Image by manpinder maan from Pixabay' alt='a controller'></img>
  </section>
);

export default Hero;
