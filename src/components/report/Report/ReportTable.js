import React from 'react';
import PropTypes from 'prop-types';

export const ReportTable = ({ results }) => {
  return (
    <thead>
      <tr>
        <th>Hello</th>
      </tr>
    </thead>
  );
};

ReportTable.propTypes = {
  results: PropTypes.array,
};
