import React, { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faUnlock } from '@fortawesome/free-solid-svg-icons';

// components
import Input from '../../../UI/Form/Input';

// models
import { StepComponentProps } from '../../../../models/Wizard/Step';

// assets
import './index.scss';

const ProductForm: FC<StepComponentProps> = ({ values, errors, handleInputChange }) => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <Trans i18nKey='pwdManager.form.info'>
          Para completar la contratación de su producto <strong>Cuenta Corriente OpenClose</strong> debe especificar una
          contraseña que usará en su cuenta de <strong>administrador.</strong>
        </Trans>
      </p>

      <p>{t('pwdManager.form.info2')}</p>

      <div className='password-container'>
        <Input
          label={t('pwdManager.form.input_password')}
          name='password1'
          type='password'
          onChange={handleInputChange}
          value={values['password1'] || ''}
          icon={<FontAwesomeIcon icon={faUnlock} size='3x' className='icon' />}
          error={errors['password1']}
        />

        <Input
          label={t('pwdManager.form.input_password_repeat')}
          name='password2'
          type='password'
          onChange={handleInputChange}
          value={values['password2'] || ''}
          icon={<FontAwesomeIcon icon={faUnlock} size='3x' className='icon' />}
          error={errors['password2']}
          className={'input'}
        />
      </div>

      <p>{t('pwdManager.form.clue_info')}</p>

      <Input
        name='pista'
        type='text'
        onChange={handleInputChange}
        value={values['pista'] || ''}
        icon={<FontAwesomeIcon icon={faQuestion} size='3x' className='icon' />}
      />
    </>
  );
};

export default ProductForm;
