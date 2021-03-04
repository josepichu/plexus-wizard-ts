import React, { FC } from 'react';

// components
import WizardHeader from './WizardHeader';
import WizardStep from './WizardStep';
import WizardFooter from './WizardFooter';
import WizardResult from './WizardResult';

// assets
import './index.scss';

// models
import useForm from '../../../hooks/useForm';

// models
import { Step } from '../../../models/Wizard/Step';
import { formValues, useFormItem } from '../../../models/Form/Form';

interface WizardProps {
  initActiveStep?: number;
  steps: Step[];
  onSubmit(values: formValues): Promise<boolean>;
  onClose?(): void;
  successMsg: string;
  errorMsg: string;
}

const Wizard: FC<WizardProps> = ({ steps, initActiveStep, onSubmit, successMsg, errorMsg, onClose }) => {
  // active step
  const [activeStep, setActiveStep] = React.useState(initActiveStep || 0);

  // valid steps management
  const [, setValidStep] = React.useState({});

  // from successful
  const [isSuccess, setIsSuccess] = React.useState(false);

  // submiting form
  const [submiting, setSubmiting] = React.useState(false);

  // init steps validation
  React.useEffect(() => {
    // for dev porpouses
    let hasResultCmp = false;

    steps.forEach((step: Step, stepIndex: number) => {
      if (step.id === 'wizard-result') hasResultCmp = true;
      if (step.formConfig) {
        step.formConfig.forEach((c: useFormItem) => {
          if (c.validation) {
            steps[stepIndex].isValid = false;
            setValidStep({ [stepIndex]: false });
            return false;
          }
        });
        if (steps[stepIndex].isValid === undefined) {
          steps[stepIndex].isValid = true;
          setValidStep({ [stepIndex]: true });
        }
      }
    });

    // add form result component
    !hasResultCmp &&
      steps.push({
        id: 'wizard-result',
        // eslint-disable-next-line react/display-name
        component: props => <WizardResult {...props} />,
      });
  }, []);

  console.log(steps);

  const isLastStep = activeStep === steps.length - 2;

  // init form values from step validation
  let configFormValues: useFormItem[] = [];
  steps.forEach((step: Step) => {
    if (step.formConfig) configFormValues = [...configFormValues, ...step.formConfig];
  });

  const { values, isValid, errors, handleInputChange, reset } = useForm(configFormValues);

  // check step validatoion
  const isValidStep = (stepIndex: number) => {
    const formConfig = steps[stepIndex].formConfig;
    if (formConfig) {
      for (const i in formConfig) {
        if (formConfig[i].validation && errors[formConfig[i].id] !== undefined && errors[formConfig[i].id] != '')
          return false;
      }
    }
    return true;
  };

  // check validation nad nav buttons
  React.useEffect(() => {
    // check active step form values
    const activeStepIsValid = isValidStep(activeStep);
    steps[activeStep].isValid = activeStepIsValid;
    setValidStep({
      [activeStep]: activeStepIsValid,
    });
  }, [values, errors]);

  // cancel and reset form values
  const handleCancel = () => {
    setActiveStep(0);
    reset();
  };

  // handle next nav
  const handleNext = () => {
    if (isLastStep && isValid) {
      setSubmiting(true);
      onSubmit(values).then(success => {
        setIsSuccess(success);
        //
        setActiveStep(prevStep => prevStep + 1);
        setSubmiting(false);
      });
    } else setActiveStep(prevStep => prevStep + 1);
  };

  // handle back nav
  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  // handle close
  const handleClose = () => {
    onClose && onClose();
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
          values={values}
          errors={errors}
          handleInputChange={handleInputChange}
          success={isSuccess}
          successMsg={successMsg}
          errorMsg={errorMsg}
        />
      ))}
      <WizardFooter
        steps={steps}
        activeStep={activeStep}
        onCancel={handleCancel}
        onNext={handleNext}
        onBack={handleBack}
        onClose={handleClose}
        submiting={submiting}
      />
    </section>
  );
};

Wizard.defaultProps = {
  initActiveStep: 0,
};

export default Wizard;
