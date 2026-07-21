import {
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  expect,
  it,
} from "vitest";

import AnalyticsSummaryCard from "../components/AnalyticsSummaryCard";


describe("Analytics Summary Card", () => {

  it("should display analytics summary information correctly", () => {

    // Arrange
    render(
      <AnalyticsSummaryCard
        title="Total Revenue"
        value="₱80000"
        subtitle="Overall Revenue"
      />
    );


    // Assert
    expect(
      screen.getByText("Total Revenue")
    ).toBeInTheDocument();


    expect(
      screen.getByText("₱80000")
    ).toBeInTheDocument();


    expect(
      screen.getByText("Overall Revenue")
    ).toBeInTheDocument();

  });

});