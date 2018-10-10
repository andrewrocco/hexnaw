import React from 'react';
import { ColorForm } from './ColorForm';

describe('ColorForm', () => {
  let subject = null;
  let changeField = null;

  beforeEach(() => {
    subject = mount(<ColorForm maxInputs={4} />);
    changeField = (name, value) => {
      subject
        .find(`input[name="${name}"]`)
        .simulate('change', {
          persist: () => {},
          target: { name, value },
        });
    };
  });

  it('properly sets initialValues based on the max number of inputs', () => {
    const initial = { hex0: '', hex1: '', hex2: '', hex3: '' };
    expect(subject.instance().initialValues).toMatchObject(initial);
    expect(subject.state().hexInputNames).toMatchObject(['hex0', 'hex1']);
  });

  it('should increase color count state after change if change resulted in valid hex color', () => {
    expect(subject.state().colorCount).toBe(0);
    changeField('hex0', 'fff');
    expect(subject.state().colorCount).toBe(1);
    changeField('hex1', 'notHex');
    expect(subject.state().colorCount).toBe(1);
    changeField('hex1', '000');
    expect(subject.state().colorCount).toBe(2);
  });

  it('should enable the submit button only if two valid colors exist and all available inputs are valid', () => {
    expect(subject.state().isSubmitButtonDisabled).toBe(true);
    changeField('hex0', 'fff');
    expect(subject.state().isSubmitButtonDisabled).toBe(true);
    changeField('hex1', 'fff');
    expect(subject.state().isSubmitButtonDisabled).toBe(false);
  });

  it('should enable the add button only if all available inputs contain valid hex values', () => {
    expect(subject.state().isAddButtonDisabled).toBe(true);
    changeField('hex0', 'fff');
    expect(subject.state().isAddButtonDisabled).toBe(true);
    changeField('hex1', 'fff');
    expect(subject.state().isAddButtonDisabled).toBe(false);
  });

  it('adds a new hex input to the Formik wrapper when add button is clicked', () => {
    changeField('hex0', 'fff');
    changeField('hex1', 'fff');

    expect(subject.find('input[name="hex2"]')).toHaveLength(0);

    subject.find('form button[type="button"]').simulate('click');

    expect(subject.find('input[name="hex2"]')).toHaveLength(1);
  });

  it('resets the form to initial state when clear all is clicked', () => {
    expect(subject.find('input[name="hex2"]')).toHaveLength(0);

    changeField('hex0', 'fff');
    changeField('hex1', 'fff');

    subject.find('form button[type="button"]').simulate('click');

    changeField('hex2', 'fff');

    expect(subject.find('input[name="hex2"]')).toHaveLength(1);

    subject.find('button[type="button"]').first().simulate('click');

    expect(subject.find('input[name="hex2"]')).toHaveLength(0);
  });
});
