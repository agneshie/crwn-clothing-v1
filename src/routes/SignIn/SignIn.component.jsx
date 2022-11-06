import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
} from "../../utils/Firebase/Firebase.utils";

import SignUpForm from "../../component/SignUpForm/SignUpForm.component";

function SignIn() {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  } 

  return(
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
