import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { Box, Flex } from 'reflexbox/styled-components';

import { testColors } from 'utils';
import { Heading } from 'ui/typography';
import { Button, Input } from 'ui/inputs';
import { Icon } from 'ui/icons';

import * as Styled from './ColorForm.styles';

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
    this.initialValues = getInitialValues(props.maxInputs);
    this.initialState = {
      colorCount: 0,
      colorResults: {},
      hexInputNames: getInitialInputNames(this.initialValues),
      isAddButtonDisabled: true,
      isSubmitButtonDisabled: true,
      hexInputValues: [],
    };

    this.state = this.initialState;

    this.handleResetProxy = null;
    this.setFieldValueProxy = null;

    this.addHexInput = this.addHexInput.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleFieldRemove = this.handleFieldRemove.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePaste = this.handlePaste.bind(this);
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
    this.setState({ ...this.initialState });
    this.handleResetProxy();
  }

  handlePaste(event, index) {
    event.persist();
    event.preventDefault();

    let pasteData;
    if (window.clipboardData && window.clipboardData.getData) {
      pasteData = window.clipboardData.getData('Text');
    } else if (event.clipboardData && event.clipboardData.getData) {
      pasteData = event.clipboardData.getData('text/plain');
    }

    // remove the hash
    const cleanValue = pasteData.replace('#', '');

    // set the new value
    const id = `hex${index}`;
    this.setFieldValueProxy(id, cleanValue);
  }

  handleFieldRemove(index) {
    return index < 2
      ? null
      : () => {
        const id = `hex${index}`;
        this.setFieldValueProxy(id, '');
        this.setState(({ hexInputNames }) => ({
          hexInputNames: [
            ...hexInputNames.slice(0, index),
            ...hexInputNames.slice(index + 1),
          ],
        }));
      };
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
    const { onSubmit } = this.props;

    actions.setSubmitting(false);

    // get valid user-added hex values
    const hexValues = Object.values(values).filter(value => value !== '');

    this.setState({ hexInputValues: hexValues });

    onSubmit(testColors(values));
  }

  render() {
    const {
      colorCount,
      hexInputNames,
      isAddButtonDisabled,
      isSubmitButtonDisabled,
      hexInputValues,
    } = this.state;

    const { maxInputs } = this.props;
    const splitHexValues = hexInputValues.join('/');

    return (
      <Styled.FormContainer m={4}>
        <Styled.FormInnerWrap m="0 auto" px={4} py={6}>
          <Formik
            initialValues={this.initialValues}
            validate={this.handleValidation}
            onSubmit={this.handleSubmit}
            render={({ handleReset, isSubmitting, setFieldValue }) => {
              // This allows us to reset the form from our custom resetForm method
              this.handleResetProxy = handleReset;
              this.setFieldValueProxy = setFieldValue;

              return (
                <Fragment>
                  <Flex
                    alignItems="center"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    mb={4}
                  >
                    <Box
                      flex={['1 0 auto', '0 1 auto']}
                      width={[1, 'auto']}
                    >
                      <Heading level={2} size="small">
                        Enter Your Hex Values
                      </Heading>
                    </Box>
                    <Box
                      flex={['1 0 auto', '0 1 auto']}
                      width={[1, 'auto']}
                    >
                      <Styled.FormToolbar
                        justifyContent="space-between"
                        mt={[4, 0]}
                      >
                        <span>{`${colorCount} / ${maxInputs} Colors`}</span>
                        <Styled.FormClearButton
                          mode="none"
                          type="button"
                          onClick={this.resetForm}
                        >
                          <span>Clear All</span>
                          <Icon icon="Close" />
                        </Styled.FormClearButton>
                      </Styled.FormToolbar>
                    </Box>
                  </Flex>
                  <Form>
                    <Flex mx={-2} flexWrap="wrap">
                      {hexInputNames.map((hexName, i) => (
                        <Box key={hexName} mb={3} px={2} width={[1, 1 / 3]}>
                          <Field
                            component={Input}
                            id={hexName}
                            maxLength="6"
                            name={hexName}
                            onPaste={e => this.handlePaste(e, i)}
                            onRemove={this.handleFieldRemove(i)}
                            placeholder={i === 0 ? 'FFFFFF' : '000000'}
                          />
                        </Box>
                      ))}
                      <Box mb={3} px={2} width={[1, 1 / 3]}>
                        <Button
                          disabled={isAddButtonDisabled}
                          mode="inverse"
                          onClick={this.addHexInput}
                          text="Add"
                          type="button"
                          style={{ height: 67, width: '100%' }}
                        />
                      </Box>
                    </Flex>
                    <Styled.SubmitWrapper mt={5}>
                      <Button
                        disabled={isSubmitting || isSubmitButtonDisabled}
                        text="Test Colors"
                        type="submit"
                        style={{ height: 67, width: 200 }}
                      />
                    </Styled.SubmitWrapper>
                  </Form>
                </Fragment>
              );
            }}
          />
          {splitHexValues.length > 0
            && (
              <Flex pt={6}>
                <form style={{ width: '100%' }}>
                  <Styled.URLInputLabel>
                    <Box mb={[2, 0]} width={[1, 1 / 5]} alignSelf="center">
                      <span>Share this test:</span>
                    </Box>
                    <Box width={[1, 4 / 5]}>
                      <Styled.URLInput
                        readOnly
                        value={`https://hexnaw.com/hex/${splitHexValues}`}
                        type="text"
                      />
                    </Box>
                  </Styled.URLInputLabel>
                </form>
              </Flex>
            )
          }
        </Styled.FormInnerWrap>
      </Styled.FormContainer>
    );
  }
}

ColorForm.propTypes = {
  maxInputs: PropTypes.number,
  onSubmit: PropTypes.func,
};
