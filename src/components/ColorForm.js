import React, { PureComponent } from 'react';
import { Formik, Form, Field } from 'formik';

export class ColorForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      fieldNumber: 2,
    };
  }

  render() {
    return (
      <Formik
        initialValues={{ colorA: '#FFFFFF', colorB: '#000000', colorC: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={({ errors, touched, isSubmitting }) => (
          <Form>
            <Field type="text" name="colorA" />
            <Field type="text" name="colorB" />
            <Field type="text" name="colorC" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      />
    );
  }
}
