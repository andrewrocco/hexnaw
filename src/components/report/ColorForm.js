import React, { PureComponent } from 'react';
import { Formik, Form, Field } from 'formik';

import testColors from '../../utils/testColors';

export class ColorForm extends PureComponent {
  constructor(props) {
    super(props);

    this.initialValues = { hex0: '', hex1: '' };

    this.state = {
      colorCount: 0,
      colorResults: {},
      hexInputNames: Object.keys(this.initialValues),
    };

    this.handleResetProxy = null;
    this.addHexInput = this.addHexInput.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  addHexInput(e) {
    e.preventDefault();
    this.setState(({ hexInputNames }) => ({
      hexInputNames: [
        ...hexInputNames,
        `hex${hexInputNames.length}`,
      ],
    }));
  }

  resetForm() {
    this.setState({ hexInputNames: Object.keys(this.initialValues) });
    this.handleResetProxy();
  }

  render() {
    const { colorCount, colorResults, hexInputNames } = this.state;

    return (
      <div>
        <Formik
          initialValues={this.initialValues}
          validate={(values) => {
            console.log(values);
          }}
          onSubmit={(values, actions) => {
            console.log(actions);
            const results = testColors(values);
            console.log(results);
            actions.setSubmitting(false);
          }}
          render={({ handleReset, isSubmitting }) => {
            // This allows us to reset the form from our custom resetForm method
            this.handleResetProxy = handleReset;

            return (
              <div>
                <div>
                  {colorCount}
                  / 12 Colors
                  <button type="button" onClick={this.resetForm}>
                    Clear All
                  </button>
                </div>
                <Form>
                  {hexInputNames.map((hexName, i) => (
                    <Field
                      maxLength="6"
                      name={hexName}
                      key={hexName}
                      placeholder={i === 0 ? 'FFFFFF' : '000000'}
                      type="text"
                    />
                  ))}
                  <button type="button" onClick={this.addHexInput}>
                    Add
                  </button>
                  <div>
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            )
          }}
        />
        <br />
        <pre>{JSON.stringify(colorResults, null, 2)}</pre>
      </div>
    );
  }
}
