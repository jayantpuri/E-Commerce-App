import React from 'react'
import './FormInput.styles.scss'

const FormInput = ({...props}) => {
  return (
    <div className='group'>
         <input className='form-input' {...props}/>
         {props.label &&
         <label className={ `${(props.value.length> 0 ? 'shrink' : '' )} form-input-label`}>{props.label}</label>}
       
    </div>
  )
}

export default FormInput;