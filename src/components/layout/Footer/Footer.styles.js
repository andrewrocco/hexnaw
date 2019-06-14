import styled from 'styled-components';
import { fonts } from 'ui/base';


export const Footer = styled.div`
  ${fonts.primaryMedium};
  background: #000;
  color: #fff;
  text-align: center;

  .footer-nav-list {
    list-style: none;
    /* margin: 40px auto; */
    margin: 0 auto;
    max-width: 940px;
    padding: 40px 0;

    &:hover {
      .footer-nav-list-link {
        color: rgba(255,255,255,.4);

        &:hover {
          color: #fff;
        }
      }
    }
  }

  .footer-nav-list-item {
    display: block;
    @media only screen and (min-width: 650px) { display: inline-block; }
  }

  .footer-nav-list-link {
    color: #fff;
    display: inline-block;
    font-size: 12px;
    letter-spacing: 2px;
    padding: 10px 22px;
    @media only screen and (min-width: 650px) { padding: 20px 22px; }
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: #fff;
    }
  }
`;
