import React, { useState } from "react";
import Button from "../../Components/Button/button.component";
import FormInput from "../../Components/FormInput/FormInput.component";
import "./Address.styles.scss";

const AdressForm = () => {
  const defaultFormFields = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    pinCode: "",
    contactNumber: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, address, email, pinCode, contactNumber } =
    formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify([[firstName, lastName , email, contactNumber, address, pinCode]]),
    };

    fetch(
      "https://v1.nocodeapi.com/slayer/google_sheets/XKqQoXVdhwEIWNcm?tabId=sheet1",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    alert("your review is submitted");
  };


  return (
    <div className="form-container">
      <h2>Enter your details</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Address"
          type="text"
          name="address"
          value={address}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Pin Code"
          type="text"
          name="pinCode"
          value={pinCode}
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
          label="Contact No"
          type="text"
          name="contactNumber"
          value={contactNumber}
          required
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AdressForm;
