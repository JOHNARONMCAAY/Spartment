import { useState } from "react";

export default function InquiryForm({
  handleSubmit,

  onSubmit,

  onBack,
}) {
  const [form, setForm] = useState({
    fullName: "",

    email: "",

    contact: "",

    room: "",

    moveIn: "",

    message: "",
  });

  const update = (e) => {
    setForm({
      ...form,

      [e.target.id]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (
      !form.fullName ||
      !form.email ||
      !form.contact ||
      !form.room ||
      !form.moveIn ||
      !form.message
    ) {
      return;
    }

    if (handleSubmit) {
      handleSubmit({
        ...form,
      });
    }

    if (onSubmit) {
      onSubmit({
        ...form,
      });
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Spartment Assistant</h2>

      <button type="button" onClick={onBack}>
        Back
      </button>

      <label htmlFor="fullName">Full Name</label>

      <input id="fullName" value={form.fullName} onChange={update} />

      <label htmlFor="email">Email</label>

      <input id="email" type="email" value={form.email} onChange={update} />

      <label htmlFor="contact">Contact</label>

      <input id="contact" value={form.contact} onChange={update} />

      <label htmlFor="room">Preferred Room</label>

      <input id="room" value={form.room} onChange={update} />

      <label htmlFor="moveIn">Move-in Date</label>

      <input id="moveIn" type="date" value={form.moveIn} onChange={update} />

      <label htmlFor="message">Message</label>

      <textarea id="message" value={form.message} onChange={update} />

      <button type="submit">Send</button>
    </form>
  );
}
