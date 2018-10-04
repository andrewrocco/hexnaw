import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export const AppHead = ({ pageTitle }) => {
  // add a pipe to a non-blank title
  let newPageTitle = '';
  if (pageTitle !== '') newPageTitle = `${pageTitle} |`;

  return (
    <Head>
      <title>{`Hex Naw | ${newPageTitle} A color accessibility tool for designers and developers.`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

AppHead.propTypes = {
  pageTitle: PropTypes.string,
};

AppHead.defaultProps = {
  pageTitle: '',
};
