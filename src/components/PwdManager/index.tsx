/* eslint-disable react/display-name */
import React, { FC } from 'react';

// locale
import { useTranslation } from 'react-i18next/';

// components
import Wizard from '../UI/Wizard';
import Info from './steps/Info';
import Form from './steps/Form';

// services
import { submitForm } from '../../services/api';

// models
import { Step } from '../../models/Wizard/Step';
import { Response } from '../../models/Api/Api';

// assets
import './index.scss';
import { formValues } from '../../models/Form/Form';

const PwdManager: FC = () => {
  const { t } = useTranslation();

  // wizard steps definition
  const steps: Step[] = [
    {
      id: 'pwd-manager-info',
      title: t('pwdManager.info.title'),
      component: props => <Info {...props} />,
      formConfig: [
        {
          id: 'acceptedConditions',
          type: 'checkbox',
          validation: {
            required: true,
          },
        },
      ],
    },
    {
      id: 'pwd-manager-form',
      title: t('pwdManager.form.title'),
      component: props => <Form {...props} />,
      formConfig: [
        {
          id: 'password1',
          type: 'password',
          validation: {
            required: true,
            password: true,
            sameValueAs: 'password2',
          },
        },
        {
          id: 'password2',
          type: 'password',
          validation: {
            required: true,
            password: true,
            sameValueAs: 'password1',
          },
        },
        {
          id: 'pista',
          type: 'text',
        },
      ],
      submit: true,
    },
  ];

  const onSubmit = async (values: formValues): Promise<boolean> => {
    return new Promise<boolean>(resolve => {
      submitForm(values['password1']).then((res: Response) => {
        if (res.status === 200) resolve(true);
        else resolve(false);
      });
    });
  };

  return (
    <section className='pwd-manager'>
      <Wizard steps={steps} onSubmit={onSubmit} successMsg={t('wizard.successMsg')} errorMsg={t('wizard.errorMsg')} />
    </section>
  );
};

export default PwdManager;
