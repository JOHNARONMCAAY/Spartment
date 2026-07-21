import { useState } from "react";

import { createTenant } from "../api/tenantCreationApi";

export default function useTenantCreation() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [tenant, setTenant] = useState(null);

  const registerTenant = async (tenantData) => {
    try {
      setLoading(true);

      setError(null);

      const response = await createTenant(tenantData);

      setTenant(response.tenant);

      return response;
    } catch (error) {
      setError(error.message);

      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    registerTenant,

    tenant,

    loading,

    error,
  };
}
