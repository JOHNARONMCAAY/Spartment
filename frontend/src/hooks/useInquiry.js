import { useState } from "react";

import { submitInquiry } from "../api/inquiryApi";

export default function useInquiry() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [success, setSuccess] = useState(null);

  const createInquiry = async (inquiryData) => {
    try {
      setLoading(true);

      setError(null);

      const response = await submitInquiry(inquiryData);

      setSuccess(response.message);

      return response;
    } catch (error) {
      setError(error.message);

      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    createInquiry,

    loading,

    error,

    success,
  };
}
