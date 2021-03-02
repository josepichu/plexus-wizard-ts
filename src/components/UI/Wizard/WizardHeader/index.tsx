import React, { FC } from 'react';

// models
import { Step } from '../../../../models/Wizard/Step';

// assets
import './index.scss';

interface WizardHeaderProps {
  activeStep: number;
  steps: Step[];
}

const WizardHeader: FC<WizardHeaderProps> = () => {
  return <>header</>;
};

export default WizardHeader;
