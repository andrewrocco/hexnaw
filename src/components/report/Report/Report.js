import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'reflexbox/styled-components';

import { ReportToolbar } from './ReportToolbar';
import { ReportTable } from './ReportTable';

const getResultCounts = (colorResults) => {
  let yeahCount = 0;
  let nawCount = 0;

  colorResults.forEach(result => (
    result.combinations.forEach((combo) => {
      if (!combo.accessibility.aa || !combo.accessibility.aaLarge || !combo.accessibility.aaa || !combo.accessibility.aaaLarge) {
        nawCount += 1;
      } else {
        yeahCount += 1;
      }
    })
  ));

  return { yeahCount, nawCount };
};

export const Report = (props) => {
  const [showPassingOnly, setShowPassingOnly] = useState(false);
  const { colorResults } = props;
  const { yeahCount, nawCount } = getResultCounts(colorResults);

  return (
    <div>
      {colorResults.length >= 1 && (
        <ReportToolbar
          togglePassingColors={() => setShowPassingOnly(!showPassingOnly)}
          isShowingPassing={showPassingOnly}
          yeahCount={yeahCount}
          nawCount={nawCount}
        />
      )}
      <Box m={4}>
        {colorResults.map((result, i) => (
          <ReportTable
            // eslint-disable-next-line react/no-array-index-key
            key={`ResultTable-${i}`}
            result={result}
            isShowingPassing={showPassingOnly}
          />
        ))}
      </Box>
    </div>
  );
};

Report.propTypes = {
  colorResults: PropTypes.array,
};

Report.defaultProps = {
  colorResults: [],
};
