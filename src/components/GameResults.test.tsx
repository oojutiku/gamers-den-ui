import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GameResults from './GameResults';

describe('<GameResults />', () => {
  test('it should mount', () => {
    render(<GameResults />);
    
    const gameResults = screen.getByTestId('GameResults');

    expect(gameResults).toBeInTheDocument();
  });
});