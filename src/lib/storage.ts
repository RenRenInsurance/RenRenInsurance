import path from "path";

// In production (Render), set DATA_DIR to the mounted persistent disk path
// (e.g. /var/data) so posts and uploaded photos survive redeploys.
// Locally, both default to folders inside the project — no setup needed.
const DATA_ROOT = process.env.DATA_DIR || path.join(process.cwd(), "data");

export function newsFilePath() {
  return path.join(DATA_ROOT, "news.json");
}

export function uploadsDirPath() {
  return path.join(DATA_ROOT, "uploads");
}
