import { useState } from "react";

export default function OtherForm({ onSubmit = () => {} }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subject.trim() || !message.trim()) {
      return;
    }

    onSubmit({
      subject: subject.trim(),
      message: message.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Spartment Assistant</h2>

      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="button">Back</button>
      <button type="submit">Send</button>
    </form>
  );
}