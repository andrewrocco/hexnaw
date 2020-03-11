import React from 'react';
import { Input, getValidHex } from './Input';
import 'jest-styled-components';

describe('Input', () => {
  const onRemove = jest.fn();
  const subject = mount(
    <Input
      field={{ value: 'fff' }}
      onChange={() => {}}
      onRemove={onRemove}
    />
  );

  context('when nothing specified', () => {
    it('should render correctly', () => {
      expect(subject).toMatchSnapshot();
    });
  });

  context('getValidHex helper', () => {
    it('returns valid hex value with # prefix', () => {
      expect(getValidHex('bbb')).toBe('#bbb');
    });

    it('returns "transparent" if hex value is invalid', () => {
      expect(getValidHex('meh')).toBe('transparent');
    });
  });

  // TODO: re-enable after version bump of jest-styled-components
  // context('when hexValue is passed', () => {
  //   it('renders the hex value in the after pseudo selector', () => {
  //     expect(subject.find('div').first()).toHaveStyleRule('background', '#fff', {
  //       modifier: ':after',
  //     });
  //   });
  // });

  context('when onRemove function is passed', () => {
    it('renders the close button', () => {
      expect(subject.find('button')).toHaveLength(1);
    });

    it('calls onRemove function when close button is clicked', () => {
      subject.find('button').simulate('click');
      expect(onRemove).toHaveBeenCalledTimes(1);
    });
  });
});
