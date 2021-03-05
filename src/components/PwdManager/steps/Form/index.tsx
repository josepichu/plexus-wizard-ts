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
    <section className='form'>
      <p>{t('pwdManager.form.pinfo1')}</p>
      <p>{t('pwdManager.form.pinfo2')}</p>

      <div className='password-container'>
        <Input
          label={t('pwdManager.form.input_label')}
          placeholder={t('pwdManager.form.input_label')}
          name='password1'
          type='password'
          onChange={handleInputChange}
          value={values['password1'] || ''}
          icon={<FontAwesomeIcon icon={faUnlock} size='1x' />}
          error={errors['password1']}
        />

        <Input
          label={t('pwdManager.form.input_label_repeat')}
          placeholder={t('pwdManager.form.input_label_repeat')}
          name='password2'
          type='password'
          onChange={handleInputChange}
          value={values['password2'] || ''}
          icon={<FontAwesomeIcon icon={faUnlock} size='1x' />}
          error={errors['password2']}
          className={'input'}
        />
      </div>

      <p>{t('pwdManager.form.clue_info')}</p>

      <Input
        label={t('pwdManager.form.clue_info_label')}
        name='pista'
        type='text'
        onChange={handleInputChange}
        value={values['pista'] || ''}
        icon={<FontAwesomeIcon icon={faQuestion} size='1x' />}
      />
    </section>
  );
};

export default ProductForm;
