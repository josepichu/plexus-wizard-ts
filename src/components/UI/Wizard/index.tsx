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

  const isLastStep = activeStep === steps.length - 1;

  React.useEffect(() => {
    console.log(activeStep);
  }, [activeStep]);

  const handleCancel = () => {
    setActiveStep(0);
  };

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  const handleNext = () => {
    setActiveStep(prevStep => prevStep + 1);
  };

  const handleValid = (step: Step) => {
    console.log(step);
  };

  return (
    <section className='wizard-main'>
      <WizardHeader steps={steps} activeStep={activeStep} />
      {steps.map((step: Step, stepIndex: number) => (
        <WizardStep
          key={step.id}
          stepIndex={stepIndex}
          activeStep={activeStep}
          step={step}
          onChangeValid={handleValid}
        />
      ))}
      <WizardFooter
        steps={steps}
        activeStep={activeStep}
        onCancel={handleCancel}
        onBack={handleBack}
        onNext={handleNext}
      />
    </section>
  );
};

Wizard.defaultProps = {
  initActiveStep: 0,
};

export default Wizard;
