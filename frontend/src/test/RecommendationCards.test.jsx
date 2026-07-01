import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import RecommendationCards from "../components/RecommendationCards";

const mockRecommendations = [
  {
    title: "Due Payments",
    message: "5 tenants have upcoming due dates.",
  },
  {
    title: "Overdue Payments",
    message: "2 tenants have overdue balances.",
  },
  {
    title: "Collection Suggestion",
    message: "Send payment reminders to overdue tenants.",
  },
];

describe("RecommendationCards", () => {
  it("should render the recommendation cards", () => {
    // Arrange
    render(
      <RecommendationCards
        recommendations={mockRecommendations}
      />
    );

    // Act
    const duePayments = screen.getByRole("heading", {
      name: /^Due Payments$/i,
      level: 3,
    });

    const overduePayments = screen.getByRole("heading", {
      name: /^Overdue Payments$/i,
      level: 3,
    });

    const collectionSuggestion = screen.getByRole("heading", {
      name: /^Collection Suggestion$/i,
      level: 3,
    });

    // Assert
    expect(duePayments).toBeInTheDocument();
    expect(overduePayments).toBeInTheDocument();
    expect(collectionSuggestion).toBeInTheDocument();
  });

  it("should display the recommendation messages", () => {
    // Arrange
    render(
      <RecommendationCards
        recommendations={mockRecommendations}
      />
    );

    // Act
    const dueMessage = screen.getByText(
      /^5 tenants have upcoming due dates\.$/
    );

    const overdueMessage = screen.getByText(
      /^2 tenants have overdue balances\.$/
    );

    const suggestion = screen.getByText(
      /^Send payment reminders to overdue tenants\.$/
    );

    // Assert
    expect(dueMessage).toBeInTheDocument();
    expect(overdueMessage).toBeInTheDocument();
    expect(suggestion).toBeInTheDocument();
  });

  it("should display a message when there are no recommendations", () => {
    // Arrange
    render(
      <RecommendationCards recommendations={[]} />
    );

    // Act
    const noRecommendation = screen.getByText(
      /^No recommendations available\.$/
    );

    // Assert
    expect(noRecommendation).toBeInTheDocument();
  });
});