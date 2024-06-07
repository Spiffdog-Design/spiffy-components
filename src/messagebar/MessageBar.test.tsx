import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MessageBar from './MessageBar';

describe('Button component', () => {
  it('Button should render correctly', () => {
    render(<MessageBar />);
    const messageBar = screen.getByRole('div');
    expect(messageBar).toBeInTheDocument();
  });
});
