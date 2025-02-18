/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';

import { colorVariables } from 'ui/base';
import { StyledLink, StyledSVG } from './HeaderLogo.styles';

export const HeaderLogo = () => (
  <Link href="/" passHref>
    <StyledLink>
      <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191 27">
        <g fill={`${colorVariables.headerLogoFill}`} fillRule="evenodd">
          <path d="M21.11 9h4.505c.832 0 1.507.662 1.507 1.504v14.992c0 .83-.664 1.504-1.507 1.504h-15.02c-.832 0-1.507-.662-1.507-1.504V21h10.526c.82 0 1.496-.67 1.496-1.493V9zM.072 1.504C.072.674.735 0 1.578 0h15.02c.832 0 1.507.662 1.507 1.504v14.992c0 .83-.663 1.504-1.507 1.504H1.578c-.832 0-1.506-.662-1.506-1.504V1.504zM66.455 21.5h3.234v-5.9h5.963v5.9h3.234V6.8h-3.234v5.817H69.69V6.8h-3.235v14.7zm18.96 0h11.193v-2.877h-7.98v-3.087h6.93V12.66h-6.93V9.676h7.875V6.8H85.415v14.7zm15.957 0h3.675l3.318-5.04 3.297 5.04h3.78l-5.124-7.518 4.914-7.182h-3.675l-3.13 4.767-3.065-4.767h-3.78l4.914 7.224-5.124 7.476zm28.785 0h3.192v-9.345l7.118 9.345h2.75V6.8h-3.19v9.05l-6.89-9.05h-2.98v14.7zm18.33 0h3.297l1.344-3.297h6.216l1.344 3.297h3.38l-6.3-14.805h-2.98l-6.3 14.805zm5.796-6.153l1.953-4.767 1.953 4.767h-3.907zm18.94 6.258h2.813l3.318-9.618 3.318 9.618h2.814l5.02-14.805h-3.382l-3.045 9.954-3.298-9.996h-2.772l-3.297 9.996-3.045-9.954h-3.465l5.02 14.805z" />
        </g>
      </StyledSVG>
    </StyledLink>
  </Link>
);
