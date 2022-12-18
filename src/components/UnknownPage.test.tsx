import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UnknownPage from './UnknownPage';

describe('<UnknownPage />', () => {
  test('it should mount', () => {
    render(<UnknownPage />);
    
    const unknownPage = screen.getByTestId('UnknownPage');

    expect(unknownPage).toBeInTheDocument();
  });
});