import { useEffect, useState } from "react";

import { getRooms } from "../api/roomApi";

export default function useRooms() {
  const [rooms, setRooms] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchRooms = async () => {
    try {
      setLoading(true);

      const data = await getRooms();

      setRooms(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return {
    rooms,
    loading,
    error,
    refetch: fetchRooms,
  };
}
