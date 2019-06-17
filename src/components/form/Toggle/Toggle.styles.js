import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: inline-block;

  input {
    display: none;

    &:checked + label {
      background: #0201FE;

      &:after {
        left: 50%;
      }
    }
  }

  label {
    background: #e4e4e4;
    border-radius: 2em;
    cursor: pointer;
    display: inline-block;
    height: 1.7em;
    margin-left: 10px;
    outline: 0;
    padding: 2px;
    position: relative;
    transition: all .4s ease;
    user-select: none;
    vertical-align: middle;
    width: 3.2em;

    &:after,
    &:before {
      content: "";
      display: block;
      height: 100%;
      position: relative;
      width: 50%;
    }

    &:after {
      background: #fff;
      border-radius: 50%;
      left: 0;
      transition: all .2s ease;
    }

    &:before {
      display: none;
    }
  }
`;
