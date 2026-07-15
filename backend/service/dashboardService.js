import { getDashboardMetrics } from "../model/dashboardModel.js";

export async function fetchDashboardMetrics() {
  try {
    const metrics = await getDashboardMetrics();

    return metrics;
  } catch (error) {
    throw new Error("Failed to retrieve dashboard metrics.");
  }
}