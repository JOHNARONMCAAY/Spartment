import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";

vi.mock("../api/dashboardApi", () => ({
  getDashboardMetrics: vi.fn(),
}));

import { getDashboardMetrics } from "../api/dashboardApi";

import RevenueDashboard from "../pages/RevenueDashboard";

describe("Revenue Dashboard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should retrieve dashboard KPI metrics from the backend successfully", async () => {
    // Arrange
    getDashboardMetrics.mockResolvedValue({
      monthlyRevenue: "₱125,000",
      occupancy: "95%",
      activeTenants: 32,
      latePayments: 4,
    });

    // Act
    render(<RevenueDashboard />);

    // Assert
    await waitFor(() => {
      expect(
        getDashboardMetrics
      ).toHaveBeenCalled();
    });
  });

  it("should display KPI values correctly using backend data", async () => {
    // Arrange
    getDashboardMetrics.mockResolvedValue({
      monthlyRevenue: "₱125,000",
      occupancy: "95%",
      activeTenants: 32,
      latePayments: 4,
    });

    // Act
    render(<RevenueDashboard />);

    // Assert
    await waitFor(() => {
      expect(
        screen.getByText("₱125,000")
      ).toBeInTheDocument();

      expect(
        screen.getByText("95%")
      ).toBeInTheDocument();

      expect(
        screen.getByText("32")
      ).toBeInTheDocument();

      expect(
        screen.getByText("4")
      ).toBeInTheDocument();
    });
  });

  it("should display revenue monitoring information correctly using backend data", async () => {
    // Arrange
    getDashboardMetrics.mockResolvedValue({
      monthlyRevenue: "₱125,000",
      occupancy: "95%",
      activeTenants: 32,
      latePayments: 4,
    });

    // Act
    render(<RevenueDashboard />);

    // Assert
    await waitFor(() => {
      expect(
        screen.getByText("Monthly Revenue")
      ).toBeInTheDocument();

      expect(
        screen.getByText("Occupancy")
      ).toBeInTheDocument();

      expect(
        screen.getByText("Active Tenants")
      ).toBeInTheDocument();

      expect(
        screen.getByText("Late Payments")
      ).toBeInTheDocument();

      expect(
        screen.getByText("Current Month")
      ).toBeInTheDocument();

      expect(
        screen.getByText("Occupancy Rate")
      ).toBeInTheDocument();

      expect(
        screen.getByText("Current Tenants")
      ).toBeInTheDocument();

      expect(
        screen.getByText("Pending Accounts")
      ).toBeInTheDocument();
    });
  });

  it("should display an appropriate message when dashboard information is unavailable", async () => {
    // Arrange
    getDashboardMetrics.mockRejectedValue(
      new Error("Database Error")
    );

    // Act
    render(<RevenueDashboard />);

    // Assert
    await waitFor(() => {
      expect(
        screen.getByText("Something went wrong.")
      ).toBeInTheDocument();
    });
  });
});