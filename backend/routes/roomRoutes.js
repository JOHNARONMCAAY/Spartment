import express from "express";

import {
  fetchRooms,
  fetchAvailableRooms,
} from "../controller/roomController.js";


const router = express.Router();


router.get(
  "/",
  fetchRooms
);


router.get(
  "/available",
  fetchAvailableRooms
);


export default router;