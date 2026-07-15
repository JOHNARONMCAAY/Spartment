import { useEffect, useState } from "react";

import { getBillingInformation } from "../api/billingApi";

import BillingSummaryCards from "../components/BillingSummaryCards";
import RentStatementTable from "../components/RentStatementTable";
import UtilityStatementTable from "../components/UtilityStatementTable";

import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";

export default function BillingDashboard() {
  const [billing, setBilling] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadBilling() {
      try {
        const data =
          await getBillingInformation();

        setBilling(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadBilling();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!billing) {
    return <EmptyState />;
  }

  return (
    <div>
      <BillingSummaryCards
        summary={billing.summary}
      />

      <RentStatementTable
        rentStatements={
          billing.rentStatements
        }
      />

      <UtilityStatementTable
        utilityStatements={
          billing.utilityStatements
        }
      />
    </div>
  );
}