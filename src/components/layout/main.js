import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { initGA, logPageView } from 'utils/analytics';

export default class Layout extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.array,
};
