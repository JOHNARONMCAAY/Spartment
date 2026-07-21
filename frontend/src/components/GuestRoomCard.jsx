import RoomAvailabilityBadge from "./RoomAvailabilityBadge";

export default function GuestRoomCard({
  room,
  onInquiry,
}) {
  const available =
    room.status === "Vacant";

  return (
    <div className="border rounded-lg p-5">

      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          Room {room.roomNumber}
        </h2>

        <RoomAvailabilityBadge
          status={room.status}
        />
      </div>


      <p className="mt-2">
        Price: ₱{room.price}
      </p>


      <button
        disabled={!available}
        onClick={() =>
          onInquiry(room)
        }
        className={
          available
            ? "mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            : "mt-4 bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
        }
      >
        {
          available
            ? "Inquiry"
            : "Unavailable"
        }
      </button>

    </div>
  );
}