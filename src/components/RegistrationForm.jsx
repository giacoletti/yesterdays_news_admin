import React from "react";

const RegistrationForm = () => {
  return (
    <div>
      <h3 data-cy="registration-header">Registration form</h3>
      <div>
        <label data-cy="name-label">Your name:</label>
        <input data-cy="name-input" />
      </div>
      <div>
        <label data-cy="email-label">Email:</label>
        <input data-cy="email-input" />
      </div>
      <div>
        <label data-cy="password-label">Password:</label>
        <input data-cy="password-input" />
      </div>
      <div>
        <label data-cy="conf-password-label">Confirm password:</label>
        <input data-cy="conf-password-input" />
      </div>
      <button data-cy="register-button">Register</button>
    </div>
  );
};

export default RegistrationForm;
