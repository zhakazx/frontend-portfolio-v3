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
import { MoreHorizontal, ExternalLink, Github, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export function ProjectTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <Checkbox />
            </TableHead>
            <TableHead>Image</TableHead>
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
              <TableCell>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
              </TableCell>
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
  );
}
