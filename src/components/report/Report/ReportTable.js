import React from 'react';
import PropTypes from 'prop-types';

export const ReportTable = ({ result }) => {
  const { hex, combinations } = result;

  console.table(combinations);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3}>{hex}</th>
          <th><span>Contrast Ratio</span></th>
          <th><span>Large Text</span></th>
          <th><span>Small Text</span></th>
        </tr>
      </thead>
      <tbody>
        {combinations.map((combo, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={`${combo.hex}-${i}`}>
            <td>{combo.hex}</td>
            <td>{combo.contrast}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ReportTable.propTypes = {
  result: PropTypes.shape({
    hex: PropTypes.string,
    combinations: PropTypes.array,
  }),
};
