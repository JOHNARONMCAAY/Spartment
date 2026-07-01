import { useState } from "react";

export default function InquiryForm({ onSubmit = () => {} }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [room, setRoom] = useState("");
  const [moveIn, setMoveIn] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !fullName.trim() ||
      !email.trim() ||
      !contact.trim() ||
      !room.trim() ||
      !moveIn ||
      !message.trim()
    ) {
      return;
    }

    onSubmit({
      fullName: fullName.trim(),
      email: email.trim(),
      contact: contact.trim(),
      room: room.trim(),
      moveIn,
      message: message.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Spartment Assistant</h2>

      <label htmlFor="fullname">Full Name</label>
      <input
        id="fullname"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="contact">Contact</label>
      <input
        id="contact"
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <label htmlFor="room">Preferred Room</label>
      <input
        id="room"
        type="text"
        placeholder="e.g. 102"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />

      <label htmlFor="movein">Move-in Date</label>
      <input
        id="movein"
        type="date"
        value={moveIn}
        onChange={(e) => setMoveIn(e.target.value)}
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