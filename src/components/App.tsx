import React from 'react';
import FeatureStrip from './FeatureStrip';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';

const platforms = [
  "Playstation",
  "Steam",
  "Nintendo",
  "Xbox"
]

const genres = [
  "Simulation",
  "Action",
  "Adventure",
  "Fighting"
]

const price = [
  "Free to Play",
  "< $10",
  "< $30>",
  "< $100"
]

const players = [
  "Singleplayer",
  "Two player",
  "Four players",
  "Greater than 4"
]

function App() {
  return (
    <div className='bg-gray-50 dark:bg-slate-900 dark:text-white'>
      <Header />
      <main>
        <Hero />
        <FeatureStrip title='Platforms' tiles={platforms} right={false} />
        <FeatureStrip title='Genres' tiles={genres} right={true} />
        <FeatureStrip title='Price' tiles={price} right={false} />
        <FeatureStrip title='Players' tiles={players} right={true} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
