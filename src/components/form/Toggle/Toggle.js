/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'ui/typography';
import { ToggleContainer } from './Toggle.styles';

export const Toggle = ({ active, label, onClick }) => (
  <ToggleContainer>
    <Text aria-hidden="true">{label}</Text>
    <input
      className="toggle-input"
      checked={active}
      id="color-toggle"
      name="color-toggle"
      onClick={onClick}
      type="checkbox"
    />
    <label aria-label={label} htmlFor="color-toggle" />
  </ToggleContainer>
);

Toggle.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
