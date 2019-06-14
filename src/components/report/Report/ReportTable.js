import React from 'react';
import PropTypes from 'prop-types';

import { StyledTable } from './Report.styles';

export const ReportTable = ({ result }) => {
  const { hex, combinations } = result;

  console.table(combinations);

  return (
    <StyledTable aria-live="assertive">
      <thead>
        <tr>
          <th colSpan={3} className="result-table-header hex-value">{hex}</th>
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
        {combinations.map((combo, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={`${combo.hex}-${i}`}>
            <td className="result-table-data hex-value">{combo.hex}</td>
            <td>{combo.contrast}</td>
            <td>
              {combo.accessibility.aaLarge && 'AA '}
              {combo.accessibility.aaaLarge && 'AAA'}
            </td>
            <td>
              {combo.accessibility.aa && 'AA '}
              {combo.accessibility.aaa && 'AAA'}
            </td>
          </tr>
        ))}
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
