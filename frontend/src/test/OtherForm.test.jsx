import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import OtherForm from "../components/OtherForm";

describe("OtherForm", () => {
  it("should render the Other form with all required input fields", () => {
    // Arrange
    render(<OtherForm />);

    // Assert
    expect(
      screen.getByRole("heading", {
        name: /spartment assistant/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /back/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /send/i,
      })
    ).toBeInTheDocument();
  });

  it("should allow the user to fill all text fields", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<OtherForm />);

    const subject = screen.getByLabelText(/subject/i);
    const message = screen.getByLabelText(/message/i);

    // Act
    await user.type(subject, "Parking Concern");
    await user.type(
      message,
      "I would like to ask about the available parking spaces."
    );

    // Assert
    expect(subject).toHaveValue("Parking Concern");
    expect(message).toHaveValue(
      "I would like to ask about the available parking spaces."
    );
  });

  it("should allow the user to delete all entered text", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<OtherForm />);

    const subject = screen.getByLabelText(/subject/i);
    const message = screen.getByLabelText(/message/i);

    await user.type(subject, "Parking Concern");
    await user.type(
      message,
      "I would like to ask about the available parking spaces."
    );

    // Act
    await user.clear(subject);
    await user.clear(message);

    // Assert
    expect(subject).toHaveValue("");
    expect(message).toHaveValue("");
  });

  it("should submit the form when all required fields are filled", async () => {
    // Arrange
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<OtherForm onSubmit={handleSubmit} />);

    // Act
    await user.type(
      screen.getByLabelText(/subject/i),
      "Parking Concern"
    );

    await user.type(
      screen.getByLabelText(/message/i),
      "I would like to ask about the available parking spaces."
    );

    await user.click(
      screen.getByRole("button", {
        name: /send/i,
      })
    );

    // Assert
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      subject: "Parking Concern",
      message:
        "I would like to ask about the available parking spaces.",
    });
  });

  it("should not submit the form when required fields are empty", async () => {
    // Arrange
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<OtherForm onSubmit={handleSubmit} />);

    // Act
    await user.click(
      screen.getByRole("button", {
        name: /send/i,
      })
    );

    // Assert
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});