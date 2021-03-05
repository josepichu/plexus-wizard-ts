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
  const isLastStep = activeStep === steps.length - 1;
  return (
    <>
      {!isLastStep && (
        <div className='wizard-header'>
          <div className='steps'>
            {steps.map((step: Step, stepIndex: number) => {
              return (
                <div
                  key={`wizard-header-${step.id}`}
                  className={`step ${activeStep === stepIndex ? 'active' : ''} ${activeStep > stepIndex ? 'done' : ''}`}
                >
                  <span>{activeStep > stepIndex ? '✓' : stepIndex + 1}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default WizardHeader;
