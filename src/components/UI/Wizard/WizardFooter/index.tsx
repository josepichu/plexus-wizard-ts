import React, { FC } from 'react';
import { useTranslation } from 'react-i18next/';

// models
import { Step } from '../../../../models/Wizard/Step';

// assets
import './index.scss';

// compontens
import Button from '../../../UI/Button';

interface WizardFooterProps {
  activeStep: number;
  steps: Step[];
  onCancel(): void;
  onNext(): void;
  onBack(): void;
  onClose(): void;
  submiting: boolean;
}

const WizardFooter: FC<WizardFooterProps> = ({ activeStep, steps, onCancel, onNext, onBack, onClose, submiting }) => {
  const { t } = useTranslation();

  const isLastStep = activeStep === steps.length - 1;

  return (
    <div className='wizard-footer'>
      <div className='btn-left'>
        <Button
          className='wizard-footer-cancel'
          onClick={onCancel}
          disabled={activeStep === 0 || isLastStep || submiting}
          hidden={isLastStep}
        >
          {t('common.cancel')}
        </Button>
      </div>
      <div className='btn-right'>
        <Button
          className='wizard-footer-back'
          onClick={onBack}
          disabled={activeStep === 0 || submiting}
          hidden={isLastStep}
        >
          {t('common.back')}
        </Button>
        <Button
          className='primary wizard-footer-next'
          onClick={onNext}
          disabled={!steps[activeStep].isValid || submiting}
          hidden={isLastStep}
          loading={submiting}
        >
          {t('common.next')}
        </Button>
        <Button className='wizard-footer-close' onClick={onClose} hidden={!isLastStep}>
          {t('common.close')}
        </Button>
      </div>
    </div>
  );
};

export default WizardFooter;
