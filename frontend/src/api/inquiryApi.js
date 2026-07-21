const API_URL = "http://localhost:5000/api/inquiries";

export async function submitInquiry(data) {
  const response = await fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit inquiry.");
  }

  return response.json();
}
