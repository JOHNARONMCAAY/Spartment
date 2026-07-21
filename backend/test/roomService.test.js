import { beforeEach, describe, expect, it, vi } from "vitest";

import { fetchRoomList, searchRoom } from "../service/roomService.js";

import { getRooms } from "../model/roomModel.js";

vi.mock("../model/roomModel.js", () => ({
  getRooms: vi.fn(),
}));

describe("Room Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should retrieve room records successfully", async () => {
    // Arrange

    getRooms.mockResolvedValue([
      {
        roomId: 1,
        roomNumber: "101",
        status: "Vacant",
        price: 5000,
      },
    ]);

    // Act

    const result = await fetchRoomList();

    // Assert

    expect(result).toHaveLength(1);

    expect(result[0].roomNumber).toBe("101");

    expect(getRooms).toHaveBeenCalled();
  });

  it("should return an empty room list when no records exist", async () => {
    // Arrange

    getRooms.mockResolvedValue([]);

    // Act

    const result = await fetchRoomList();

    // Assert

    expect(result).toEqual([]);
  });

  it("should search room records using room number", async () => {
    // Arrange

    getRooms.mockResolvedValue([
      {
        roomNumber: "101",
        status: "Vacant",
      },
    ]);

    // Act

    const result = await searchRoom("101");

    // Assert

    expect(result.roomNumber).toBe("101");
  });

  it("should search room records using room status", async () => {
    // Arrange

    getRooms.mockResolvedValue([
      {
        roomNumber: "101",
        status: "Vacant",
      },
    ]);

    // Act

    const result = await searchRoom("Vacant");

    // Assert

    expect(result.status).toBe("Vacant");
  });

  it("should retrieve room regardless of letter casing", async () => {
    // Arrange

    getRooms.mockResolvedValue([
      {
        roomNumber: "101",
        status: "Vacant",
      },
    ]);

    // Act

    const result = await searchRoom("VACANT");

    // Assert

    expect(result.status).toBe("Vacant");
  });

  it("should throw error when room does not exist", async () => {
    // Arrange

    getRooms.mockResolvedValue([]);

    // Act + Assert

    await expect(searchRoom("999")).rejects.toThrow("Room not found.");
  });

  it("should throw error when search is empty", async () => {
    await expect(searchRoom("")).rejects.toThrow("Room search is required.");
  });

  it("should throw error when retrieving rooms fails", async () => {
    // Arrange

    getRooms.mockRejectedValue(new Error());

    // Act + Assert

    await expect(fetchRoomList()).rejects.toThrow(
      "Failed to retrieve room records.",
    );
  });
});
