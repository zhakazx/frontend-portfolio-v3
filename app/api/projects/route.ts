import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public/data/projects.json");
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
