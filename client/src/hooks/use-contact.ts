import { useMutation } from "@tanstack/react-query";
import { type InsertContact } from "@/lib/contact-schema";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertContact) => {
      // Frontend-only: simulate success (no backend)
      console.log("Contact form submitted:", data);
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
