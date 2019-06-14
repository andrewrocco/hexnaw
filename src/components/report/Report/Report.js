import React from 'react';
import PropTypes from 'prop-types';

import { ReportToolbar } from './ReportToolbar';
import { ReportTable } from './ReportTable';

export const Report = ({ colorResults }) => (
  <div>
    <ReportToolbar />
    {colorResults.map((result, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <ReportTable key={`ResultTable-${i}`} result={result} />
    ))}
  </div>
);

Report.propTypes = {
  colorResults: PropTypes.array,
};

Report.defaultProps = {
  colorResults: [],
};
