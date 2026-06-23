import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import NotificationButton from "../components/NotificationButton";

describe("NotificationButton", () => {
  it("should render the notification button", () => {
    // Arrange
    const handleClick = vi.fn();

    // Act
    render(<NotificationButton onClick={handleClick} />);

    const button = screen.getByRole("button", {
      name: /notification/i,
    });

    // Assert
    expect(button).toBeInTheDocument();
  });

  it("should call onClick when notification button is clicked", () => {
    // Arrange
    const handleClick = vi.fn();

    render(<NotificationButton onClick={handleClick} />);

    const button = screen.getByRole("button", {
      name: /notification/i,
    });

    // Act
    fireEvent.click(button);

    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});