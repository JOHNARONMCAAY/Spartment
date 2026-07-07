const tenantData = {
  tenant: {
    name: "Juan Dela Cruz",
    contact: "09123456789",
    email: "juan@email.com",
  },

  room: {
    roomNumber: "Room 101",
    monthlyRent: 5000,
    nextDue: "July 15, 2026",
  },

  payments: [
    {
      month: "January",
      amount: 5000,
      status: "Paid",
    },
    {
      month: "February",
      amount: 5000,
      status: "Paid",
    },
    {
      month: "March",
      amount: 5000,
      status: "Pending",
    },
  ],
};

export async function getTenantInformation() {
  return tenantData;
}