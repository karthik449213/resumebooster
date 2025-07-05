import { toast } from '@/hooks/use-toast';

export function showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
  switch (type) {
    case 'success':
      toast({
        title: 'Success',
        description: message,
        variant: 'default',
      });
      break;
    case 'error':
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
      break;
    case 'info':
      toast({
        title: 'Info',
        description: message,
        variant: 'default',
      });
      break;
  }
}
