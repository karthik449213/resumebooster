import { CheckCircle, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
        Boost Your Resume with
        <span className="text-primary"> AI Power</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
        Transform your resume into a compelling story that gets you noticed. Our AI-powered tool rewrites, enhances, and optimizes your resume for maximum impact.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
        <Badge variant="secondary" className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2">
          <CheckCircle className="h-4 w-4 mr-2" />
          100% Free
        </Badge>
        <Badge variant="secondary" className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2">
          <Shield className="h-4 w-4 mr-2" />
          No API Keys Required
        </Badge>
      </div>
    </div>
  );
}
