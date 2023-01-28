import {useQuery, QueryKey, useMutation, UseMutationOptions} from "react-query";
import {UseQueryOptions} from "react-query/types/react/types";

export const useReactQuery = <T,>(queryOptions?: UseQueryOptions<T[], Error, T[], QueryKey>, mutationOptions?:  UseMutationOptions<T[], Error, void, unknown>) => {
    const query = useQuery<T[], Error>(queryOptions!);
    const mutation = useMutation<T[], Error>(mutationOptions!);

    return {query, mutation}
}