import {
  beforeEach,
  describe,
  expect,
  it,
} from "vitest";

import {
  fetchDashboardMetrics,
} from "../service/dashboardService.js";

describe("Dashboard Service", () => {
  beforeEach(() => {});

  it("should calculate monthly revenue successfully", async () => {
    // Arrange
    const rooms = [];

    const tenants = [];

    const payments = [
      {
        amount: 25000,
        status: "Paid",
      },
      {
        amount: 30000,
        status: "Paid",
      },
      {
        amount: 35000,
        status: "Paid",
      },
      {
        amount: 35000,
        status: "Late",
      },
    ];

    // Act
    const result =
      await fetchDashboardMetrics({
        rooms,
        tenants,
        payments,
      });

    // Assert
    expect(result.monthlyRevenue).toBe(
      "₱125,000"
    );
  });

  it("should calculate occupancy rate successfully", async () => {
    // Arrange
    const rooms = [
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Occupied" },
      { status: "Vacant" },
    ];

    // Act
    const result =
      await fetchDashboardMetrics({
        rooms,
        tenants: [],
        payments: [],
      });

    // Assert
    expect(result.occupancy).toBe("95%");
  });

  it("should calculate active tenants successfully", async () => {
    // Arrange
    const tenants = Array.from(
      { length: 32 },
      () => ({
        status: "Active",
      })
    );

    // Act
    const result =
      await fetchDashboardMetrics({
        rooms: [],
        tenants,
        payments: [],
      });

    // Assert
    expect(result.activeTenants).toBe(32);
  });

  it("should calculate late payments successfully", async () => {
    // Arrange
    const payments = [
      {
        amount: 25000,
        status: "Paid",
      },
      {
        amount: 30000,
        status: "Late",
      },
      {
        amount: 35000,
        status: "Paid",
      },
      {
        amount: 35000,
        status: "Late",
      },
    ];

    // Act
    const result =
      await fetchDashboardMetrics({
        rooms: [],
        tenants: [],
        payments,
      });

    // Assert
    expect(result.latePayments).toBe(2);
  });

  it("should return all dashboard metrics successfully", async () => {
    // Arrange
    const rooms = [
      ...Array.from(
        { length: 19 },
        () => ({
          status: "Occupied",
        })
      ),
      { status: "Vacant" },
    ];

    const tenants = Array.from(
      { length: 32 },
      () => ({
        status: "Active",
      })
    );

    const payments = [
      {
        amount: 25000,
        status: "Paid",
      },
      {
        amount: 30000,
        status: "Paid",
      },
      {
        amount: 35000,
        status: "Paid",
      },
      {
        amount: 35000,
        status: "Late",
      },
    ];

    // Act
    const result =
      await fetchDashboardMetrics({
        rooms,
        tenants,
        payments,
      });

    // Assert
    expect(result).toEqual({
      monthlyRevenue: "₱125,000",
      occupancy: "95%",
      activeTenants: 32,
      latePayments: 1,
    });
  });
});