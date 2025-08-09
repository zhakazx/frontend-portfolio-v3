export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string; // optional
  codeUrl?: string; // optional
  isPrivate?: boolean; // optional
}
