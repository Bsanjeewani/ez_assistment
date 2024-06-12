import React, { useState } from "react";
import { texts } from "../utilities/constants";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    if (email === "") {
      return texts.emailRequired;
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(email).toLowerCase())) {
      return texts.invalidEmail;
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationMessage = validateEmail(email);
    if (validationMessage) {
      setMessage(validationMessage);
      return;
    }

    try {
      const response = await fetch("http://34.225.132.160:8002/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 422) {
        setMessage(data.message || texts.invalidEmailDomain);
      } else if (response.status === 200) {
        setMessage(texts.formSubmitted);
      } else {
        setMessage(texts.unexpectedError);
      }
    } catch (error) {
      setMessage(texts.tryAgainError);
    }
  };

  return (
    <form className="inputButtonContainer" onSubmit={handleSubmit}>
      <div className="inputContainer">
        <input
          className="input"
          type="email"
          name="email"
          placeholder={texts.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="buttonContainer">
        <button className="button" type="submit">
          {texts.contactButton}
        </button>
      </div>
      {message && <div className="message">{message}</div>}
    </form>
  );
};

export default Form;
