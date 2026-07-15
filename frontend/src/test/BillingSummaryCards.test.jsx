import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import BillingSummaryCards from "../components/BillingSummaryCards";

describe("Billing Summary Cards", () => {
  it("should display the billing summary correctly", () => {
    // Arrange
    render(
      <BillingSummaryCards
        summary={{
          electricity: 850,
          water: 220,
          totalUtilities: 1070,
        }}
      />
    );

    // Assert
    expect(
      screen.getByText("Billing Summary")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Electricity")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Water")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Combined Utilities")
    ).toBeInTheDocument();

    expect(
      screen.getByText("₱850")
    ).toBeInTheDocument();

    expect(
      screen.getByText("₱220")
    ).toBeInTheDocument();

    expect(
      screen.getByText("₱1070")
    ).toBeInTheDocument();
  });
});