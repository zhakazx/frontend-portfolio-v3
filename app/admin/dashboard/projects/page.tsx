import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal, Plus, ExternalLink, Github, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Project } from "@/types/project";
import { projects } from "@/data/projects";

function getStatusBadge(project: Project) {
  if (project.isPrivate) {
    return <Badge variant="secondary">Private</Badge>;
  }
  if (project.liveUrl && project.codeUrl) {
    return <Badge variant="default">Live</Badge>;
  }
  if (project.codeUrl) {
    return <Badge variant="outline">Development</Badge>;
  }
  return <Badge variant="secondary">Draft</Badge>;
}

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Manage your development projects.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Project
        </Button>
      </div>

      {/* Projects Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              {/* <TableHead>Status</TableHead> */}
              <TableHead>Project Title</TableHead>
              <TableHead>Tech Stack</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                {/* <TableCell>{getStatusBadge(project)}</TableCell> */}
                <TableCell>
                  <div>
                    <div className="font-medium">{project.title}</div>
                    <div className="text-sm text-muted-foreground mt-1 max-w-[400px] truncate">
                      {project.description}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.techStack.length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      {project.liveUrl && (
                        <DropdownMenuItem asChild>
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Open Live Site
                          </Link>
                        </DropdownMenuItem>
                      )}
                      {project.codeUrl && (
                        <DropdownMenuItem asChild>
                          <Link
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </Link>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem>Edit Project</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete Project
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Footer with selection count and pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          0 of {projects.length} row(s) selected.
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
