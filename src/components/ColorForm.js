import React, { PureComponent } from 'react';
import { Formik, Form, Field } from 'formik';

import testColors from '../utils/testColors';

export class ColorForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      fieldNumber: 2,
    };
  }

  addField() {
    this.setState({ fieldNumber: this.state.fieldNumber ++ });
  }

  removeField() {
    this.setState({ fieldNumber: this.state.fieldNumber-- });
  }

  render() {
    return (
      <Formik
        initialValues={{ colorA: '#FFFFFF', colorB: '#000000', colorC: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            testColors(values);
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
    );
  }
}
