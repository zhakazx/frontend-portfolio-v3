"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, X, Upload, Github } from "lucide-react";
import { Project } from "@/types/project";
import { popularTechStack } from "@/data/popularTechStack";

export default function CreateProjectPage() {
  const [formData, setFormData] = useState<Project>({
    id: Date.now(),
    title: "",
    description: "",
    image: "",
    techStack: [],
    liveUrl: "",
    codeUrl: "",
    isPrivate: false,
  });

  const [newTech, setNewTech] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof Project, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addTechStack = (tech: string) => {
    if (tech && !formData.techStack.includes(tech)) {
      setFormData((prev) => ({
        ...prev,
        techStack: [...prev.techStack, tech],
      }));
    }
    setNewTech("");
  };

  const removeTechStack = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack.filter((t) => t !== tech),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Project data:", formData);
    alert("Project created successfully!");
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex gap-2 flex-col items-start">
        <Button variant="outline" size="sm" asChild>
          <Link href="/admin/dashboard/projects">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        <div>
          <h3 className="text-2xl font-bold tracking-tight">
            Create New Project
          </h3>
          <p className="text-muted-foreground">
            Add a new project to your portfolio
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Enter the basic details of your project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Project Title *</Label>
                  <Input
                    id="title"
                    placeholder="Enter project title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your project..."
                    className="min-h-[120px]"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Project Image URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="image"
                      placeholder="https://example.com/image.jpg"
                      value={formData.image}
                      onChange={(e) =>
                        handleInputChange("image", e.target.value)
                      }
                    />
                    <Button type="button" variant="outline" size="icon">
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Add a screenshot or preview image of your project
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Technology Stack */}
            <Card>
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
                <CardDescription>
                  Select the technologies used in this project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Add Technology *</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter technology name"
                      value={newTech}
                      onChange={(e) => setNewTech(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addTechStack(newTech);
                        }
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => addTechStack(newTech)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Popular Tech Stack */}
                <div className="space-y-2">
                  <Label className="text-sm">Popular Technologies</Label>
                  <div className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto">
                    {popularTechStack.slice(0, 12).map((tech) => (
                      <Button
                        key={tech}
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs bg-transparent"
                        onClick={() => addTechStack(tech)}
                        disabled={formData.techStack.includes(tech)}
                      >
                        {tech}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Selected Tech Stack */}
                {formData.techStack.length > 0 && (
                  <div className="space-y-2">
                    <Label className="text-sm">Selected Technologies</Label>
                    <div className="flex flex-wrap gap-2">
                      {formData.techStack.map((tech) => (
                        <Badge key={tech} variant="default" className="gap-1">
                          {tech}
                          <button
                            type="button"
                            onClick={() => removeTechStack(tech)}
                            className="ml-1 hover:bg-white/20 rounded-full p-0.5"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Links */}
            <Card>
              <CardHeader>
                <CardTitle>Project Links</CardTitle>
                <CardDescription>
                  Add links to your live project and source code
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="liveUrl">Live URL</Label>
                  <Input
                    id="liveUrl"
                    placeholder="https://your-project.com"
                    value={formData.liveUrl}
                    onChange={(e) =>
                      handleInputChange("liveUrl", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="codeUrl">Source Code URL</Label>
                  <div className="relative">
                    <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="codeUrl"
                      placeholder="https://github.com/username/project"
                      className="pl-10"
                      value={formData.codeUrl}
                      onChange={(e) =>
                        handleInputChange("codeUrl", e.target.value)
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Project Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isPrivate"
                    checked={formData.isPrivate}
                    onCheckedChange={(checked) =>
                      handleInputChange("isPrivate", checked as boolean)
                    }
                  />
                  <Label htmlFor="isPrivate" className="text-sm font-medium">
                    Private Project
                  </Label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Private projects won't be visible in your public portfolio
                </p>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  {formData.image ? (
                    <img
                      src={formData.image}
                      alt="Project preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <Upload className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm">No image uploaded</p>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-medium">
                    {formData.title || "Project Title"}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 text-wrap">
                    {formData.description ||
                      "Project description will appear here..."}
                  </p>
                </div>
                {formData.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {formData.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {formData.techStack.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{formData.techStack.length - 3}
                      </Badge>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-2">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Project"}
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/dashboard/projects">Cancel</Link>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
