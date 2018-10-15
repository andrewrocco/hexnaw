import React from 'react';
import { Icon } from 'ui/icons';

import {
  StyledClose,
  StyledInput,
  StyledLabel,
  StyledWrap,
} from './Input.styles';

export const getValidHex = value => (
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
