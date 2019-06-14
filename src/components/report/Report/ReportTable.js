import React from 'react';
import PropTypes from 'prop-types';

import { StyledTable, StyledTableBox } from './Report.styles';

const getScore = (aaTest, aaaTest) => {
  let resultNode = null;

  // if only lower score passes
  if (aaTest && !aaaTest) resultNode = <span className="passing">AA</span>;

  // if both pass
  if (aaTest && aaaTest) resultNode = <span className="passing">AAA</span>;

  // if neither pass (lower scores are enough)
  if (!aaTest || !aaaTest) resultNode = <span className="failing">Naw</span>;

  return resultNode;
};

const isBordered = color => (color === '#FFF' || color === '#FFFFFF') && 'bordered';

// eslint-disable-next-line prefer-template
const roundNumber = (value, decimals) => Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);

export const ReportTable = ({ result }) => {
  const { hex, combinations } = result;

  return (
    <StyledTableBox m="0 auto" px={4}>
      <StyledTable aria-live="assertive" style={{ borderColor: hex }}>
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
          {combinations.map((combo, i) => {
            const { accessibility, contrast, hex: comboHex } = combo;

            return (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`${comboHex}-${i}`}>
                <td className={`table-data-color ${isBordered(hex)}`} style={{ backgroundColor: hex }} />
                <td className={`table-data-color ${isBordered(comboHex)}`} style={{ backgroundColor: comboHex }} />
                <td className="result-table-data hex-value">{comboHex}</td>
                <td className="result-table-data">{roundNumber(contrast, 2)}</td>
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
    </StyledTableBox>
  );
};

ReportTable.propTypes = {
  result: PropTypes.shape({
    hex: PropTypes.string,
    combinations: PropTypes.array,
  }),
};
