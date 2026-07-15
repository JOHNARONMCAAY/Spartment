import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import RentStatementTable from "../components/RentStatementTable";

describe("Rent Statement Table", () => {
  it("should display the rent statements correctly", () => {
    // Arrange
    render(
      <RentStatementTable
        rentStatements={[
          {
            period: "May 2026",
            dueDate: "May 15, 2026",
            amount: 6500,
            status: "Paid",
          },
          {
            period: "April 2026",
            dueDate: "April 15, 2026",
            amount: 6500,
            status: "Paid",
          },
        ]}
      />
    );

    // Assert
    expect(
      screen.getByText("Rent Statements")
    ).toBeInTheDocument();

    expect(
      screen.getByText("May 2026")
    ).toBeInTheDocument();

    expect(
      screen.getByText("April 2026")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("Paid")
    ).toHaveLength(2);
  });

  it("should display a message when there are no rent statements", () => {
    // Arrange
    render(
      <RentStatementTable
        rentStatements={[]}
      />
    );

    // Assert
    expect(
      screen.getByText(
        "No rent statements found."
      )
    ).toBeInTheDocument();
  });
});