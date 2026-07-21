export const validateInquiry = (data) => {
  if (!data.name) {
    throw new Error(
      "Name is required"
    );
  }

  if (!data.email) {
    throw new Error(
      "Email is required"
    );
  }

  if (!data.room) {
    throw new Error(
      "Room is required"
    );
  }

  if (!data.type) {
    throw new Error(
      "Inquiry type is required"
    );
  }

  if (!data.message) {
    throw new Error(
      "Message is required"
    );
  }


  return true;
};