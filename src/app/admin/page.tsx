"use client";

import { useEffect, useRef, useState } from "react";
import { Trash2, ArrowUpRight, ImagePlus, X, Globe } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface NewsItem {
  id: string;
  date: string;
  title: string;
  desc: string;
  image?: string;
  link?: string;
  linkText?: string;
}

const LABELS = {
  en: {
    adminTitle: "News Admin",
    enterPassword: "Enter the password to manage posts.",
    password: "Password",
    unlock: "Unlock",
    subtitle: "Posts appear on the About page, newest first.",
    title: "Title",
    titlePlaceholder: "e.g. 2026 New Health Plan Options",
    description: "Description",
    descPlaceholder: "A sentence or two about the post",
    date: "Date",
    image: "Image (optional)",
    addPhoto: "Click to add a photo",
    removeImage: "Remove image",
    link: "Link (optional)",
    linkPlaceholder: "https://...",
    linkText: "Link Text",
    linkTextPlaceholder: "Learn more",
    publish: "Publish",
    publishing: "Publishing…",
    published: "Published!",
    wrongPassword: "Wrong password.",
    uploadFailed: "Image upload failed.",
    genericError: "Something went wrong. Please try again.",
    publishedPosts: "Published Posts",
    noPosts: "No posts yet.",
    deleteConfirm: "Delete this post?",
  },
  zh: {
    adminTitle: "消息管理後台",
    enterPassword: "請輸入密碼以管理貼文。",
    password: "密碼",
    unlock: "解鎖",
    subtitle: "貼文將顯示在「關於人人」頁面，由新到舊排序。",
    title: "標題",
    titlePlaceholder: "例如：2026年新健康計劃選項",
    description: "簡介",
    descPlaceholder: "一兩句話介紹這篇貼文",
    date: "日期",
    image: "圖片（選填）",
    addPhoto: "點擊上傳照片",
    removeImage: "移除圖片",
    link: "連結（選填）",
    linkPlaceholder: "https://...",
    linkText: "連結文字",
    linkTextPlaceholder: "了解更多",
    publish: "發佈",
    publishing: "發佈中…",
    published: "已發佈！",
    wrongPassword: "密碼錯誤。",
    uploadFailed: "圖片上傳失敗。",
    genericError: "發生錯誤，請再試一次。",
    publishedPosts: "已發佈的貼文",
    noPosts: "目前沒有貼文。",
    deleteConfirm: "確定要刪除這篇貼文嗎？",
  },
};

export default function AdminPage() {
  const { language, setLanguage } = useLanguage();
  const t = LABELS[language];

  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [items, setItems] = useState<NewsItem[]>([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [link, setLink] = useState("");
  const [linkText, setLinkText] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("renren-admin-password");
    if (saved) {
      setPassword(saved);
      setUnlocked(true);
    }
  }, []);

  const loadItems = async () => {
    const res = await fetch("/api/news");
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    if (unlocked) loadItems();
  }, [unlocked]);

  const handleUnlock = () => {
    if (!password) return;
    sessionStorage.setItem("renren-admin-password", password);
    setUnlocked(true);
  };

  const handleUnauthorized = () => {
    setError(t.wrongPassword);
    sessionStorage.removeItem("renren-admin-password");
    setUnlocked(false);
  };

  const handleImageSelect = (file: File | null) => {
    setImageFile(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  };

  const resetForm = () => {
    setTitle("");
    setDesc("");
    setLink("");
    setLinkText("");
    setDate(new Date().toISOString().slice(0, 10));
    handleImageSelect(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setSubmitting(true);

    let imageUrl: string | undefined;
    if (imageFile) {
      const formData = new FormData();
      formData.append("password", password);
      formData.append("file", imageFile);
      const uploadRes = await fetch("/api/upload", { method: "POST", body: formData });
      if (uploadRes.status === 401) {
        setSubmitting(false);
        return handleUnauthorized();
      }
      if (!uploadRes.ok) {
        setSubmitting(false);
        setError(t.uploadFailed);
        return;
      }
      imageUrl = (await uploadRes.json()).url;
    }

    const res = await fetch("/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, title, desc, date, image: imageUrl, link, linkText }),
    });
    setSubmitting(false);
    if (res.status === 401) return handleUnauthorized();
    if (!res.ok) {
      setError(t.genericError);
      return;
    }
    resetForm();
    setMessage(t.published);
    loadItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t.deleteConfirm)) return;
    const res = await fetch("/api/news", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, id }),
    });
    if (res.status === 401) return handleUnauthorized();
    loadItems();
  };

  const LangToggle = (
    <button
      onClick={() => setLanguage(language === "en" ? "zh" : "en")}
      className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-950 border border-neutral-300 rounded-md px-3 py-1.5 text-sm transition-colors"
    >
      <Globe className="w-3.5 h-3.5" />
      {language === "en" ? "中文" : "EN"}
    </button>
  );

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm border border-neutral-900 rounded-lg p-8 bg-white relative">
          <div className="absolute top-4 right-4">{LangToggle}</div>
          <h1 className="font-display text-xl font-bold text-neutral-950 mb-1">{t.adminTitle}</h1>
          <p className="text-sm text-neutral-500 mb-6">{t.enterPassword}</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
            placeholder={t.password}
            className="w-full border border-neutral-300 rounded-md px-3 py-2 mb-4 text-sm"
            autoFocus
          />
          <button
            onClick={handleUnlock}
            className="w-full bg-neutral-950 hover:bg-neutral-800 text-white rounded-md px-4 py-2.5 text-sm font-semibold transition-colors"
          >
            {t.unlock}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start justify-between mb-1">
          <h1 className="font-display text-3xl font-bold text-neutral-950">{t.adminTitle}</h1>
          {LangToggle}
        </div>
        <p className="text-neutral-500 mb-10">{t.subtitle}</p>

        <form onSubmit={handlePublish} className="border border-neutral-900 rounded-lg p-8 bg-white mb-10 space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">{t.title}</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm"
              placeholder={t.titlePlaceholder}
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">{t.description}</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={3}
              className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm"
              placeholder={t.descPlaceholder}
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">{t.date}</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">{t.image}</label>
            {imagePreview ? (
              <div className="relative w-full aspect-video rounded-md overflow-hidden border border-neutral-300">
                <Image src={imagePreview} alt="" fill className="object-cover" unoptimized />
                <button
                  type="button"
                  onClick={() => handleImageSelect(null)}
                  className="absolute top-2 right-2 bg-neutral-950/80 text-white rounded-full p-1.5 hover:bg-neutral-950"
                  aria-label={t.removeImage}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full border border-dashed border-neutral-300 rounded-md py-6 flex flex-col items-center gap-2 text-neutral-500 hover:border-neutral-500 hover:text-neutral-700 transition-colors"
              >
                <ImagePlus className="w-5 h-5" />
                <span className="text-sm">{t.addPhoto}</span>
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageSelect(e.target.files?.[0] ?? null)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">{t.link}</label>
              <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm"
                placeholder={t.linkPlaceholder}
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">{t.linkText}</label>
              <input
                value={linkText}
                onChange={(e) => setLinkText(e.target.value)}
                className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm"
                placeholder={t.linkTextPlaceholder}
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
          {message && <p className="text-sm text-emerald-600">{message}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 disabled:opacity-50 text-white rounded-md px-6 py-2.5 text-sm font-semibold transition-colors group"
          >
            {submitting ? t.publishing : t.publish}
            {!submitting && <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
          </button>
        </form>

        <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-4">{t.publishedPosts}</h2>
        <div className="space-y-px bg-neutral-900 border border-neutral-900">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-5 flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 min-w-0">
                {item.image && (
                  <div className="relative w-16 h-16 rounded-md overflow-hidden border border-neutral-200 flex-shrink-0">
                    <Image src={item.image} alt="" fill className="object-cover" />
                  </div>
                )}
                <div className="min-w-0">
                  <p className="font-mono text-xs text-neutral-400 mb-1">{item.date}</p>
                  <p className="font-semibold text-neutral-950">{item.title}</p>
                  {item.desc && <p className="text-sm text-neutral-600 mt-1">{item.desc}</p>}
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mt-1 inline-block">
                      {item.linkText || item.link}
                    </a>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-neutral-400 hover:text-red-600 transition-colors flex-shrink-0 p-1"
                aria-label="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          {items.length === 0 && (
            <div className="bg-white p-5 text-sm text-neutral-400">{t.noPosts}</div>
          )}
        </div>
      </div>
    </main>
  );
}
