import React, { FC } from 'react';
import { Step } from '../../models/Wizard/Step';

// components
import Wizard from '../UI/Wizard';
import Info from './steps/Info';
import Form from './steps/Form';
import Result from './steps/Result';

// assets
import './index.scss';

// wizard steps definition
const steps: Step[] = [
  {
    id: 'pwd-manager-info',
    component: <Info />,
  },
  {
    id: 'pwd-manager-form',
    component: <Form />,
  },
  {
    id: 'pwd-manager-result',
    component: <Result />,
  },
];

const PwdManager: FC = () => {
  return (
    <section className='pwd-manager'>
      <Wizard steps={steps} />
    </section>
  );
};

export default PwdManager;
