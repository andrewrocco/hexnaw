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
      isAddButtonDisabled: true,
      isSubmitButtonDisabled: true,
    };

    this.handleResetProxy = null;
    this.addHexInput = this.addHexInput.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { hexInputNames } = this.state;

    if (prevState.hexInputNames.length < hexInputNames.length) {
      document.querySelector(`[name="hex${hexInputNames.length - 1}"]`).focus();
    }
  }

  addHexInput(e) {
    e.preventDefault();
    this.setState(({ hexInputNames }) => ({
      hexInputNames: [
        ...hexInputNames,
        `hex${hexInputNames.length}`,
      ],
      isAddButtonDisabled: true,
      isSubmitButtonDisabled: true,
    }));
  }

  resetForm() {
    this.setState({
      colorCount: 0,
      hexInputNames: Object.keys(this.initialValues),
      isAddButtonDisabled: true,
      isSubmitButtonDisabled: true,
    });

    this.handleResetProxy();
  }

  handleValidation(values) {
    const { hexInputNames } = this.state;
    const validHexValues = Object.keys(values).filter(hexID => (
      (/^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/).test(values[hexID])
    ));
    const hasInvalid = validHexValues.length !== hexInputNames.length;
    const notEnough = validHexValues.length < 2;

    this.setState({
      colorCount: validHexValues.length,
      isAddButtonDisabled: hasInvalid,
      isSubmitButtonDisabled: hasInvalid || notEnough,
    });
  }

  handleSubmit(values, actions) {
    actions.setSubmitting(false);
    this.setState({ colorResults: testColors(values) });
  }

  render() {
    const {
      colorCount,
      colorResults,
      hexInputNames,
      isAddButtonDisabled,
      isSubmitButtonDisabled,
    } = this.state;

    return (
      <div>
        <Formik
          initialValues={this.initialValues}
          validate={this.handleValidation}
          onSubmit={this.handleSubmit}
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
                  <button
                    disabled={isAddButtonDisabled}
                    onClick={this.addHexInput}
                    type="button"
                  >
                    Add
                  </button>
                  <div>
                    <button
                      disabled={isSubmitting || isSubmitButtonDisabled}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            );
          }}
        />
        <br />
        <pre>{JSON.stringify(colorResults, null, 2)}</pre>
      </div>
    );
  }
}
