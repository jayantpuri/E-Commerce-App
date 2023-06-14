import React, { useState } from "react";
import FormInput from "../../Components/FormInput/FormInput.component";
import {
  googlePopup,
  signInWithEmail,
} from "../../Utils/firebase.utils";
import "./authentication.style.scss";
import Button from "../../Components/Button/button.component";
import { button_Type_Class } from "../../Components/Button/button.component";


const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const googleSignIn = async () => {
    await googlePopup();
    alert("google-signed-in");
  };

  const emailSignIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmail(email, password);
      alert("email-signed-in");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="center">
      <h1>Sign-In to your account</h1>
      <form onSubmit={emailSignIn}>
        <FormInput
          label="email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput
          label="password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <div className="button-center">
          <Button
            buttonType={button_Type_Class.googleButton}
            type="button"
            onClick={googleSignIn}
          >
            Sign-In with Google
          </Button>
          <Button buttonType={button_Type_Class.blackButton} type="submit">
            Sign-In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
