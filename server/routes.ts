import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // PDF upload endpoint - for now returns a helpful message
  app.post('/api/upload-resume', upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // For now, we'll provide a helpful message about PDF text extraction
      // This is a placeholder that encourages users to copy-paste text manually
      const sampleText = `Please copy and paste your resume text manually for now.

To extract text from your PDF:
1. Open your PDF file
2. Select all text (Ctrl+A or Cmd+A)
3. Copy the text (Ctrl+C or Cmd+C)
4. Paste it into the text area below

We're working on automatic PDF text extraction. Thank you for your patience!`;

      res.json({ 
        text: sampleText,
        message: 'PDF received - please copy and paste your resume text manually for now'
      });
    } catch (error) {
      console.error('PDF processing error:', error);
      res.status(500).json({ 
        error: 'Failed to process PDF file. Please copy and paste your resume text manually.' 
      });
    }
  });

  // Error handling for multer
  app.use((error: any, req: any, res: any, next: any) => {
    if (error instanceof multer.MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File too large. Maximum size is 10MB.' });
      }
    }
    if (error.message === 'Only PDF files are allowed') {
      return res.status(400).json({ error: 'Only PDF files are allowed' });
    }
    next(error);
  });

  const httpServer = createServer(app);

  return httpServer;
}
