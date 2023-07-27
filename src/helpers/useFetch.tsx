import { useState, useEffect } from "react";
import { request } from "../request";

export async function fetch<T>(url: string) {
  return await request<T>({
    method: "GET",
    url,
  });
}

export function useFetch<T>(url: string, initialValue: T) {
  const [data, setData] = useState<T>(initialValue);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);

        const response = await fetch<T>(url);

        setData(response.data);
      } catch (e: any) {
        setError(e.response.data.detail || "Error occured");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    setData: (data: T) => setData(data),
    error,
  };
}
