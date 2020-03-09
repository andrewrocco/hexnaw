import React from 'react';
import { Button } from 'ui/inputs';
import 'jest-styled-components';

import { modeStyles } from './Button.styles';

describe('Button', () => {
  context('when nothing specified', () => {
    it('renders correctly', () => {
      const subject = mount(<Button>Click it</Button>);
      expect(subject).toMatchSnapshot();
    });

    it('renders styles for "primary" mode', () => {
      const subject = mount(<Button>Click it</Button>);
      expect(subject).toHaveStyleRule('background', modeStyles.primary.enabled.background);
    });
  });

  context('when mode is specific', () => {
    it('renders mode-specific styles', () => {
      Object.keys(modeStyles).map((mode) => {
        const subject = mount(<Button mode={mode} text={mode} />);
        expect(subject).toHaveStyleRule('background', modeStyles[mode].enabled.background);
      });
    });
  });

  context('when disabled is true', () => {
    it('renders mode-specific disabled styles', () => {
      Object.keys(modeStyles).map((mode) => {
        const subject = mount(<Button disabled mode={mode} text={mode} />);
        expect(subject).toHaveStyleRule('background', modeStyles[mode].disabled.background);
      });
    });

    it('clicks do not fire the onClick function', () => {
      const onClick = jest.fn();
      const subject = mount(<Button onClick={onClick} disabled>Click Me</Button>);
      subject.simulate('click');
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });

  context('when you click it', () => {
    it('fires the onClick function', () => {
      const onClick = jest.fn();
      const subject = mount(<Button onClick={onClick}>Click Me</Button>);
      subject.simulate('click');
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
