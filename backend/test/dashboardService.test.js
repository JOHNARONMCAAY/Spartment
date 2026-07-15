import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

vi.mock("../model/dashboardModel.js", () => ({
  getDashboardMetrics: vi.fn(),
}));

import { getDashboardMetrics } from "../model/dashboardModel.js";

import { fetchDashboardMetrics } from "../service/dashboardService.js";

describe("Dashboard Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should retrieve dashboard metrics successfully", async () => {
    // Arrange
    const mockMetrics = {
      monthlyRevenue: "₱125,000",
      occupancy: "95%",
      activeTenants: 32,
      latePayments: 4,
    };

    getDashboardMetrics.mockResolvedValue(mockMetrics);

    // Act
    const result = await fetchDashboardMetrics();

    // Assert
    expect(getDashboardMetrics).toHaveBeenCalledTimes(1);

    expect(result).toEqual(mockMetrics);

    expect(result.monthlyRevenue).toBe("₱125,000");
    expect(result.occupancy).toBe("95%");
    expect(result.activeTenants).toBe(32);
    expect(result.latePayments).toBe(4);
  });

  it("should throw an error when retrieving dashboard metrics fails", async () => {
    // Arrange
    getDashboardMetrics.mockRejectedValue(
      new Error("Database Error")
    );

    // Act & Assert
    await expect(
      fetchDashboardMetrics()
    ).rejects.toThrow(
      "Failed to retrieve dashboard metrics."
    );

    expect(getDashboardMetrics).toHaveBeenCalledTimes(1);
  });

  it("should return dashboard metrics with zero values", async () => {
    // Arrange
    const mockMetrics = {
      monthlyRevenue: "₱0",
      occupancy: "0%",
      activeTenants: 0,
      latePayments: 0,
    };

    getDashboardMetrics.mockResolvedValue(mockMetrics);

    // Act
    const result = await fetchDashboardMetrics();

    // Assert
    expect(result.monthlyRevenue).toBe("₱0");
    expect(result.occupancy).toBe("0%");
    expect(result.activeTenants).toBe(0);
    expect(result.latePayments).toBe(0);
  });
});