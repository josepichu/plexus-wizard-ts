import React, { FC } from 'react';
import { faExclamation, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// assets
import './index.scss';
import successImg from '../../../assets/img/success.jpg';
import failureImg from '../../../assets/img/failure.jpg';

interface SuccessErrorMsgProps {
  success: boolean;
  title: string;
  message: string;
}

const SuccessErrorMsg: FC<SuccessErrorMsgProps> = ({ success, title, message }) => {
  return (
    <div className='msg_container'>
      <img src={success ? successImg : failureImg} className='msg_container__img' />
      <div className='msg_container__text'>
        <div className={`title ${success ? 'success' : 'error'}`}>{title && <span>{title}</span>}</div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SuccessErrorMsg;
