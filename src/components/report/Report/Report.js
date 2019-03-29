import React from 'react';

import { ReportToolbar } from './ReportToolbar';
import { ReportTable } from './ReportTable';

export const Report = ({ colorResults }) => {
  return (
    <div>
      <ReportToolbar />
      <ReportTable />
    </div>
  );
}
