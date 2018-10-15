import React from 'react';
import PropTypes from 'prop-types';

import { paths } from './paths';

export const Icon = ({ fill, icon }) => (
  <svg fill={fill} viewBox={paths[icon].viewbox}>
    {paths[icon].path}
  </svg>
);

Icon.propTypes = {
  fill: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(paths)),
};
