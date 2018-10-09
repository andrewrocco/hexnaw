import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

import testColors from '../../utils/testColors';

const getInitialValues = (num) => {
  const initial = {};
  for (let i = 0; i < num; i += 1) {
    initial[`hex${i}`] = '';
  }
  return initial;
};

const getInitialInputNames = inputValues => Object
  .keys(inputValues)
  .slice(0, 2);

export class ColorForm extends Component {
  constructor(props) {
    super(props);

    // We need to set all possible input values up front or else
    // generated inputs will throw React's uncontrolled input error.
    // https://jaredpalmer.com/formik/docs/api/formik#initialvalues-values
    this.maxInputs = props.maxInputs;
    this.initialValues = getInitialValues(this.maxInputs);

    this.state = {
      colorCount: 0,
      colorResults: {},
      hexInputNames: getInitialInputNames(this.initialValues),
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
      if (document.body.innerHTML) {
        document.querySelector(`input[name="hex${hexInputNames.length - 1}"]`).focus();
      }
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
      hexInputNames: getInitialInputNames(this.initialValues),
      isAddButtonDisabled: true,
      isSubmitButtonDisabled: true,
    });

    this.handleResetProxy();
  }

  handleValidation(values) {
    const { hexInputNames } = this.state;
    const { maxInputs } = this.props;
    const validHexValues = Object.keys(values).filter(hexID => (
      (/^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/).test(values[hexID])
    ));
    const hasInvalid = validHexValues.length !== hexInputNames.length;
    const hasMaxInputs = hexInputNames.length === maxInputs;
    const notEnoughValid = validHexValues.length < 2;

    this.setState({
      colorCount: validHexValues.length,
      isAddButtonDisabled: hasMaxInputs || hasInvalid,
      isSubmitButtonDisabled: hasInvalid || notEnoughValid,
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
                  <span>{`${colorCount} / ${this.maxInputs} Colors`}</span>
                  <button type="button" onClick={this.resetForm}>
                    Clear All
                  </button>
                </div>
                <Form>
                  {hexInputNames.map((hexName, i) => (
                    <Field
                      id={hexName}
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

ColorForm.propTypes = {
  maxInputs: PropTypes.number,
};
