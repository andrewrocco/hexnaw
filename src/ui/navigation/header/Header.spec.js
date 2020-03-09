import React from 'react';
import 'jest-styled-components';

import { Header } from './Header';

describe('Header Component', () => {
  context('when nothing specified', () => {
    it('should render correctly', () => {
      const subject = shallow(<Header />);
      expect(subject).toMatchSnapshot();
    });
  });
});
