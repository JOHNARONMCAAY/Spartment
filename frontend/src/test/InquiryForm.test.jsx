import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import InquiryForm from "../components/InquiryForm";

describe("InquiryForm", () => {
  it("should render the Inquiry form with all required input fields", () => {
    render(<InquiryForm />);

    expect(
      screen.getByRole("heading", {
        name: /spartment assistant/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contact/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/preferred room/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/move-in date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /send/i })
    ).toBeInTheDocument();
  });

  it("should allow the user to fill all text fields", async () => {
    const user = userEvent.setup();

    render(<InquiryForm />);

    const fullName = screen.getByLabelText(/full name/i);
    const email = screen.getByLabelText(/email/i);
    const contact = screen.getByLabelText(/contact/i);
    const room = screen.getByLabelText(/preferred room/i);
    const moveIn = screen.getByLabelText(/move-in date/i);
    const message = screen.getByLabelText(/message/i);

    await user.type(fullName, "Juan Dela Cruz");
    await user.type(email, "juan@gmail.com");
    await user.type(contact, "09123456789");
    await user.type(room, "102");
    await user.type(moveIn, "2026-07-01");
    await user.type(
      message,
      "I would like to inquire about room availability."
    );

    expect(fullName).toHaveValue("Juan Dela Cruz");
    expect(email).toHaveValue("juan@gmail.com");
    expect(contact).toHaveValue("09123456789");
    expect(room).toHaveValue("102");
    expect(moveIn).toHaveValue("2026-07-01");
    expect(message).toHaveValue(
      "I would like to inquire about room availability."
    );
  });

  it("should allow the user to delete all entered text", async () => {
    const user = userEvent.setup();

    render(<InquiryForm />);

    const fullName = screen.getByLabelText(/full name/i);
    const email = screen.getByLabelText(/email/i);
    const contact = screen.getByLabelText(/contact/i);
    const room = screen.getByLabelText(/preferred room/i);
    const message = screen.getByLabelText(/message/i);

    await user.type(fullName, "Juan Dela Cruz");
    await user.type(email, "juan@gmail.com");
    await user.type(contact, "09123456789");
    await user.type(room, "102");
    await user.type(message, "Inquiry message");

    await user.clear(fullName);
    await user.clear(email);
    await user.clear(contact);
    await user.clear(room);
    await user.clear(message);

    expect(fullName).toHaveValue("");
    expect(email).toHaveValue("");
    expect(contact).toHaveValue("");
    expect(room).toHaveValue("");
    expect(message).toHaveValue("");
  });

  it("should submit the form when all required fields are filled", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<InquiryForm onSubmit={handleSubmit} />);

    await user.type(
      screen.getByLabelText(/full name/i),
      "Juan Dela Cruz"
    );
    await user.type(
      screen.getByLabelText(/email/i),
      "juan@gmail.com"
    );
    await user.type(
      screen.getByLabelText(/contact/i),
      "09123456789"
    );
    await user.type(
      screen.getByLabelText(/preferred room/i),
      "102"
    );
    await user.type(
      screen.getByLabelText(/move-in date/i),
      "2026-07-01"
    );
    await user.type(
      screen.getByLabelText(/message/i),
      "I would like to inquire about room availability."
    );

    await user.click(
      screen.getByRole("button", { name: /send/i })
    );

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      fullName: "Juan Dela Cruz",
      email: "juan@gmail.com",
      contact: "09123456789",
      room: "102",
      moveIn: "2026-07-01",
      message: "I would like to inquire about room availability.",
    });
  });

  it("should not submit the form when required fields are empty", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<InquiryForm onSubmit={handleSubmit} />);

    await user.click(
      screen.getByRole("button", { name: /send/i })
    );

    expect(handleSubmit).not.toHaveBeenCalled();
  });
});