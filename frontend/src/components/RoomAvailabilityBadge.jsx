export default function RoomAvailabilityBadge({
  status,
}) {
  const styles = {
    Vacant: "bg-green-100 text-green-700",
    Reserved: "bg-yellow-100 text-yellow-700",
    Occupied: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        styles[status] ||
        "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}