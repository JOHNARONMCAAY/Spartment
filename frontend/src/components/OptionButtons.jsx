export default function OptionButtons({ onSelect }) {
  return (
    <div className="space-y-2 mt-4">
      <button onClick={() => onSelect("Inquiry")}>Inquiry</button>

      <button onClick={() => onSelect("Maintenance")}>Maintenance</button>

      <button onClick={() => onSelect("Other")}>Other</button>
    </div>
  );
}
