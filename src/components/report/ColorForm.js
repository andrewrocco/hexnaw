import React, { PureComponent } from 'react';
import { Formik, Form, Field } from 'formik';

import testColors from '../../utils/testColors';

export class ColorForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      colorCount: 0,
      colorResults: {},
    };
  }

  render() {
    const { colorCount, colorResults } = this.state;

    return (
      <div>
        <Formik
          initialValues={{ colorA: '#FFFFFF', colorB: '#000000' }}
          validate={(values) => {
            console.log(values);
          }}
          onSubmit={(values, actions) => {
            console.log(actions);
            const results = testColors(values);
            console.log(results);
          }}
          render={({ handleReset, isSubmitting }) => (
            <div>
              <div>
                {colorCount}
                / 12 Colors
                <button type="button" onClick={handleReset}>
                  Clear All
                </button>
              </div>
              <Form>
                <Field type="text" name="colorA" />
                <Field type="text" name="colorB" />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            </div>
          )}
        />
        <br />
        <pre>{JSON.stringify(colorResults, null, 2)}</pre>
      </div>
    );
  }
}
