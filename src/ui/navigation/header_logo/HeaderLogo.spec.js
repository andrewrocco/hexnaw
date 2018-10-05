import React from 'react';

import { HeaderLogo } from './HeaderLogo';

describe('HeaderLogo Component', () => {
  context('when nothing specified', () => {
    it('should render correctly', () => {
      const subject = shallow(<HeaderLogo />);
      expect(subject).toMatchInlineSnapshot();
    });
  });
});
