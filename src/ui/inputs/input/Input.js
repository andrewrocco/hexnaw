import React from 'react';
import styled from 'styled-components';

import { colorVariables, spacing, typography } from 'ui/base';
import { Icon } from 'ui/icons';

const StyledClose = styled.button`
  appearance: none;
  background: none;
  border: 0;
  cursor: pointer;
  height: 20px;
  padding: 4px;
  position: absolute;
  right: ${spacing.medium};
  top: 50%;
  transform: translateY(-50%);
  width: 20px;

  svg {
    fill: ${colorVariables.inputClose};
    transition: fill .25s ease-in-out;
  }

  &:hover svg {
    fill: ${colorVariables.inputCloseHover};
  }
`;

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
  padding: ${spacing.medium};
  position: relative;

  &:after {
    content: "";
    background: ${p => p.hexValue};
    bottom: 0;
    height: 3px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

const getValidHex = value => (
  (/^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/).test(value)
    ? `#${value}`
    : 'transparent'
);

export const Input = ({ field, onRemove, ...props }) => (
  <StyledWrap hexValue={getValidHex(field.value)}>
    <StyledInput
      autoComplete="off"
      autoCapitalize="off"
      spellCheck="false"
      type="text"
      {...field}
      {...props}
    />
    <StyledLabel htmlFor={field.name}>#</StyledLabel>
    {onRemove && (
      <StyledClose type="button" onClick={onRemove}>
        <Icon icon="Close" />
      </StyledClose>
    )}
  </StyledWrap>
);
