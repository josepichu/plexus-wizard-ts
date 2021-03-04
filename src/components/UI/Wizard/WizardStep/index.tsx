import React, { ChangeEvent, FC } from 'react';

// models
import { formErrors, formValues } from '../../../../models/Form/Form';
import { Step } from '../../../../models/Wizard/Step';

// assets
import './index.scss';

interface WizardStepProps {
  stepIndex: number;
  activeStep: number;
  step: Step;
  values: formValues;
  errors: formErrors;
  handleInputChange(e: ChangeEvent<HTMLInputElement>): void;
  success: boolean;
  successMsg?: string;
  errorMsg?: string;
}

const WizardStep: FC<WizardStepProps> = ({
  stepIndex,
  activeStep,
  step,
  values,
  errors,
  handleInputChange,
  success,
  successMsg,
  errorMsg,
}) => {
  if (stepIndex !== activeStep) return null;

  return (
    <div className='wizard-content-step'>
      {step.title && <h2 className='step-title'>{step.title}</h2>}
      <step.component
        values={values}
        step={step}
        errors={errors}
        handleInputChange={handleInputChange}
        success={success}
        successMsg={successMsg}
        errorMsg={errorMsg}
      />
    </div>
  );
};

export default WizardStep;
