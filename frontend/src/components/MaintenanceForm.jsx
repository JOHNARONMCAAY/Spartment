import { useState } from "react";

export default function MaintenanceForm({
  onSubmit = () => {},
}) {
  const [roomNumber, setRoomNumber] = useState("");
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !roomNumber.trim() ||
      !issue.trim() ||
      !description.trim()
    ) {
      return;
    }

    onSubmit({
      roomNumber: roomNumber.trim(),
      issue: issue.trim(),
      description: description.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Spartment Assistant</h2>

      <label htmlFor="roomNumber">Room Number</label>
      <input
        id="roomNumber"
        type="text"
        value={roomNumber}
        onChange={(e) => setRoomNumber(e.target.value)}
      />

      <label htmlFor="issue">Issue</label>
      <input
        id="issue"
        type="text"
        placeholder="e.g. Leaking faucet"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="button">Back</button>
      <button type="submit">Send</button>
    </form>
  );
}