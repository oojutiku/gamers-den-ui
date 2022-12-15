import React, { FC } from 'react';


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
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-4">
        {props.tiles.map(p =>
          <div key={p}
            className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-900 to-rose-700 
            lg:h-72 p-8 space-y-3 border-2 border-red-400 dark:border-red-300 rounded-xl flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold text-gray-700 uppercase dark:text-white">{p}</h1>
            <a href="#" className="inline-flex p-2 text-red-500 capitalize transition-colors duration-200 transform bg-red-100 rounded-full dark:bg-red-500 dark:text-white hover:underline hover:text-red-600 dark:hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default FeatureStrip;
