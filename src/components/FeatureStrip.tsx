import React, { FC } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

interface FeatureStripProps {
  title: string,
  tiles: string[],
  right: boolean
}

const FeatureStrip: FC<FeatureStripProps> = (props: FeatureStripProps) => (
  <section>
    <div className='container px-6 py-10 mx-auto'>
      <h2 className={`text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white ${props.right? 'text-right':''}`}>
        explore by <br />
        <span className="text-6xl text-red-700 font-serif">{props.title}</span>
      </h2>
      <p className={`mt-4 text-gray-500 xl:mt-6 dark:text-gray-300 ${props.right? 'text-right':''}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
      </p>
      <Carousel responsive={responsive} autoPlay={true} infinite={true} centerMode={true}>
        {props.tiles.map(p =>
          <a key={p} href="/"
            className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-900 to-rose-700 
            h-72 mr-8 mt-8 p-8 space-y-3 border-2 border-red-400 dark:border-red-300 rounded-xl flex flex-col items-center justify-center
            text-3xl font-semibold text-gray-700 uppercase dark:text-white opacity-90 hover:opacity-100">
            {p}
          </a>
        )}
      </Carousel>
    </div>
  </section>
);

export default FeatureStrip;
