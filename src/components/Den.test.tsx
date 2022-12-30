import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Den from './Den';

describe('<Den />', () => {
  test('it should mount', () => {
    render(<Den />);
    
    const den = screen.getByTestId('Den');

    expect(den).toBeInTheDocument();
  });
});