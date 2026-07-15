import { fetchDashboardMetrics } from "../../../backend/service/dashboardService.js";

export async function getDashboardMetrics() {
  try {
    return await fetchDashboardMetrics();
  } catch (error) {
    throw new Error(error.message);
  }
}