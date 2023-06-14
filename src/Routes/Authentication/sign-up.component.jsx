import React, { useState } from "react";
import { addUsers, createUserEmail } from "../../Utils/firebase.utils";
import FormInput from "../../Components/FormInput/FormInput.component";
import Button from "../../Components/Button/button.component";
import { button_Type_Class } from "../../Components/Button/button.component";
import './authentication.style.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passowrds don't match");
      return;
    }
    try {
      const { user } = await createUserEmail(email, password);
      const response = await addUsers(user);
      console.log(response);
    } catch (error) {
      console.log("cannot create user", error);
    }
  };

  return (
    <div className="center">
      <h2 style={{marginLeft: "10vw"}}>I do not have an account</h2>
      <h4 style={{marginLeft: "10vw"}}>Sign up with your email and password</h4>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="displayName"
          type="text"
          name="displayName"
          value={displayName}
          required
          onChange={handleChange}
        />

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

        <FormInput
          label="password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required

          onChange={handleChange}
        />

        <Button buttonType={button_Type_Class.blackButton} type="submit" style={{marginLeft: "15vw"}}>Submit</Button>
      </form>
    </div>
  );
};

export default SignUp;
