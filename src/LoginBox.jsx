import React from 'react'
import './LoginBox.css'
import Button from './Button'
import InputField from './InputField'

function LoginBox() {
  return (
    <div className='box'>
      Login <br /><br />
      <InputField label={'Name: '} type={'text'}/>
      <InputField label={'Email: '} type={'text'}/>
      <InputField label={'Password: '} type={'Password'}/>

      <Button/>
    </div>
  )
}

export default LoginBox
