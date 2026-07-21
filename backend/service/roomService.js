import { getRooms } from "../model/roomModel.js";

export async function fetchRoomList() {
  try {
    const rooms = await getRooms();

    return rooms || [];
  } catch (error) {
    throw new Error("Failed to retrieve room records.");
  }
}

export async function searchRoom(search) {
  if (!search || search.trim() === "") {
    throw new Error("Room search is required.");
  }

  const rooms = await fetchRoomList();

  const keyword = search.toLowerCase();

  const room = rooms.find(
    (item) =>
      item.roomNumber.toLowerCase().includes(keyword) ||
      item.status.toLowerCase().includes(keyword),
  );

  if (!room) {
    throw new Error("Room not found.");
  }

  return room;
}
