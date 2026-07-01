import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import RentBillingCards from "../components/RentBillingCards";

describe("RentBillingCards", () => {
  it("should render the Rent Billing cards", () => {
    // Arrange
    render(<RentBillingCards />);

    // Act
    const billed = screen.getByText(/billed/i);
    const collected = screen.getByText(/collected/i);
    const pending = screen.getByText(/pending/i);
    const late = screen.getByText(/late/i);

    // Assert
    expect(billed).toBeInTheDocument();
    expect(collected).toBeInTheDocument();
    expect(pending).toBeInTheDocument();
    expect(late).toBeInTheDocument();
  });

  it("should display the correct payment values", () => {
    // Arrange
    render(
      <RentBillingCards
        billed="₱120,000"
        collected="₱95,000"
        pending="₱20,000"
        late="₱5,000"
      />
    );

    // Act
    const billedValue = screen.getByText("₱120,000");
    const collectedValue = screen.getByText("₱95,000");
    const pendingValue = screen.getByText("₱20,000");
    const lateValue = screen.getByText("₱5,000");

    // Assert
    expect(billedValue).toBeInTheDocument();
    expect(collectedValue).toBeInTheDocument();
    expect(pendingValue).toBeInTheDocument();
    expect(lateValue).toBeInTheDocument();
  });

  it("should display ₱0 when payment values are not provided", () => {
    // Arrange
    render(<RentBillingCards />);

    // Act
    const defaultValues = screen.getAllByText("₱0");

    // Assert
    expect(defaultValues).toHaveLength(4);
  });
});