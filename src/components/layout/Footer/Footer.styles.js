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

  .copyright {
    border-top: 1px solid #2f302f;
    color: #999999;
    font-size: 10px;
    letter-spacing: 2px;
    padding: 44px;
    text-transform: uppercase;

    .footer-scenery-link {
      display: inline-block;
    }

    .scenery-logo {
      height: 20px;
      margin: 0 35px;
      width: 30px;

      path {
        fill: #999999;
      }
    }

    span {
      display: block;
      @media only screen and (min-width: 650px) { display: inline-block; }
      margin: 20px 0;
      @media only screen and (min-width: 650px) { margin: 0; }
    }
  }
`;
