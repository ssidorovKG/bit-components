import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeader } from './header.composition';

it('should render with the correct text', () => {
  const element = render(<BasicHeader />);
  const titles = element.baseElement.getElementsByClassName('titles')[0];
  const text = titles.getElementsByTagName('h1')[0].innerHTML;
  expect(text).toBe('Title of the Page');
});
