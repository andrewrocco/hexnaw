import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@rebass/grid';

import { ReportToolbar } from './ReportToolbar';
import { ReportTable } from './ReportTable';

export class Report extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showPassingOnly: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    console.log('clicked');
  }

  render() {
    const { colorResults } = this.props;
    const { showPassingOnly } = this.state;

    return (
      <div>
        {colorResults.length >= 1 && (
          <ReportToolbar
            togglePassingColors={this.handleToggle}
            isShowingPassing={showPassingOnly}
          />
        )}
        <Box m={4}>
          {colorResults.map((result, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <ReportTable key={`ResultTable-${i}`} result={result} />
          ))}
        </Box>
      </div>
    );
  }
}

Report.propTypes = {
  colorResults: PropTypes.array,
};

Report.defaultProps = {
  colorResults: [],
};
