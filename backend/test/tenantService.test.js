import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("../model/tenantModel.js", () => ({
  getTenantInformation: vi.fn(),
}));

import { getTenantInformation } from "../model/tenantModel.js";
import { fetchTenantInformation } from "../service/tenantService.js";

describe("Tenant Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should retrieve tenant information successfully", async () => {
    // Arrange
    const mockTenant = {
      tenant: {
        name: "Juan Dela Cruz",
        contact: "09123456789",
        email: "juan@email.com",
      },

      room: {
        roomNumber: "Room 101",
        monthlyRent: 5000,
        nextDue: "July 15, 2026",
      },

      payments: [
        {
          month: "January",
          amount: 5000,
          status: "Paid",
        },
      ],
    };

    getTenantInformation.mockResolvedValue(mockTenant);

    // Act
    const result = await fetchTenantInformation();

    // Assert
    expect(getTenantInformation).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockTenant);
  });

  it("should return the tenant room information correctly", async () => {
    // Arrange
    const mockTenant = {
      tenant: {
        name: "Juan Dela Cruz",
        contact: "09123456789",
        email: "juan@email.com",
      },

      room: {
        roomNumber: "Room 101",
        monthlyRent: 5000,
        nextDue: "July 15, 2026",
      },

      payments: [],
    };

    getTenantInformation.mockResolvedValue(mockTenant);

    // Act
    const result = await fetchTenantInformation();

    // Assert
    expect(result.room.roomNumber).toBe("Room 101");
    expect(result.room.monthlyRent).toBe(5000);
    expect(result.room.nextDue).toBe("July 15, 2026");
  });

  it("should return the payment history correctly", async () => {
    // Arrange
    const mockTenant = {
      tenant: {},

      room: {},

      payments: [
        {
          month: "January",
          amount: 5000,
          status: "Paid",
        },
        {
          month: "February",
          amount: 5000,
          status: "Pending",
        },
      ],
    };

    getTenantInformation.mockResolvedValue(mockTenant);

    // Act
    const result = await fetchTenantInformation();

    // Assert
    expect(result.payments).toHaveLength(2);
    expect(result.payments[0].month).toBe("January");
    expect(result.payments[1].status).toBe("Pending");
  });

  it("should throw an error when retrieving tenant information fails", async () => {
    // Arrange
    getTenantInformation.mockRejectedValue(new Error("Database Error"));

    // Act & Assert
    await expect(fetchTenantInformation()).rejects.toThrow(
      "Failed to retrieve tenant information."
    );
  });
});