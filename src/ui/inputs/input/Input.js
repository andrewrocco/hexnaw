import React from 'react';
import styled from 'styled-components';

import { colorVariables, spacing, typography } from 'ui/base';

const StyledInput = styled.input`
  ${typography.input}
  
  border: 0;
  outline: none;
  margin-left: ${spacing.medium};
  text-align: left;
  width: 100%;

  &:focus + label {
    color: ${colorVariables.inputPrefixFocus};
  }
`;

const StyledLabel = styled.label`
  ${typography.input}

  color: ${colorVariables.inputPrefix};
  left: ${spacing.medium};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: color .25s ease-in-out;
`;

const StyledWrap = styled.div`
  background: ${colorVariables.inputBackground};
  border-bottom: 3px solid ${p => p.hexValue};
  padding: ${spacing.medium};
  position: relative;
`;

const getValidHex = value => (
  (/^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/).test(value)
    ? `#${value}`
    : 'transparent'
);

export const Input = ({ field, form, ...props }) => {
  return (
    <StyledWrap hexValue={getValidHex(field.value)}>
      <StyledInput
        autoComplete="off"
        autoCapitalize="off"
        type="text"
        {...field}
        {...props}
      />
      <StyledLabel htmlFor={field.name}>#</StyledLabel>
    </StyledWrap>
  );
};
