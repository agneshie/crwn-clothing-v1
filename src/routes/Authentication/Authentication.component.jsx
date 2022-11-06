import SignUpForm from "../../component/SignUpForm/SignUpForm.component";
import SignInForm from "../../component/SignInForm/SignInForm.component";

import './Authentication.styles.scss';

function Authentication() {

  return(
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
