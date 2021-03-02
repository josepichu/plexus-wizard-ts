import React, { FC } from 'react';

// components
import WizardHeader from './WizardHeader';
import WizardStep from './WizardStep';
import WizardFooter from './WizardFooter';

// assets
import './index.scss';

// models
import { Step } from '../../../models/Wizard/Step';

interface WizardProps {
  initActiveStep?: number;
  steps: Step[];
}

const Wizard: FC<WizardProps> = ({ steps, initActiveStep }) => {
  const [activeStep, setActiveStep] = React.useState(initActiveStep || 0);

  return (
    <section className='wizard-main'>
      <WizardHeader steps={steps} activeStep={activeStep} />
      {steps.map((step: Step, stepIndex: number) => (
        <WizardStep key={step.id} stepIndex={stepIndex} activeStep={activeStep} />
      ))}
      <WizardFooter steps={steps} activeStep={activeStep} />
    </section>
  );
};

Wizard.defaultProps = {
  initActiveStep: 0,
};

export default Wizard;
