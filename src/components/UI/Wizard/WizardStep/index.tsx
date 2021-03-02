import React, { FC } from 'react';

// assets
import './index.scss';

interface WizardStepProps {
  stepIndex: number;
  activeStep: number;
}

const WizardStep: FC<WizardStepProps> = ({ stepIndex, activeStep }) => {
  if (stepIndex !== activeStep) return null;

  return <>step `${stepIndex}`</>;
};

export default WizardStep;
