import React, { FC } from 'react';
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// assets
import './index.scss';

interface SuccessErrorMsgProps {
  success: boolean;
  title: string;
  message: string;
}

const SuccessErrorMsg: FC<SuccessErrorMsgProps> = ({ success, title, message }) => {
  return (
    <div className='container'>
      <div className={`box ${success ? 'success' : 'error'}`}>
        <FontAwesomeIcon
          icon={success ? faCheck : faExclamation}
          size='3x'
          className={`icon ${success ? 'success' : 'error'}`}
        />
        {title && <h2>{title}</h2>}
      </div>

      <h4>{message}</h4>
    </div>
  );
};

export default SuccessErrorMsg;
