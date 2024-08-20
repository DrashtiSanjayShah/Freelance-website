import React from 'react';
import Style from './Button.module.css';
const Button = ({ btnName, onClick }) => {
  return (
    <div className={Style.box}>
          <button className={Style.button} onClick={() => onClick()}>
            {btnName}
          </button>
        </div>
  );
};

export default Button;
