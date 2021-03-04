import React, { FC } from 'react';
import { faExclamation, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
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
      <FontAwesomeIcon
        icon={success ? faThumbsUp : faExclamation}
        size='6x'
        className={`icon ${success ? 'success' : 'error'}`}
      />
      <div className={`box ${success ? 'success' : 'error'}`}>{title && <h2>{title}</h2>}</div>

      <h4>{message}</h4>
    </div>
  );
};

export default SuccessErrorMsg;
