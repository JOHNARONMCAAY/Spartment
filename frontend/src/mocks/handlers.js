import {
  http,
  HttpResponse,
} from "msw";


export const handlers = [

  http.get(
    "http://localhost:5000/billing",
    () => {

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

    }
  ),



  http.get(
    "http://localhost:5000/analytics",
    () => {

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
            message:
              "2 tenants have overdue balances.",
          },
        ],

      });

    }
  ),

];