import React, { PureComponent } from 'react';
import { Formik, Form, Field } from 'formik';

import testColors from '../utils/testColors';

export class ColorForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      fieldNumber: 2,
      colorResults: {},
    };
  }

  addField() {
    this.setState({ fieldNumber: this.state.fieldNumber ++ });
  }

  removeField() {
    this.setState({ fieldNumber: this.state.fieldNumber-- });
  }

  render() {
    const { colorResults } = this.state;

    return (
      <div>
        <Formik
          initialValues={{ colorA: '#FFFFFF', colorB: '#000000', colorC: '' }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              const results = testColors(values);

              this.setState({ colorResults: results });
            }, 1000);
          }}
          render={({ errors, touched, isSubmitting }) => (
            <Form>
              <Field type="text" name="colorA" />
              <Field type="text" name="colorB" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        />
        <br />
        <pre>{JSON.stringify(colorResults, null, 2)}</pre>
      </div>
    );
  }
}
