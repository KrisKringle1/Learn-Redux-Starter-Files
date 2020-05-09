import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('')
  const submitForm = () => {
    console.log('Login form submitted')
  };




  return (
    <div>
      <form className="form d-flex" onSubmit={submitForm}>
        <h1 className="title">
          Sign In
        </h1>
        <div className="liked-event-border d-flex mt-5 p-1">
          <i className="fas fa-user text-muted username-password-icons"></i>
          <input className='block-text-font-oswald w-100 p-1 pl-2'
            name='username'
            type='text'
            placeholder='Username'

            onChange={(textValue) => updateUsername(textValue)}></input>
        </div>

      </form>

    </div>
  )
}

export default SignIn;
