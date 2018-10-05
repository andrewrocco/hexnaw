import React from 'react';

import { HeaderLink } from './HeaderLink';

describe('HeaderLink Component', () => {
  context('when nothing specified', () => {
    it('should render correctly', () => {
      const subject = shallow(<HeaderLink>Click Me</HeaderLink>);
      expect(subject).toMatchSnapshot();
    });
  });
});
