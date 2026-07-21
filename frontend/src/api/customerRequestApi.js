const API_URL = "http://localhost:5000/api/customer-requests";

export async function getCustomerRequests() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to retrieve customer requests.");
  }

  return response.json();
}

export async function approveRequest(id) {
  const response = await fetch(`${API_URL}/${id}/approve`, {
    method: "PATCH",
  });

  if (!response.ok) {
    throw new Error("Failed to approve request.");
  }

  return response.json();
}

export async function rejectRequest(id) {
  const response = await fetch(`${API_URL}/${id}/reject`, {
    method: "PATCH",
  });

  if (!response.ok) {
    throw new Error("Failed to reject request.");
  }

  return response.json();
}
