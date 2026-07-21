import { useState } from "react";

export default function OtherForm({ onSubmit = () => {}, onBack = () => {} }) {
  const [subject, setSubject] = useState("");

  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!subject || !message) return;

    onSubmit({
      subject,

      message,
    });
  };

  return (
    <form onSubmit={submit}>
      <h2>Spartment Assistant</h2>

      <button type="button" onClick={onBack}>
        Back
      </button>

      <label htmlFor="subject">Subject</label>

      <input
        id="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <label htmlFor="message">Message</label>

      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">Send</button>
    </form>
  );
}
