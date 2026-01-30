import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertContact) => {
      // In a real app with backend, this would be:
      // const res = await apiRequest("POST", api.contact.submit.path, data);
      // return res.json();
      
      // For this demo/portfolio, we'll simulate a success response
      console.log("Submitting contact form:", data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  });
}
