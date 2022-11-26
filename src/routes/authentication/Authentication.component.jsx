import SignInForm from "../../components/sign-in/Sign-In-Form.component";
import SignUpForm from "../../components/sign-up/Sign-Up-Form.component";
import "./Authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
