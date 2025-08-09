export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  codeUrl?: string;
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A modern dashboard for managing e-commerce operations with real-time analytics and inventory management.",
    image: "/modern-dashboard.png",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/username/project",
  },
];
