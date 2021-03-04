import React, { FC } from 'react';
import { StepComponentProps } from '../../../../models/Wizard/Step';
import { useTranslation } from 'react-i18next/';

import SuccessErrorMsg from '../../SuccessErrorMsg';

// assets
import './index.scss';

const WizardResult: FC<StepComponentProps> = ({ success, successMsg, errorMsg }) => {
  const { t } = useTranslation();

  let message = '';
  let title = '';

  if (success) {
    message = successMsg || t('wizard.successMsg');
    title = t('wizard.successTitle');
  } else {
    message = errorMsg || t('wizard.errorMsg');
    title = t('wizard.errorTitle');
  }

  return (
    <div className='message'>
      <SuccessErrorMsg success={success} title={title} message={message} />
    </div>
  );
};

export default WizardResult;
