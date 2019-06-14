import styled from 'styled-components';

export const StyledLink = styled.a`
  background: #0201fe;
  background: linear-gradient(to right,  #0201fe 0%,#0201fe 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  color: #fff;
  display: block;
  font-size: 12px;
  letter-spacing: 2px;
  padding: 23px 0;
  position: relative;
  text-transform: uppercase;
  width: 100%;
  z-index: 1;

  &:after {
    background: #0201fe; /* Old browsers */
    background: linear-gradient(to right,  #0201fe 0%,#e40069 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    content: "";
    height: 100%;
    left: 0;
    transition: opacity .25s ease-in-out;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
  }

  .share-text {
    position: relative;
    z-index: 3;
  }

  &:hover {
    color: #fff;

    &:after {
      opacity: 0;
    }
  }
`;
