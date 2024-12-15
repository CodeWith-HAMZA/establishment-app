// // hooks/queries/useAllUsersWithApplications.ts
import {useQuery} from '@tanstack/react-query';
import {me} from '../../../auth.service';

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ['eu'],
    queryFn: () => me(),
  });
};
