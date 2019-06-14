import React from 'react';
import PropTypes from 'prop-types';

import { StyledTable } from './Report.styles';

const getScore = (aaTest, aaaTest) => {
  let resultString = '';

  // if only lower score passes
  if (aaTest && !aaaTest) resultString = 'AA';

  // if both pass
  if (aaTest && aaaTest) resultString = 'AAA';

  // if neither pass (lower scores are enough)
  if (!aaTest || !aaaTest) resultString = 'NAW';

  return resultString;
};

export const ReportTable = ({ result }) => {
  const { hex, combinations } = result;

  console.table(combinations);

  return (
    <StyledTable aria-live="assertive">
      <thead>
        <tr>
          <th className="result-table-header hex-value">{hex}</th>
          <th className="result-table-header">
            <span className="mobile-label">C</span>
            <span className="desktop-label">Contrast Ratio</span>
          </th>
          <th className="result-table-header">
            <span className="mobile-label">L</span>
            <span className="desktop-label">Large Text</span>
          </th>
          <th className="result-table-header">
            <span className="mobile-label">S</span>
            <span className="desktop-label">Small Text</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {combinations.map((combo, i) => {
          const { accessibility, contrast, hex: hexValue } = combo;

          return (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={`${hexValue}-${i}`}>
              <td className="result-table-data hex-value">{hexValue}</td>
              <td className="result-table-data">{contrast}</td>
              <td className="result-table-data">
                {getScore(accessibility.aaLarge, accessibility.aaaLarge)}
              </td>
              <td className="result-table-data">
                {getScore(accessibility.aa, accessibility.aaa)}
              </td>
            </tr>
          )
        })}
      </tbody>
    </StyledTable>
  );
};

ReportTable.propTypes = {
  result: PropTypes.shape({
    hex: PropTypes.string,
    combinations: PropTypes.array,
  }),
};
