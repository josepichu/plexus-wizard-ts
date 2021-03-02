import React, { FC } from 'react';
import { Step } from '../../../../models/Wizard/Step';

// assets
import './index.scss';

interface WizardStepProps {
  stepIndex: number;
  activeStep: number;
  step: Step;
  onChangeValid(step: Step): void;
}

const WizardStep: FC<WizardStepProps> = ({ stepIndex, activeStep, step, onChangeValid }) => {
  if (stepIndex !== activeStep) return null;

  return <step.component onChangeValid={onChangeValid} />;
};

export default WizardStep;
