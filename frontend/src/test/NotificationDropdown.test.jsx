import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NotificationDropdown from "../components/NotificationDropdown";

describe("NotificationDropdown", () => {
  it("should render the notifications heading", () => {
    // Arrange
    render(<NotificationDropdown />);

    // Act
    const heading = screen.getByText("Notifications");

    // Assert
    expect(heading).toBeInTheDocument();
  });

  it("should display all notification messages", () => {
    // Arrange
    render(<NotificationDropdown />);

    // Act
    const paymentNotification = screen.getByText(
      "Tenant payment due tomorrow"
    );
    const leaseNotification = screen.getByText(
      "Lease expires in 7 days"
    );

    // Assert
    expect(paymentNotification).toBeInTheDocument();
    expect(leaseNotification).toBeInTheDocument();
  });

  it("should display an unread notification indicator", () => {
    // Arrange
    render(<NotificationDropdown />);

    // Act
    const unreadIndicator = screen.getByText("●");

    // Assert
    expect(unreadIndicator).toBeInTheDocument();
  });
});