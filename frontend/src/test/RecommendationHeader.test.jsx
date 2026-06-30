import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import RecommendationHeader from "../components/RecommendationHeader";

describe("RecommendationHeader", () => {
  it("should render the Recommendations header", () => {
    // Arrange
    render(<RecommendationHeader />);

    // Act
    const header = screen.getByRole("heading", {
      name: /recommendations/i,
      level: 1,
    });

    // Assert
    expect(header).toBeInTheDocument();
  });

  it("should render the Recommendations sub-header", () => {
    // Arrange
    render(<RecommendationHeader />);

    // Act
    const subHeader = screen.getByRole("heading", {
      name: /suggested actions to improve operations/i,
      level: 3,
    });

    // Assert
    expect(subHeader).toBeInTheDocument();
  });
});