import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/Firebase/Firebase.utils";

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
    </div>
  );
}

export default SignIn;