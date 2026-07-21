const API_URL = "http://localhost:5000/api/tenants/create";

export async function createTenant(data) {
  const response = await fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create tenant.");
  }

  return response.json();
}
