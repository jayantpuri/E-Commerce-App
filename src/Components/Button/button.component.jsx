import React from 'react'
import './button.style.scss'

export const button_Type_Class = {
    blackButton: "",
    whiteButton: "invertedButton",
    googleButton: "googleButton"
};

const Button = ({buttonType , children ,  ...props}) => {
  return (
    <div>
        <button className= { `button-container ${button_Type_Class[buttonType]}` }  {...props}>{children}</button>
    </div>
  )
}

export default Button;
