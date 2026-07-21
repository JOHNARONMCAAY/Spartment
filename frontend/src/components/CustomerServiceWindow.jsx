import OptionButtons from "./OptionButtons";

export default function CustomerServiceWindow({ onClose, onSelect }) {
  return (
    <div className="border p-5 rounded-lg">
      <div className="flex justify-between">
        <h2 className="font-semibold">Spartment Assistant</h2>

        <button onClick={onClose}>X</button>
      </div>

      <OptionButtons onSelect={onSelect} />
    </div>
  );
}
