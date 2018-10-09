import React from 'react';
import PropTypes from 'prop-types';

import { headingSizes, headingColors, headingElements } from './Heading.styles';

export const Heading = ({ children, color, level, size, ...others }) => {
  const HeadingElement = headingElements[`h${level}`];

  return (
    <HeadingElement
      color={color}
      size={size}
      {...others}
    >
      {children}
    </HeadingElement>
  );
};

export const HeadingColors = Object.keys(headingColors);
export const HeadingLevels = [1, 2, 3, 4, 5, 6];
export const HeadingSizes = Object.keys(headingSizes);

Heading.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(HeadingColors),
  level: PropTypes.oneOf(HeadingLevels),
  size: PropTypes.oneOf(HeadingSizes),
};

Heading.defaultProps = {
  color: 'dark',
  level: 2,
  size: 'medium',
};
