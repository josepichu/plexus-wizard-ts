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
  onBack(): void;
  onNext(): void;
}

const WizardFooter: FC<WizardFooterProps> = ({ activeStep, steps, onCancel, onBack, onNext }) => {
  const { t } = useTranslation();

  return (
    <div className='wizard-footer'>
      <div className='btn-left'>
        <button onClick={onCancel}>{t('common.cancel')}</button>
      </div>
      <div className='btn-right'>
        <button onClick={onBack} className='btn-back' disabled={!steps[activeStep - 1]}>
          {t('common.back')}
        </button>
        <button onClick={onNext} className='btn-next' disabled={!steps[activeStep + 1] || !steps[activeStep].isValid}>
          {t('common.next')}
        </button>
      </div>
    </div>
  );
};

export default WizardFooter;
