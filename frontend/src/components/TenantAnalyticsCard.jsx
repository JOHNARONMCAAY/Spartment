export default function TenantAnalyticsCard({
  totalTenants,
}) {
  return (
    <div>
      <h3>
        Active Tenants
      </h3>

      <p>
        {totalTenants}
      </p>
    </div>
  );
}