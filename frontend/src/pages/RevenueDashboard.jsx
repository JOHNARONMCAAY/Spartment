import { useEffect, useState } from "react";

import { getDashboardMetrics } from "../api/dashboardApi";

import Header from "../components/Header";
import KpiCard from "../components/KpiCard";

import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";

export default function RevenueDashboard() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboardMetrics() {
      try {
        const data = await getDashboardMetrics();

        setMetrics(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadDashboardMetrics();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!metrics) {
    return <EmptyState />;
  }

  return (
    <div>
      <Header />

      <div>
        <KpiCard
          title="Monthly Revenue"
          value={metrics.monthlyRevenue}
          subtitle="Current Month"
        />

        <KpiCard
          title="Occupancy"
          value={metrics.occupancy}
          subtitle="Occupancy Rate"
        />

        <KpiCard
          title="Active Tenants"
          value={metrics.activeTenants}
          subtitle="Current Tenants"
        />

        <KpiCard
          title="Late Payments"
          value={metrics.latePayments}
          subtitle="Pending Accounts"
        />
      </div>
    </div>
  );
}