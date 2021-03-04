import React, { FC } from 'react';

// models
import { Step } from '../../../../models/Wizard/Step';

// assets
import './index.scss';

interface WizardHeaderProps {
  activeStep: number;
  steps: Step[];
}

const WizardHeader: FC<WizardHeaderProps> = ({ steps, activeStep }) => {
  return (
    <div className='wizard-header'>
      <div className='steps'>
        {steps.map((step: Step, stepIndex: number) => {
          return (
            <div key={`wizard-header-${step.id}`} className={'step ' + (activeStep === stepIndex ? 'active' : '')}>
              <span>{stepIndex + 1}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WizardHeader;
