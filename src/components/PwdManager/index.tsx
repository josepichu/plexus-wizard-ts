/* eslint-disable react/display-name */
import React, { FC } from 'react';
import { Step } from '../../models/Wizard/Step';

// components
import Wizard from '../UI/Wizard';
import Info from './steps/Info';
import Form from './steps/Form';
import Result from './steps/Result';

// assets
import './index.scss';

const PwdManager: FC = () => {
  // wizard steps definition
  const steps: Step[] = [
    {
      id: 'pwd-manager-info',
      component: props => <Info {...props} />,
      // isValid: true,
    },
    {
      id: 'pwd-manager-form',
      component: props => <Form {...props} />,
    },
    {
      id: 'pwd-manager-result',
      component: props => <Result {...props} />,
    },
  ];

  return (
    <section className='pwd-manager'>
      <Wizard steps={steps} />
    </section>
  );
};

export default PwdManager;
