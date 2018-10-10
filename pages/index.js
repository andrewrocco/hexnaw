import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import { ColorForm } from 'components/report';
import { AppHead } from 'components/layout';
import { Header } from 'ui/navigation';
import { theme } from 'ui/base';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorResults: {},
    };
  }

  render() {
    const { colorResults } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <AppHead />
          <Header />
          <ColorForm
            maxInputs={12}
            onSubmit={(results) => {
              this.setState({ colorResults: results });
            }}
          />
          <pre>{JSON.stringify(colorResults, null, 2)}</pre>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default Index;
