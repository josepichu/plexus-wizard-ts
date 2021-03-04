import React, { FC } from 'react';
import { useTranslation } from 'react-i18next/';

// models
import { Step } from '../../../../models/Wizard/Step';

// assets
import './index.scss';

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
        <button
          className='wizard-footer-cancel'
          onClick={onCancel}
          disabled={activeStep === 0 || isLastStep}
          hidden={isLastStep}
        >
          {t('common.cancel')}
        </button>
      </div>
      <div className='btn-right'>
        <button className='wizard-footer-back' onClick={onBack} disabled={activeStep === 0} hidden={isLastStep}>
          {t('common.back')}
        </button>
        <button
          className='wizard-footer-next'
          onClick={onNext}
          disabled={!steps[activeStep].isValid || submiting}
          hidden={isLastStep}
        >
          {t('common.next')}
        </button>
        <button className='wizard-footer-close' onClick={onClose} hidden={!isLastStep}>
          {t('common.close')}
        </button>
      </div>
    </div>
  );
};

export default WizardFooter;
