import React, { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");

  const [success, setSuccess] = useState(false);

  const validateName = (value) => {
    if (!value) return "Name is required";
    if (value.length < 2) return "Min 2 characters";
    return "";
  };

  const validateEmail = (value) => {
    if (!value) return "Email is required";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) return "Invalid email";
    return "";
  };

  const validateAge = (value) => {
    if (!value) return "Age is required";
    if (Number(value) < 18) return "Must be 18+";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nErr = validateName(name);
    const eErr = validateEmail(email);
    const aErr = validateAge(age);

    setNameError(nErr);
    setEmailError(eErr);
    setAgeError(aErr);

    if (nErr || eErr || aErr) return;

    setSuccess(true);
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div className="registration-container">
      <h2>Create account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            className={nameError ? "input-error" : ""}
            onChange={(e) => {
              const v = e.target.value;
              setName(v);
              setNameError(validateName(v));
            }}
          />
          {nameError && <span className="error-message">{nameError}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            className={emailError ? "input-error" : ""}
            onChange={(e) => {
              const v = e.target.value;
              setEmail(v);
              setEmailError(validateEmail(v));
            }}
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            placeholder="18"
            min="18"
            value={age}
            className={ageError ? "input-error" : ""}
            onChange={(e) => {
              const v = e.target.value;
              setAge(v);
              setAgeError(validateAge(v));
            }}
          />
          {ageError && <span className="error-message">{ageError}</span>}
        </div>

        {success && (
          <div className="success-banner" role="alert">
            Registration successful!
          </div>
        )}

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;