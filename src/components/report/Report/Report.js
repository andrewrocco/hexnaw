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

  getResultMeta() {
    const { colorResults } = this.props;
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
  }

  handleToggle() {
    const { showPassingOnly } = this.state;
    this.setState({ showPassingOnly: !showPassingOnly });
  }

  render() {
    const { colorResults } = this.props;
    const { showPassingOnly } = this.state;
    const { yeahCount, nawCount } = this.getResultMeta();

    return (
      <div>
        {colorResults.length >= 1 && (
          <ReportToolbar
            togglePassingColors={this.handleToggle}
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
  }
}

Report.propTypes = {
  colorResults: PropTypes.array,
};

Report.defaultProps = {
  colorResults: [],
};
