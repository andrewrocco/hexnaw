import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@rebass/grid';

import { ReportToolbar } from './ReportToolbar';
import { ReportTable } from './ReportTable';

export const Report = ({ colorResults }) => (
  <div>
    {colorResults.length >= 1 && <ReportToolbar />}
    <Box m={4}>
      {colorResults.map((result, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ReportTable key={`ResultTable-${i}`} result={result} />
      ))}
    </Box>
  </div>
);

Report.propTypes = {
  colorResults: PropTypes.array,
};

Report.defaultProps = {
  colorResults: [],
};
