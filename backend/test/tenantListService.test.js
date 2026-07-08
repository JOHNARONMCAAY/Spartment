import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

vi.mock("../model/tenantListModel.js", () => ({
  getTenantList: vi.fn(),
  searchTenantByName: vi.fn(),
}));

vi.mock("../validation/tenantListValidation.js", () => ({
  validateTenantName: vi.fn(),
}));

import {
  getTenantList,
  searchTenantByName,
} from "../model/tenantListModel.js";

import { validateTenantName } from "../validation/tenantListValidation.js";

import {
  fetchTenantList,
  findTenantByName,
} from "../service/tenantListService.js";

describe("Tenant List Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should retrieve all tenant records successfully", async () => {
    // Arrange
    const mockTenants = [
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

    getTenantList.mockResolvedValue(mockTenants);

    // Act
    const result = await fetchTenantList();

    // Assert
    expect(result).toEqual(mockTenants);
    expect(result).toHaveLength(3);
  });

  it("should return an empty tenant list when no records exist", async () => {
    // Arrange
    getTenantList.mockResolvedValue([]);

    // Act
    const result = await fetchTenantList();

    // Assert
    expect(result).toEqual([]);
    expect(result).toHaveLength(0);
  });

  it("should search tenant by name successfully", async () => {
    // Arrange
    const tenantName = "John Doe";

    const mockTenant = {
      id: 1,
      name: "John Doe",
      email: "john@email.com",
      room: "Room 101",
      rent: "₱5,000",
    };

    searchTenantByName.mockResolvedValue(mockTenant);

    // Act
    const result = await findTenantByName(
      tenantName
    );

    // Assert
    expect(validateTenantName).toHaveBeenCalledWith(
      tenantName
    );

    expect(searchTenantByName).toHaveBeenCalledWith(
      tenantName
    );

    expect(result).toEqual(mockTenant);
  });

  it("should throw an error when the tenant cannot be found", async () => {
    // Arrange
    const tenantName = "Pedro Cruz";

    searchTenantByName.mockRejectedValue(
      new Error("Tenant not found.")
    );

    // Act & Assert
    await expect(
      findTenantByName(tenantName)
    ).rejects.toThrow("Tenant not found.");

    expect(validateTenantName).toHaveBeenCalledWith(
      tenantName
    );

    expect(searchTenantByName).toHaveBeenCalledWith(
      tenantName
    );
  });

  it("should throw an error when retrieving the tenant list fails", async () => {
    // Arrange
    getTenantList.mockRejectedValue(
      new Error("Database Error")
    );

    // Act & Assert
    await expect(
      fetchTenantList()
    ).rejects.toThrow(
      "Failed to retrieve tenant list."
    );
  });
});