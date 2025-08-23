import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../lib/api";
import toast from "react-hot-toast";

const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (updatedUser) => {
      toast.success("Profile updated successfully!");
      // Update the user data in cache
      queryClient.setQueryData(["authUser"], updatedUser);
      // Invalidate and refetch user-related queries
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      queryClient.invalidateQueries({ queryKey: ["friends"] });
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "Failed to update profile";
      toast.error(errorMessage);
    },
  });
};

export default useUpdateProfile;