import { useEffect, useState } from "react";

import {
  getCustomerRequests,
  approveRequest,
  rejectRequest,
} from "../api/customerRequestApi";

export default function useCustomerRequests() {
  const [requests, setRequests] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchRequests = async () => {
    try {
      setLoading(true);

      const data = await getCustomerRequests();

      setRequests(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const approve = async (id) => {
    await approveRequest(id);

    await fetchRequests();
  };

  const reject = async (id) => {
    await rejectRequest(id);

    await fetchRequests();
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return {
    requests,

    loading,

    error,

    approve,

    reject,

    refetch: fetchRequests,
  };
}
