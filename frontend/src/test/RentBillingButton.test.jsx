import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import RentBillingButton from "../components/RentBillingButton";
import RentBillingCards from "../components/RentBillingCards";

describe("RentBillingButton", () => {
  it("should render the Rent Billing button successfully", () => {
    // Arrange
    render(<RentBillingButton />);

    // Act
    const button = screen.getByRole("button", {
      name: /rent billing/i,
    });

    // Assert
    expect(button).toBeInTheDocument();
  });

  it("should call onClick when the Rent Billing button is clicked", async () => {
    // Arrange
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <RentBillingButton onClick={handleClick} />
    );

    const button = screen.getByRole("button", {
      name: /rent billing/i,
    });

    // Act
    await user.click(button);

    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should show the Rent Billing cards when the button is clicked", async () => {
    // Arrange
    const user = userEvent.setup();

    function TestComponent() {
      const [showCards, setShowCards] = useState(false);

      return (
        <>
          <RentBillingButton
            onClick={() => setShowCards(true)}
          />

          {showCards && <RentBillingCards />}
        </>
      );
    }

    render(<TestComponent />);

    const button = screen.getByRole("button", {
      name: /rent billing/i,
    });

    // Act
    await user.click(button);

    // Assert
    expect(
      screen.getByText(/billed/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/collected/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/pending/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/late/i)
    ).toBeInTheDocument();
  });
});