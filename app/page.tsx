"use client";
// app/page.tsx — Javari Collections homepage
// CR AudioViz AI · EIN 39-3646201 · June 2026
import { useState } from "react";
import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const filtered = CATEGORIES.filter(c =>
    !search || c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", background: "#040912" }}>
      {/* Nav */}
      <nav style={{ background: "#1E3A5F", padding: "0 20px", height: 52,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid rgba(0,180,216,0.15)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 20 }}>🏆</span>
          <span style={{ fontWeight: 800, color: "#00B4D8", fontSize: 15 }}>Javari Collections</span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a href="https://craudiovizai.com" style={{ color: "rgba(255,255,255,0.6)",
            fontSize: 12, textDecoration: "none" }}>← Platform</a>
          <a href="https://craudiovizai.com/auth/signup" style={{ background: "#FF0800",
            color: "#fff", borderRadius: 7, padding: "5px 14px", fontSize: 12,
            fontWeight: 700, textDecoration: "none" }}>Sign Up Free</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1E3A5F,#040912)",
        padding: "48px 24px 36px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(24px,4vw,44px)", fontWeight: 900, color: "#fff",
          margin: "0 0 10px", lineHeight: 1.05 }}>
          Your Collection,<br /><span style={{ color: "#00B4D8" }}>Expertly Managed</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, margin: "0 0 24px" }}>
          AI-powered tools for {CATEGORIES.length}+ collector categories.
          Valuations, grading, inventory, and listings — all in one place.
        </p>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search categories — cards, vinyl, coins, stamps, watches..."
          style={{ width: "100%", maxWidth: 520, background: "#0F1F32",
            border: "1px solid rgba(0,180,216,0.25)", borderRadius: 10,
            padding: "12px 16px", color: "#e2e8f0", fontSize: 14,
            outline: "none", fontFamily: "system-ui", boxSizing: "border-box" }}
        />
      </section>

      {/* Category Grid */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 16px 64px" }}>
        {search && filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#6B7280" }}>
            <p style={{ fontSize: 16 }}>No categories match "{search}"</p>
            <p style={{ fontSize: 13 }}>
              <a href="https://craudiovizai.com/support" style={{ color: "#00B4D8" }}>
                Request a new category →
              </a>
            </p>
          </div>
        )}
        <div style={{ display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
          {filtered.map(cat => (
            <Link key={cat.slug} href={`/category/${cat.slug}`}
              style={{ textDecoration: "none" }}>
              <div style={{ background: "#0F1F32", border: "1px solid rgba(0,180,216,0.1)",
                borderRadius: 14, padding: "18px 20px", cursor: "pointer",
                transition: "border-color 0.2s", display: "block" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(0,180,216,0.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(0,180,216,0.1)")}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 28 }}>{cat.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 15, color: "#e2e8f0" }}>
                    {cat.name}
                  </span>
                </div>
                <p style={{ fontSize: 12, color: "#9CA3AF", margin: "0 0 12px",
                  lineHeight: 1.5 }}>
                  {cat.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cat.tools.slice(0, 3).map(t => (
                    <span key={t.label} style={{ fontSize: 11, padding: "2px 8px",
                      borderRadius: 4, background: "rgba(0,180,216,0.08)",
                      color: "#00B4D8", border: "1px solid rgba(0,180,216,0.15)" }}>
                      {t.icon} {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Request new category */}
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <div style={{ background: "#0F1F32", border: "1px dashed rgba(0,180,216,0.25)",
            borderRadius: 14, padding: "24px", display: "inline-block", maxWidth: 480 }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>✨</div>
            <div style={{ fontWeight: 700, color: "#e2e8f0", marginBottom: 6 }}>
              Don&apos;t see your collection?
            </div>
            <p style={{ fontSize: 13, color: "#9CA3AF", margin: "0 0 14px" }}>
              Javari researches your hobby and spins up a new category.
              Request any collector category and we&apos;ll build it.
            </p>
            <a href="https://craudiovizai.com/support?type=new-category"
              style={{ background: "#00B4D8", color: "#040912", borderRadius: 8,
                padding: "8px 20px", fontSize: 13, fontWeight: 700,
                textDecoration: "none", display: "inline-block" }}>
              Request New Category →
            </a>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(0,180,216,0.08)", padding: "12px 24px",
        textAlign: "center" }}>
        <p style={{ color: "#374151", fontSize: 11, margin: 0 }}>
          © 2026 CR AudioViz AI, LLC — EIN: 39-3646201 ·{" "}
          <a href="https://craudiovizai.com" style={{ color: "#00B4D8", textDecoration: "none" }}>
            craudiovizai.com
          </a>
        </p>
      </footer>
    </div>
  );
}
