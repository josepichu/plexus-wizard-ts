import React, { FC } from 'react';
import { Step } from '../../../../models/Wizard/Step';

// assets
import './index.scss';

interface WizardFooterProps {
  activeStep: number;
  steps: Step[];
}

const WizardFooter: FC<WizardFooterProps> = () => {
  return <>footer</>;
};

export default WizardFooter;
