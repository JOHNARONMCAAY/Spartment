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

vi.mock("../api/billingApi", () => ({
  getBillingInformation: vi.fn(),
}));

import { getBillingInformation } from "../api/billingApi";

import BillingDashboard from "../pages/BillingDashboard";

describe("Billing Dashboard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockBilling = {
    summary: {
      electricity: 850,
      water: 220,
      totalUtilities: 1070,
    },

    rentStatements: [
      {
        period: "May 2026",
        dueDate: "May 15, 2026",
        amount: 6500,
        status: "Paid",
      },
    ],

    utilityStatements: [
      {
        period: "May 2026",
        dueDate: "May 20, 2026",
        electricity: 850,
        water: 220,
        total: 1070,
        status: "Paid",
      },
    ],
  };

  it("should retrieve billing information from the backend successfully", async () => {
    // Arrange
    getBillingInformation.mockResolvedValue(
      mockBilling
    );

    // Act
    render(<BillingDashboard />);

    // Assert
    await waitFor(() => {
      expect(
        getBillingInformation
      ).toHaveBeenCalledTimes(1);
    });
  });

  it("should display the billing summary correctly using backend data", async () => {
    // Arrange
    getBillingInformation.mockResolvedValue(
      mockBilling
    );

    // Act
    render(<BillingDashboard />);

    // Assert
    await waitFor(() => {
      expect(
        screen.getByText("Billing Summary")
      ).toBeInTheDocument();
    });
  });

  it("should display rent statements correctly using backend data", async () => {
    // Arrange
    getBillingInformation.mockResolvedValue(
      mockBilling
    );

    // Act
    render(<BillingDashboard />);

    // Assert
    await waitFor(() => {
      expect(
        screen.getByText("Rent Statements")
      ).toBeInTheDocument();
    });
  });

  it("should display utility statements correctly using backend data", async () => {
    // Arrange
    getBillingInformation.mockResolvedValue(
      mockBilling
    );

    // Act
    render(<BillingDashboard />);

    // Assert
    await waitFor(() => {
      expect(
        screen.getByText("Utility Statements")
      ).toBeInTheDocument();
    });
  });

  it("should display an appropriate message when billing information is unavailable", async () => {
    // Arrange
    getBillingInformation.mockRejectedValue(
      new Error("Database Error")
    );

    // Act
    render(<BillingDashboard />);

    // Assert
    await waitFor(() => {
      expect(
        screen.getByText("Something went wrong.")
      ).toBeInTheDocument();
    });
  });

  it("should display an empty state when no billing information exists", async () => {
    // Arrange
    getBillingInformation.mockResolvedValue(
      null
    );

    // Act
    render(<BillingDashboard />);

    // Assert
    await waitFor(() => {
      expect(
        screen.getByText("No records found.")
      ).toBeInTheDocument();
    });
  });
});