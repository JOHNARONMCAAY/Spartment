import {
  getRooms,
  getAvailableRooms,
} from "../service/roomService.js";


export const fetchRooms = async (
  req,
  res
) => {
  try {

    const rooms = await getRooms();

    res.status(200).json(
      rooms
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }
};


export const fetchAvailableRooms = async (
  req,
  res
) => {
  try {

    const rooms =
      await getAvailableRooms();

    res.status(200).json(
      rooms
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }
};