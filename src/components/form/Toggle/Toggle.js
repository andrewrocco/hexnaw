import React from 'react';
import PropTypes from 'prop-types';

import { ToggleContainer } from './Toggle.styles';

export const Toggle = ({ onClick }) => (
  <ToggleContainer onClick={onClick}>Toggle</ToggleContainer>
);

Toggle.propTypes = {
  onClick: PropTypes.func,
};
