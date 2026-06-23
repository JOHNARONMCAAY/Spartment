import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NotificationTable from "../components/NotificationTable";

describe("NotificationTable", () => {
  it("should render the notification table headers", () => {
    // Arrange
    render(<NotificationTable />);

    // Act
    const typeHeader = screen.getByText("Notification Type");
    const messageHeader = screen.getByText("Message");
    const timestampHeader = screen.getByText("Timestamp");

    // Assert
    expect(typeHeader).toBeInTheDocument();
    expect(messageHeader).toBeInTheDocument();
    expect(timestampHeader).toBeInTheDocument();
  });

  it("should display notification records correctly", () => {
    // Arrange
    render(<NotificationTable />);

    // Act
    const paymentType = screen.getByText("Payment Due");
    const paymentMessage = screen.getByText(
      "Tenant payment due tomorrow"
    );
    const paymentTimestamp = screen.getByText("2026-06-23");

    // Assert
    expect(paymentType).toBeInTheDocument();
    expect(paymentMessage).toBeInTheDocument();
    expect(paymentTimestamp).toBeInTheDocument();
  });

  it("should display all notification rows", () => {
    // Arrange
    render(<NotificationTable />);

    // Act
    const leaseType = screen.getByText("Lease Expiry");
    const leaseMessage = screen.getByText(
      "Lease expires in 7 days"
    );
    const leaseTimestamp = screen.getByText("2026-06-22");

    // Assert
    expect(leaseType).toBeInTheDocument();
    expect(leaseMessage).toBeInTheDocument();
    expect(leaseTimestamp).toBeInTheDocument();
  });
});