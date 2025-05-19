import { MutationCache, QueryCache, QueryClient, QueryClientProvider  } from '@tanstack/react-query'
import axios from 'axios';
import { toast } from 'sonner';
import type { Mutation, Query,QueryKey} from '@tanstack/react-query';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onSuccess: (_data: unknown, query: Query<unknown, unknown, unknown, QueryKey>): void => {
      if (query.meta?.SUCCESS_MESSAGE) {
        toast.success(`${query.meta.SUCCESS_MESSAGE}:`);
      }
    },
    onError: (error: unknown, query: Query<unknown, unknown, unknown, QueryKey>): void => {
      if (axios.isAxiosError(error) && query.meta?.ERROR_SOURCE) {
        toast.error(`${query.meta.ERROR_SOURCE}: ${error.response?.data?.message}`);
      }
      if (error instanceof Error && query.meta?.ERROR_SOURCE) {
        toast.error(`${query.meta.ERROR_SOURCE}: ${error.message}`);
      }
    }
  }),
  mutationCache: new MutationCache({
    onError: (
      error: unknown,
      _variables: unknown,
      _context: unknown,
      mutation: Mutation<unknown, unknown, unknown, unknown>
    ): void => {
      if (axios.isAxiosError(error) && mutation.meta?.ERROR_SOURCE) {
        toast.error(`${mutation.meta.ERROR_SOURCE}: ${error.response?.data?.message}`);
      }
      if (error instanceof Error && mutation.meta?.ERROR_SOURCE) {
        toast.error(`${mutation.meta.ERROR_SOURCE}: ${error.message}`);
      }
    },
    onSuccess: (
      _data: unknown,
      _variables: unknown,
      _context: unknown,
      mutation: Mutation<unknown, unknown, unknown, unknown>
    ): void => {
      if (mutation.meta?.SUCCESS_MESSAGE) {
        toast.success(`${mutation.meta.SUCCESS_MESSAGE}:`);
      }
    }
  })
})

export function getContext() {
  return {
    queryClient,
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
