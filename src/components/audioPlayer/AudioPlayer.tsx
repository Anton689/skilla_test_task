import React, { useEffect } from 'react';

import { recordsAPI } from '../../api/recordsAPI';
import { ReturnComponentType } from '../../types';

export const AudioPlayer = (): ReturnComponentType => {
  useEffect(() => {
    recordsAPI.fetchRecords({
      record: 'MToxMDA2NzYxNToxNDMwMDM3NzExNzow',
      partnership_id: '578',
    });
  }, []);

  return <div />;
};
