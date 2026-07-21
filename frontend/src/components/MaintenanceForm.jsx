import { useState } from "react";

export default function MaintenanceForm({
  onSubmit = () => {},
  onBack = () => {},
}) {
  const [roomNumber, setRoomNumber] = useState("");

  const [issue, setIssue] = useState("");

  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!roomNumber || !issue || !description) return;

    onSubmit({
      roomNumber,

      issue,

      description,
    });
  };

  return (
    <form onSubmit={submit}>
      <h2>Spartment Assistant</h2>

      <button type="button" onClick={onBack}>
        Back
      </button>

      <label htmlFor="roomNumber">Room Number</label>

      <input
        id="roomNumber"
        value={roomNumber}
        onChange={(e) => setRoomNumber(e.target.value)}
      />

      <label htmlFor="issue">Issue</label>

      <input
        id="issue"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
      />

      <label htmlFor="description">Description</label>

      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Send</button>
    </form>
  );
}
