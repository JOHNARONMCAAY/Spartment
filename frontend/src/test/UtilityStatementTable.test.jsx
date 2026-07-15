import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import UtilityStatementTable from "../components/UtilityStatementTable";

describe("Utility Statement Table", () => {
  it("should display the utility statements correctly", () => {
    // Arrange
    render(
      <UtilityStatementTable
        utilityStatements={[
          {
            period: "May 2026",
            dueDate: "May 20, 2026",
            electricity: 850,
            water: 220,
            total: 1070,
            status: "Paid",
          },
        ]}
      />
    );

    // Assert
    expect(
      screen.getByText("Utility Statements")
    ).toBeInTheDocument();

    expect(
      screen.getByText("May 2026")
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

    expect(
      screen.getByText("Paid")
    ).toBeInTheDocument();
  });

  it("should display a message when there are no utility statements", () => {
    // Arrange
    render(
      <UtilityStatementTable
        utilityStatements={[]}
      />
    );

    // Assert
    expect(
      screen.getByText(
        "No utility statements found."
      )
    ).toBeInTheDocument();
  });
});