/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

export const FooterNav = () => (
  <ul className="footer-nav-list">
    <li className="footer-nav-list-item">
      <Link href="/">
        <a className="footer-nav-list-link">Hex Naw</a>
      </Link>
    </li>
    <li className="footer-nav-list-item">
      <Link href="/about">
        <a className="footer-nav-list-link">About</a>
      </Link>
    </li>
  </ul>
);
