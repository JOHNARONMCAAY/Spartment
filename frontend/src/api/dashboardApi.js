import { fetchDashboardMetrics } from "../../../backend/service/dashboardService.js";

export async function getDashboardMetrics() {
  try {
    const metrics = await fetchDashboardMetrics();

    return metrics;
  } catch (error) {
    throw new Error(error.message);
  }
}