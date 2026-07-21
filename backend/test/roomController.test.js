import {
  describe,
  expect,
  it,
  vi,
} from "vitest";

import request from "supertest";
import express from "express";

import router from "../routes/roomRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/rooms", router);

vi.mock("../service/roomService.js", () => ({
  getRooms: vi.fn(),
  getAvailableRooms: vi.fn(),
}));

import {
  getRooms,
  getAvailableRooms,
} from "../service/roomService.js";

describe("Room Controller API", () => {
  it("should retrieve all rooms successfully", async () => {
    getRooms.mockResolvedValue([
      {
        roomNumber: "101",
        price: 6500,
        status: "Occupied",
      },
      {
        roomNumber: "102",
        price: 6500,
        status: "Vacant",
      },
    ]);

    const response = await request(app)
      .get("/api/rooms");

    expect(response.status).toBe(200);

    expect(response.body).toHaveLength(2);

    expect(response.body[0].roomNumber)
      .toBe("101");
  });


  it("should retrieve available rooms successfully", async () => {
    getAvailableRooms.mockResolvedValue([
      {
        roomNumber: "102",
        price: 6500,
        status: "Vacant",
      },
    ]);

    const response = await request(app)
      .get("/api/rooms/available");

    expect(response.status).toBe(200);

    expect(response.body).toHaveLength(1);

    expect(response.body[0].status)
      .toBe("Vacant");
  });


  it("should return error when room service fails", async () => {
    getRooms.mockRejectedValue(
      new Error("Room service error")
    );

    const response = await request(app)
      .get("/api/rooms");

    expect(response.status)
      .toBe(500);

    expect(response.body.message)
      .toBe("Room service error");
  });
});