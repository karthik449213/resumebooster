import { useState } from 'react';
import { FileText, Upload, Trash2, Copy, Download, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ResumeAI, ResumeImprovementResult } from '@/lib/resumeAI';
import { showToast } from '@/lib/toast';

export function ResumeImprover() {
  const [resumeText, setResumeText] = useState('');
  const [improvedText, setImprovedText] = useState('');
  const [isImproving, setIsImproving] = useState(false);
  const [stats, setStats] = useState<ResumeImprovementResult | null>(null);

  const handleImprove = async () => {
    if (!resumeText.trim()) {
      showToast('Please enter your resume text first', 'error');
      return;
    }

    setIsImproving(true);
    
    // Simulate AI processing delay for better UX
    setTimeout(() => {
      const result = ResumeAI.improveResume(resumeText);
      setImprovedText(result.text);
      setStats(result);
      setIsImproving(false);
      showToast('Resume improved successfully!', 'success');
    }, 2000);
  };

  const handleClear = () => {
    setResumeText('');
    setImprovedText('');
    setStats(null);
  };

  const handleCopy = async () => {
    if (!improvedText) return;
    
    try {
      await navigator.clipboard.writeText(improvedText);
      showToast('Resume copied to clipboard!', 'success');
    } catch (error) {
      showToast('Failed to copy resume', 'error');
    }
  };

  const handleDownload = () => {
    if (!improvedText) return;
    
    const blob = new Blob([improvedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'improved_resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Resume downloaded successfully!', 'success');
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Input Section */}
      <Card className="animate-slide-up">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-6 w-6 text-primary mr-3" />
              Your Current Resume
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-muted-foreground hover:text-primary"
                title="Upload PDF"
              >
                <Upload className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="p-2 text-muted-foreground hover:text-destructive"
                title="Clear"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="Paste your resume text here...

Example:
• Worked at company
• Helped with projects
• Good communication skills
• Responsible for tasks"
            className="min-h-[320px] resize-none bg-muted/50 border-border focus:border-primary/50 focus:ring-primary/20"
          />
          
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                {resumeText.length} characters
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft"></div>
                <span className="text-sm text-muted-foreground">Ready to improve</span>
              </div>
            </div>
            <Button
              onClick={handleImprove}
              disabled={!resumeText.trim() || isImproving}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Wand2 className="h-4 w-4 mr-2" />
              {isImproving ? 'Improving...' : 'Fix My Resume'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Output Section */}
      <Card className="animate-slide-up">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs">★</span>
              </div>
              Improved Resume
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                disabled={!improvedText}
                className="p-2 text-muted-foreground hover:text-primary disabled:opacity-50"
                title="Copy to clipboard"
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownload}
                disabled={!improvedText}
                className="p-2 text-muted-foreground hover:text-green-600 disabled:opacity-50"
                title="Download"
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="min-h-[320px] p-4 border border-border rounded-lg bg-muted/50 overflow-y-auto">
            {improvedText ? (
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground">
                  {improvedText}
                </pre>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <div className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <span className="text-yellow-500 text-xl">💡</span>
                    </div>
                  </div>
                  <p className="font-medium">Your improved resume will appear here</p>
                  <p className="text-sm mt-2">Paste your resume and click "Fix My Resume" to get started</p>
                </div>
              </div>
            )}
          </div>
          
          {stats && (
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                <div className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                  {stats.improvements}
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400">Improvements</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                <div className="text-lg font-semibold text-green-700 dark:text-green-300">
                  {stats.impactWords}
                </div>
                <div className="text-sm text-green-600 dark:text-green-400">Impact Words</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg">
                <div className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                  {stats.readability}%
                </div>
                <div className="text-sm text-purple-600 dark:text-purple-400">Readability</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
