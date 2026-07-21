import { http, HttpResponse } from "msw";

export const handlers = [
  /*
  ==========================================
  BILLING API
  ==========================================
  */

  http.get("http://localhost:5000/billing", () => {
    return HttpResponse.json({
      currentBill: {
        billingMonth: "May 2026",

        amount: 1070,

        dueDate: "May 20, 2026",

        status: "Pending",
      },

      billingHistory: [
        {
          month: "April 2026",

          amount: 950,

          status: "Paid",
        },

        {
          month: "March 2026",

          amount: 900,

          status: "Paid",
        },
      ],

      paymentStatus: {
        status: "Pending",

        lastPayment: "April 20, 2026",

        balance: 1070,
      },
    });
  }),

  /*
  ==========================================
  ANALYTICS API
  ==========================================
  */

  http.get("http://localhost:5000/analytics", () => {
    return HttpResponse.json({
      totalRevenue: 80000,

      totalTenants: 32,

      occupancyRate: 95,

      paymentStatus: {
        paid: 20,

        pending: 5,

        overdue: 2,
      },

      revenueTrend: [
        {
          month: "January",

          amount: 50000,
        },

        {
          month: "February",

          amount: 60000,
        },
      ],

      recommendations: [
        {
          title: "Overdue Payments",

          message: "2 tenants have overdue balances.",
        },
      ],
    });
  }),

  /*
  ==========================================
  ROOM API
  ==========================================
  */

  http.get("http://localhost:5000/api/rooms", () => {
    return HttpResponse.json([
      {
        roomId: 1,

        roomNumber: "101",

        status: "Vacant",

        price: 5000,
      },

      {
        roomId: 2,

        roomNumber: "102",

        status: "Occupied",

        price: 5000,
      },

      {
        roomId: 3,

        roomNumber: "103",

        status: "Reserved",

        price: 5000,
      },
    ]);
  }),

  http.get("http://localhost:5000/api/rooms/available", () => {
    return HttpResponse.json([
      {
        roomId: 1,

        roomNumber: "101",

        status: "Vacant",

        price: 5000,
      },
    ]);
  }),

  /*
  ==========================================
  INQUIRY API
  ==========================================
  */

  http.post("http://localhost:5000/api/inquiries", async ({ request }) => {
    const body = await request.json();

    return HttpResponse.json({
      message: "Inquiry submitted successfully.",

      inquiry: {
        id: 1,

        ...body,

        status: "Pending",
      },
    });
  }),

  http.get("http://localhost:5000/api/inquiries", () => {
    return HttpResponse.json([
      {
        id: 1,

        guestName: "Juan Dela Cruz",

        email: "juan@gmail.com",

        contact: "09123456789",

        requestedRoom: "101",

        message: "Interested in renting this room.",

        status: "Pending",
      },
    ]);
  }),

  /*
  ==========================================
  CUSTOMER REQUEST API
  ==========================================
  */

  http.get("http://localhost:5000/api/customer-requests", () => {
    return HttpResponse.json([
      {
        id: 1,

        guestName: "Juan Dela Cruz",

        email: "juan@gmail.com",

        contact: "09123456789",

        requestedRoom: "101",

        message: "Interested in renting this room.",

        status: "Pending",
      },
    ]);
  }),

  http.put("http://localhost:5000/api/customer-requests/:id/approve", () => {
    return HttpResponse.json({
      message: "Request approved successfully.",

      status: "Approved",
    });
  }),

  http.put("http://localhost:5000/api/customer-requests/:id/reject", () => {
    return HttpResponse.json({
      message: "Request rejected successfully.",

      status: "Rejected",
    });
  }),

  /*
  ==========================================
  TENANT CREATION API
  ==========================================
  */

  http.post("http://localhost:5000/api/tenants", async ({ request }) => {
    const body = await request.json();

    return HttpResponse.json({
      message: "Tenant created successfully.",

      tenant: {
        id: 1,

        fullName: body.fullName,

        email: body.email || "tenant101@email.com",

        roomNumber: body.roomNumber,

        temporaryPassword: "Tenant123",

        status: "Active",
      },
    });
  }),
];
