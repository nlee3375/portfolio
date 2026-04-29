import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email");
    } else {
      setError("");
      alert("Form submitted!");
    }
  };

  return (
    <div className="contact-form">
      <h1>Contact Me Today!</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Send</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <p><a href="https://www.linkedin.com/in/nadia-lee-274975361/">LinkedIn</a></p>
    </div>
  );
}

export default Contact;