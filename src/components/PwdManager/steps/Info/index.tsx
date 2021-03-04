import { StepComponentProps } from '../../../../models/Wizard/Step';
import { useTranslation } from 'react-i18next/';

// fortawesome
import { faCoffee, faCreditCard, faExchangeAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// models
import React, { ChangeEvent, FC } from 'react';

// assets
import './index.scss';
import Checkbox from '../../../UI/Form/Checkbox';

const Info: FC<StepComponentProps> = ({ values, errors, handleInputChange }) => {
  const { t } = useTranslation();

  return (
    <div className='info'>
      <div className='product-description-wrapper'>
        <div className='product-description'>
          <FontAwesomeIcon icon={faCoffee} size='3x' className='icon' />
          <h4>{t('pwdManager.info.comisions_title')}</h4>
          <hr />
          {t('pwdManager.info.comisions_description')}
        </div>
        <div className='product-description'>
          <FontAwesomeIcon icon={faExchangeAlt} size='3x' className='icon' />
          <h4>{t('pwdManager.info.transfers_title')}</h4>
          <hr />
          {t('pwdManager.info.transfers_description')}
        </div>
        <div className='product-description'>
          <FontAwesomeIcon icon={faCreditCard} size='3x' className='icon' />
          <h4>{t('pwdManager.info.card_title')}</h4>
          <hr />
          {t('pwdManager.info.card_description')}
        </div>
        <div className='product-description'>
          <FontAwesomeIcon icon={faMobileAlt} size='3x' className='icon' />
          <h4>{t('pwdManager.info.phone_title')}</h4>
          <hr />
          {t('pwdManager.info.phone_description')}
        </div>
      </div>

      <div className='footer-info'>
        <p>{t('pwdManager.info.almost_done')}</p>
        <p>
          <Checkbox
            name='acceptedConditions'
            type='checkbox'
            onChange={handleInputChange}
            checked={values['acceptedConditions']}
            error={errors['acceptedConditions']}
          />
          {t('pwdManager.info.rgpd_desc')} <a href='#'>{t('pwdManager.info.rgpd_link')}</a>.
        </p>
      </div>
    </div>
  );
};

export default Info;
