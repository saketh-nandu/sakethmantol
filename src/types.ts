export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  heroImage: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  challenges: string[];
  futureRoadmap: string[];
  codeSnippet?: {
    language: string;
    code: string;
    filename: string;
  };
  link?: string;
  github?: string;
}

export interface CreativeWork {
  id: string;
  title: string;
  type: 'Writing' | 'Books' | 'Stories' | 'Cinema';
  universe?: string;
  logline: string;
  fullPremise: string;
  themes: string[];
  characters?: { name: string; role: string; desc: string }[];
  status: string;
  coverImage: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  institution: string;
  type: string;
  summary: string;
  highlights: string[];
  expandedContent: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Nature' | 'Hackathons' | 'Portraits' | 'Concept Art' | 'Devaverse' | 'Stories';
  image: string;
  location?: string;
  date: string;
  aspectRatio?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string;
  fileUrl?: string;
  fileType?: 'pdf' | 'docx';
}

export interface MusicTrack {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fileUrl: string;
  accent: string;
  aspectRatio?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  category: string;
  summary: string;
  fileUrl: string;
  fileType: 'pdf' | 'docx';
  year: string;
  readTime: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; note?: string }[];
}
