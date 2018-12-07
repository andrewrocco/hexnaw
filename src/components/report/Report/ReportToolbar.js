import React from 'react';
import PropTypes from 'prop-types';

export class ReportToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHelpVisible: false,
      isShowingPassingColors: false,
    };
    this.toggleHelpWindow = this.toggleHelpWindow.bind(this);
  }

  toggleHelpWindow() {
    this.setState(state => ({
      isHelpVisible: !state.isHelpVisible,
    }));
  }

  render() {
    const { nawCount, togglePassingColors, yeahCount } = this.props;
    const { isHelpVisible } = this.state;

    return (
      <div>
        <div>
          <span>Yeah {yeahCount}</span>
          <span>Naw {nawCount}</span>
          <span>Show only passing colors</span>
          <button type="button" onClick={togglePassingColors}>Toggle</button>
          <button type="button" onClick={this.toggleHelpWindow}>Help</button>
        </div>
        {isHelpVisible && (
          <div>
            <div>
              <h3>Contrast Ratio</h3>
              <p>The contrast ratio is the difference in luminance between the two colors.</p>
            </div>
            <div>
              <h3>Large Text</h3>
              <p>Large text is defined as 18px bold text or larger, or 24px regular text or larger..</p>
            </div>
            <div>
              <h3>Small Text</h3>
              <p>Small text is defined as 17px bold text or smaller, or 23px regular text or smaller.</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

ReportToolbar.defaultProps = {
  nawCount: 0,
  yeahCount: 0,
};

ReportToolbar.propTypes = {
  nawCount: PropTypes.number,
  togglePassingColors: PropTypes.func,
  yeahCount: PropTypes.number,
};
