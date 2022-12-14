import { useState } from 'react';

import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/Firebase/Firebase.utils';

import './SignUpForm.styles.scss';

function SignUpForm() {

  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if(password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      
      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();

    } catch (error) {
      if(error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("User creation encountered an error.", error);
      }
    }
  }

  return(
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        
        <FormInput 
          label="Display Name"
          type="text" 
          onChange={handleInputChange} 
          name="displayName" 
          value={displayName} 
          required 
        />

        <FormInput 
          label="Email"
          type="email" 
          onChange={handleInputChange} 
          name="email" 
          value={email} 
          required 
        />

        <FormInput 
          label="Password"
          type="password" 
          onChange={handleInputChange} 
          name="password" 
          value={password} 
          required 
        />

        <FormInput 
          label="Confirm Password"
          type="password" 
          onChange={handleInputChange} 
          name="confirmPassword" 
          value={confirmPassword} 
          required 
        />

        <Button type="submit">Sign Up</Button>

      </form>
    </div>
  );
}

export default SignUpForm;