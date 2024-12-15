import { useState, useEffect, useCallback } from "react";

interface UseQueryParams<TResponse> {
  action: () => Promise<TResponse>;
  dependencies?: any[];
}

interface UseQueryReturn<TResponse> {
  isLoading: boolean;
  isError: boolean;
  data: TResponse | null;
  error: Error | null;
}



export function useQuery<TResponse>({
  action,
  dependencies = [],
}: UseQueryParams<TResponse>): UseQueryReturn<TResponse> {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<TResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);
    setData(null);
    try {
      const response = await action();
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, [action]);

  useEffect(() => {
    fetchData();
  }, dependencies);

  return {
    isLoading,
    isError,
    data,
    error,
  };
}
