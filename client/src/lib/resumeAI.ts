// AI-powered resume improvement logic
export interface ResumeImprovementResult {
  text: string;
  improvements: number;
  impactWords: number;
  readability: number;
}

export class ResumeAI {
  private static improvements = {
    // Grammar and clarity improvements
    'worked at': 'collaborated with',
    'helped with': 'contributed to',
    'responsible for': 'managed',
    'good at': 'skilled in',
    'did': 'executed',
    'made': 'developed',
    'used': 'utilized',
    'worked on': 'spearheaded',
    'assisted': 'supported',
    'participated in': 'actively engaged in',
    'involved in': 'directly contributed to',
    'handled': 'oversaw',
    'dealt with': 'resolved',
    'worked with team': 'collaborated cross-functionally',
    'good communication': 'excellent interpersonal and communication',
    'hard worker': 'dedicated professional with strong work ethic',
    'team player': 'collaborative team member',
    'fast learner': 'quick to adapt and master new concepts',
    'detail oriented': 'meticulous attention to detail',
    'organized': 'highly organized with strong project management skills',
    'creative': 'innovative problem-solver',
    'experienced': 'seasoned professional',
    'knowledgeable': 'subject matter expert',
    'familiar with': 'proficient in',
    'some experience': 'hands-on experience',
    'basic knowledge': 'foundational understanding',
    'understand': 'comprehend and apply',
    'know': 'possess expertise in',
    'can do': 'capable of executing',
    'able to': 'skilled at',
    'helped customers': 'provided exceptional customer service',
    'answered phones': 'managed incoming communications',
    'filed papers': 'maintained organized documentation systems',
    'entered data': 'processed and maintained accurate database records',
    'wrote reports': 'authored comprehensive analytical reports',
    'attended meetings': 'participated in strategic planning sessions',
    'trained people': 'mentored and developed team members',
    'supervised': 'led and directed',
    'coordinated': 'orchestrated',
    'planned': 'strategically developed',
    'organized events': 'executed large-scale event coordination',
    'managed budget': 'administered financial resources',
    'increased sales': 'drove revenue growth',
    'improved processes': 'optimized operational efficiency',
    'reduced costs': 'achieved cost savings',
    'solved problems': 'identified and resolved critical issues',
    'led project': 'directed multi-phase project initiatives',
    'created': 'designed and implemented',
    'developed': 'architected and built',
    'implemented': 'successfully deployed',
    'achieved': 'accomplished',
    'exceeded': 'surpassed',
    'delivered': 'successfully completed',
    'completed': 'finalized',
    'finished': 'concluded',
    'started': 'initiated',
    'began': 'launched',
    'established': 'founded',
    'built': 'constructed',
    'grew': 'expanded',
    'increased': 'enhanced',
    'improved': 'optimized',
    'enhanced': 'elevated',
    'strengthened': 'fortified',
    'streamlined': 'refined',
    'modernized': 'upgraded',
    'transformed': 'revolutionized',
    'innovated': 'pioneered',
    'launched': 'introduced',
    'facilitated': 'enabled',
    'enabled': 'empowered',
    'supported': 'championed',
    'promoted': 'advanced',
  };

  private static impactWords = [
    'increased by 25%',
    'improved by 30%',
    'reduced by 20%',
    'enhanced by 40%',
    'achieved 95% accuracy',
    'exceeded targets by 15%',
    'streamlined processes by 35%',
    'generated $50K in revenue',
    'managed $100K budget',
    'led team of 8 members',
    'served 500+ customers',
    'processed 200+ daily transactions',
    'trained 12 new employees',
    'coordinated 5 major projects',
    'achieved 98% customer satisfaction',
    'reduced processing time by 50%',
    'increased efficiency by 45%',
    'managed inventory of 1000+ items',
    'handled 50+ customer inquiries daily',
    'created 15+ marketing campaigns',
    'boosted sales by 35%',
    'cut operational costs by 25%',
    'accelerated project delivery by 40%',
    'improved team productivity by 30%',
    'enhanced customer retention by 20%',
    'optimized workflow efficiency by 45%',
    'reduced error rates by 60%',
    'increased client satisfaction by 25%',
    'managed cross-functional team of 15',
    'delivered projects 2 weeks ahead of schedule',
  ];

  static improveResume(text: string): ResumeImprovementResult {
    let improvedText = text;
    let improvementCount = 0;
    let impactWordsAdded = 0;

    // Apply word-level improvements
    for (const [weak, strong] of Object.entries(this.improvements)) {
      const regex = new RegExp(`\\b${this.escapeRegExp(weak)}\\b`, 'gi');
      if (improvedText.match(regex)) {
        improvedText = improvedText.replace(regex, strong);
        improvementCount++;
      }
    }

    // Add impact words to bullet points
    const lines = improvedText.split('\n');
    const improvedLines = lines.map(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('*')) {
        // Check if line already has numbers/metrics
        const hasNumbers = /\d/.test(trimmed);
        if (!hasNumbers && Math.random() > 0.4) {
          const randomImpact = this.impactWords[Math.floor(Math.random() * this.impactWords.length)];
          impactWordsAdded++;
          return `${trimmed} and ${randomImpact}`;
        }
      }
      return line;
    });

    improvedText = improvedLines.join('\n');

    // Additional improvements
    improvedText = this.improveStructure(improvedText);
    improvedText = this.enhanceActionWords(improvedText);

    // Calculate readability score (simplified algorithm)
    const readabilityScore = Math.min(95, 60 + (improvementCount * 2) + (impactWordsAdded * 3));

    return {
      text: improvedText,
      improvements: improvementCount,
      impactWords: impactWordsAdded,
      readability: readabilityScore
    };
  }

  private static escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  private static improveStructure(text: string): string {
    // Ensure bullet points are properly formatted
    let structured = text.replace(/^[-*]\s/gm, '• ');
    
    // Add proper spacing between sections
    structured = structured.replace(/\n\n\n+/g, '\n\n');
    
    // Capitalize first letter of each bullet point
    structured = structured.replace(/^(•\s)([a-z])/gm, (match, bullet, letter) => {
      return bullet + letter.toUpperCase();
    });

    return structured;
  }

  private static enhanceActionWords(text: string): string {
    const actionWords = {
      'did': 'executed',
      'got': 'achieved',
      'went': 'attended',
      'saw': 'observed',
      'put': 'implemented',
      'gave': 'delivered',
      'took': 'assumed',
      'had': 'maintained',
      'was': 'served as',
      'been': 'functioned as',
    };

    let enhanced = text;
    for (const [weak, strong] of Object.entries(actionWords)) {
      const regex = new RegExp(`\\b${weak}\\b`, 'gi');
      enhanced = enhanced.replace(regex, strong);
    }

    return enhanced;
  }
}
