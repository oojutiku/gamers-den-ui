import { withAuthenticator } from '@aws-amplify/ui-react';
import React, { FC } from 'react';


interface DenProps {}

const Den: FC<DenProps> = () => (
  <div data-testid="Den">
    Den Component
  </div>
);

export default withAuthenticator(Den);
