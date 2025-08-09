import { NextResponse } from "next/server";
import { promises as fsPromises } from "fs";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data/projects/projects.json");
    console.log("Reading from:", filePath);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const jsonData = fs.readFileSync(filePath, "utf-8");
    const projects = JSON.parse(jsonData);

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error reading projects.json:", error);
    return NextResponse.json(
      { error: "Failed to load projects" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const id = uuidv4();
    const title = formData.get("title");
    const description = formData.get("description");
    const techStack = JSON.parse(formData.get("techStack") as string);
    const liveUrl = formData.get("liveUrl");
    const codeUrl = formData.get("codeUrl");
    const isPrivate = formData.get("isPrivate") === "true";

    let imagePath = "";

    const image = formData.get("image") as File | null;
    if (image) {
      const arrayBuffer = await image.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const fileName = `${Date.now()}-${image.name}`;
      const uploadDir = path.join(process.cwd(), "public", "projects");

      await fsPromises.mkdir(uploadDir, { recursive: true });
      await fsPromises.writeFile(path.join(uploadDir, fileName), buffer);

      imagePath = `/projects/${fileName}`;
    }

    // Load existing projects
    const jsonPath = path.join(process.cwd(), "data/projects/projects.json");
    let projects = [];
    if (fs.existsSync(jsonPath)) {
      const data = await fsPromises.readFile(jsonPath, "utf-8");
      projects = JSON.parse(data);
    }

    const newProject = {
      id,
      title,
      description,
      techStack,
      liveUrl,
      codeUrl,
      isPrivate,
      image: imagePath,
    };

    projects.push(newProject);
    await fsPromises.writeFile(jsonPath, JSON.stringify(projects, null, 2));

    return NextResponse.json({ message: "Project added successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to add project" },
      { status: 500 }
    );
  }
}
