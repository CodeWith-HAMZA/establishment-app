import { useState, useCallback } from "react";

interface UseMutationParams<TVariables, TResponse> {
  action: (variables: TVariables) => Promise<TResponse>;
}

interface UseMutationReturn<TVariables, TResponse> {
  mutate: (variables: TVariables) => Promise<void>;
  isLoading: boolean;
  isError: boolean;
  data: TResponse | null;
  error: Error | null;
}

export function useMutation<TVariables, TResponse>({
  action,
}: UseMutationParams<TVariables, TResponse>): UseMutationReturn<TVariables, TResponse> {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<TResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const mutate = useCallback(
    async (variables: TVariables): Promise<void> => {
      setIsLoading(true);
      setIsError(false);
      setError(null);
      setData(null);
      try {
        const response = await action(variables);
        setData(response);
      } catch (err) {
        setIsError(true);
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    },
    [action, isLoading]
  );

  return {
    mutate,
    isLoading,
    isError,
    data,
    error,
  };
}
