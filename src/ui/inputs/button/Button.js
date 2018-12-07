import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Button.styles';

export const Button = ({
  children,
  className,
  disabled,
  mode,
  onClick,
  text,
  type,
  ...others
}) => (
  <Styled.Button
    disabled={disabled}
    hasText={Boolean(text)}
    mode={mode}
    className={className}
    onClick={onClick}
    type={type}
    {...others}
  >
    {text || children}
  </Styled.Button>
);

const ButtonModes = ['inverse', 'none', 'primary'];

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  mode: PropTypes.oneOf(ButtonModes),
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  mode: 'primary',
  type: 'button',
};
