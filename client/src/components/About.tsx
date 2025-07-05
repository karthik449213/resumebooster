import { Brain, GraduationCap, Shield, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Why Choose Boost My Resume?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand the challenges students face when crafting their first resumes. Our AI-powered tool is designed specifically to help you stand out from the crowd.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Smart AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our advanced algorithms identify weak points in your resume and suggest specific improvements based on industry best practices.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Student-Focused</h3>
                <p className="text-muted-foreground">
                  Designed specifically for students and recent graduates, understanding the unique challenges of limited work experience.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Privacy First</h3>
                <p className="text-muted-foreground">
                  Your resume data stays secure and private. We don't store or share your personal information with third parties.
                </p>
              </div>
            </div>
          </div>
          
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-border">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Success Statistics</h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">95%</div>
                    <div className="text-sm text-muted-foreground">Improvement Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">50K+</div>
                    <div className="text-sm text-muted-foreground">Resumes Improved</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                    <div className="text-sm text-muted-foreground">Always Available</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">$0</div>
                    <div className="text-sm text-muted-foreground">Completely Free</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            How We Boost Your Resume
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-center">Grammar & Clarity</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Fix grammatical errors and improve sentence structure for professional clarity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-600 dark:bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">📈</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-center">Impact Metrics</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Add measurable achievements and quantifiable results to showcase your value.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-purple-600 dark:bg-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">🚀</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-center">Action Words</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Replace weak phrases with powerful action verbs that grab attention.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
