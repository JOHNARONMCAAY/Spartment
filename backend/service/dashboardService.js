export async function fetchDashboardMetrics({
  rooms,
  tenants,
  payments,
}) {
  try {
    const occupiedRooms = rooms.filter(
      (room) => room.status === "Occupied"
    ).length;

    const occupancy = Math.round(
      (occupiedRooms / rooms.length) * 100
    );

    const activeTenants = tenants.filter(
      (tenant) => tenant.status === "Active"
    ).length;

    const monthlyRevenue = payments.reduce(
      (total, payment) => total + payment.amount,
      0
    );

    const latePayments = payments.filter(
      (payment) => payment.status === "Late"
    ).length;

    return {
      monthlyRevenue: `₱${monthlyRevenue.toLocaleString()}`,
      occupancy: `${occupancy}%`,
      activeTenants,
      latePayments,
    };
  } catch {
    throw new Error(
      "Failed to retrieve dashboard metrics."
    );
  }
}