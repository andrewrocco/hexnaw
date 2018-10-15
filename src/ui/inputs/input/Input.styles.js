import styled from 'styled-components';
import { colorVariables, spacing, typography } from 'ui/base';

export const StyledClose = styled.button`
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

export const StyledInput = styled.input`
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

export const StyledLabel = styled.label`
  ${typography.input}

  color: ${colorVariables.inputPrefix};
  left: ${spacing.medium};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: color .25s ease-in-out;
`;

export const StyledWrap = styled.div`
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
