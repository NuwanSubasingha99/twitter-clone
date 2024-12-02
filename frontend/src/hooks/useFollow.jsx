import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useFollow = () => {

    const queryClient = useQueryClient();

    const { mutate: followUser, isPending, isError, error } = useMutation({
        mutationFn: async (userId) => {
            try {
                const res = await fetch(`/api/users/follow/${userId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || 'Something went wrong');
                return data;

            } catch (error) {
                throw new Error(error.message);

            }
        },
        onSuccess: () => {
            Promise.all([
                queryClient.invalidateQueries({ queryKey: ['rightPanelUsers'] }),
                queryClient.invalidateQueries({ queryKey: ['authUser'] })
            ])
            toast.success('User followed successfully');

        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
    return { followUser, isPending, isError, error };

}

export default useFollow;
