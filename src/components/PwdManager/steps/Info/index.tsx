import { StepComponentProps } from '../../../../models/Wizard/Step';
import { useTranslation } from 'react-i18next/';

// fortawesome
import { faCoffee, faCreditCard, faExchangeAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// models
import React, { FC } from 'react';

// components
import Checkbox from '../../../UI/Form/Checkbox';

// assets
import './index.scss';
import image1 from '../../../../assets/img/pwdManager/step1_image_one.jpg';
import image2 from '../../../../assets/img/pwdManager/step1_image_two.jpg';

const Info: FC<StepComponentProps> = ({ values, errors, handleInputChange }) => {
  const { t } = useTranslation();

  return (
    <section className='info'>
      <div className='info__images_container'>
        <div>
          <img src={image1} alt='' />
          <p>{t('pwdManager.info.paragraph1')}</p>
        </div>
        <div>
          <img src={image2} alt='' />
          <p>{t('pwdManager.info.paragraph2')}</p>
        </div>
      </div>

      <div className='info__description'>
        <h2>{t('pwdManager.info.title2')}</h2>
        <p>{t('pwdManager.info.paragraph3')}</p>
        <h2>{t('pwdManager.info.title3')}</h2>
        <p>{t('pwdManager.info.paragraph4')}</p>
      </div>

      <div className='info__rgpd'>
        <label htmlFor='rgpd'>
          <Checkbox
            name='acceptedConditions'
            type='checkbox'
            onChange={handleInputChange}
            checked={values['acceptedConditions'] || false}
          />
          <p>{t('pwdManager.info.rgpd')}</p>
        </label>
      </div>
    </section>
  );
};

export default Info;
