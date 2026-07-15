const dashboardData = {
  monthlyRevenue: "₱125,000",
  occupancy: "95%",
  activeTenants: 32,
  latePayments: 4,
};

export async function getDashboardMetrics() {
  return dashboardData;
}