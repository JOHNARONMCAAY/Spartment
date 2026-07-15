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

  it("should retrieve dashboard metrics successfully", async () => {
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

  it("should display an appropriate error message when dashboard information is unavailable", async () => {
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

  it("should display the loading component while retrieving dashboard metrics", () => {
    // Arrange
    getDashboardMetrics.mockImplementation(
      () => new Promise(() => {})
    );

    // Act
    render(<RevenueDashboard />);

    // Assert
    expect(
      screen.getByText("Loading...")
    ).toBeInTheDocument();
  });

  it("should display the empty state when no dashboard metrics exist", async () => {
    // Arrange
    getDashboardMetrics.mockResolvedValue(null);

    // Act
    render(<RevenueDashboard />);

    // Assert
    await waitFor(() => {
      expect(
        screen.getByText("No records found.")
      ).toBeInTheDocument();
    });
  });
});