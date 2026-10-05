import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

const DATA_PATH = path.join(process.cwd(), "data", "news.json");

interface NewsItem {
  id: string;
  date: string;
  title: string;
  desc: string;
  image?: string;
  link?: string;
  linkText?: string;
}

async function readNews(): Promise<NewsItem[]> {
  const raw = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

async function writeNews(items: NewsItem[]) {
  await fs.writeFile(DATA_PATH, JSON.stringify(items, null, 2) + "\n", "utf-8");
}

function checkPassword(password: unknown): boolean {
  const expected = process.env.NEWS_ADMIN_PASSWORD;
  return typeof password === "string" && typeof expected === "string" && password.length > 0 && password === expected;
}

export async function GET() {
  const items = await readNews();
  items.sort((a, b) => (a.date < b.date ? 1 : -1));
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!checkPassword(body.password)) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }
  const { title, desc, date, image, link, linkText } = body;
  if (!title || !date) {
    return NextResponse.json({ error: "Title and date are required" }, { status: 400 });
  }
  const items = await readNews();
  const newItem: NewsItem = {
    id: crypto.randomUUID(),
    date,
    title,
    desc: desc ?? "",
    ...(image ? { image } : {}),
    ...(link ? { link, linkText: linkText || link } : {}),
  };
  items.push(newItem);
  await writeNews(items);
  return NextResponse.json(newItem, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  if (!checkPassword(body.password)) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }
  const { id } = body;
  const items = await readNews();
  const next = items.filter((item) => item.id !== id);
  await writeNews(next);
  return NextResponse.json({ ok: true });
}
