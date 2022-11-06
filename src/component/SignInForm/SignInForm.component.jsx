import { useState } from 'react';

import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signAuthUserWithEmailAndPassword 
} from "../../utils/Firebase/Firebase.utils";

import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';

import './SignInForm.styles.scss';

function SignInForm() {

  const defaultFormFields = {
    email: "",
    password: "",
  }

  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  } 

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
    
    try {
      const response = await signAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();

    } catch (error) {
      switch(error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  }

  return(
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;