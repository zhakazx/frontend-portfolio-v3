import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProjectTable } from "@/components/dashboard/projects/project-table";
import Link from "next/link";

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
        <Link href="/admin/dashboard/projects/create">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Project
          </Button>
        </Link>
      </div>

      {/* Project Table Section */}
      <ProjectTable />
    </div>
  );
}
