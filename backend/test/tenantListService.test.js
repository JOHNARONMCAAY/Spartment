import { describe, it, expect, vi, beforeEach } from "vitest";

import { fetchTenantList } from "../service/tenantListService.js";

import { getTenantList } from "../model/tenantListModel.js";

vi.mock("../model/tenantListModel.js", () => ({
  getTenantList: vi.fn(),
}));

const mockTenantList = [
  {
    id: 1,
    name: "John Doe",
    email: "john@email.com",
    room: "Room 101",
    rent: "₱5,000",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@email.com",
    room: "Room 102",
    rent: "₱6,000",
  },
  {
    id: 3,
    name: "Michael Santos",
    email: "michael@email.com",
    room: "Room 103",
    rent: "₱5,500",
  },
];

describe("Tenant List Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should retrieve tenant list successfully", async () => {
    // Arrange

    getTenantList.mockResolvedValue(mockTenantList);

    // Act

    const result = await fetchTenantList();

    // Assert

    expect(result).toEqual(mockTenantList);

    expect(getTenantList).toHaveBeenCalledTimes(1);
  });

  it("should return empty tenant list when no tenants exist", async () => {
    // Arrange

    getTenantList.mockResolvedValue([]);

    // Act

    const result = await fetchTenantList();

    // Assert

    expect(result).toEqual([]);
  });

  it("should throw error when retrieving tenant list fails", async () => {
    // Arrange

    getTenantList.mockRejectedValue(new Error("Database error"));

    // Act + Assert

    await expect(fetchTenantList()).rejects.toThrow(
      "Failed to retrieve tenant list.",
    );
  });
});
