"use client";
// app/category/[slug]/page.tsx — per-category AI chat + tools
// CR AudioViz AI · EIN 39-3646201 · June 2026
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug, CATEGORIES, type CollectionCategory } from "@/lib/categories";

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [cat, setCat]     = useState<CollectionCategory | null>(null);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<{role:string;text:string}[]>([]);

  useEffect(() => {
    const found = getCategoryBySlug(slug);
    setCat(found || null);
  }, [slug]);

  async function ask() {
    if (!input.trim() || !cat) return;
    setLoading(true);
    setOutput("");
    const userMsg = input;
    setInput("");
    setHistory(h => [...h, { role: "user", text: userMsg }]);

    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...history.map(h => ({ role: h.role, content: h.text })),
            { role: "user", content: userMsg }
          ],
          stream: false,
          systemOverride: cat.aiPrompt,
        }),
      });
      const d = await r.json();
      const answer = d?.choices?.[0]?.message?.content || d?.content || "No response.";
      setHistory(h => [...h, { role: "assistant", text: answer }]);
      setOutput(answer);
    } catch {
      setOutput("Error reaching Javari AI. Please try again.");
    }
    setLoading(false);
  }

  if (!cat) {
    return (
      <div style={{ minHeight:"100vh", background:"#040912", display:"flex",
        alignItems:"center", justifyContent:"center", flexDirection:"column", gap:16 }}>
        <div style={{ fontSize:48 }}>🔍</div>
        <p style={{ color:"#9CA3AF" }}>Category not found.</p>
        <Link href="/" style={{ color:"#00B4D8", textDecoration:"none" }}>
          ← Back to all categories
        </Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight:"100vh", background:"#040912" }}>
      {/* Nav */}
      <nav style={{ background:"#1E3A5F", padding:"0 20px", height:52,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        position:"sticky", top:0, zIndex:100,
        borderBottom:"1px solid rgba(0,180,216,0.15)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <Link href="/" style={{ color:"rgba(255,255,255,0.6)", textDecoration:"none",
            fontSize:12, marginRight:4 }}>🏆</Link>
          <span style={{ fontSize:20 }}>{cat.icon}</span>
          <span style={{ fontWeight:800, color:"#00B4D8", fontSize:15 }}>{cat.name}</span>
        </div>
        <a href="https://craudiovizai.com/auth/signup" style={{ background:"#FF0800",
          color:"#fff", borderRadius:7, padding:"5px 14px", fontSize:12,
          fontWeight:700, textDecoration:"none" }}>Sign Up Free</a>
      </nav>

      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#1E3A5F,#040912)",
        padding:"32px 24px 24px", textAlign:"center" }}>
        <div style={{ fontSize:44, marginBottom:8 }}>{cat.icon}</div>
        <h1 style={{ fontSize:"clamp(20px,3.5vw,36px)", fontWeight:900, color:"#fff",
          margin:"0 0 8px" }}>Javari {cat.name}</h1>
        <p style={{ color:"rgba(255,255,255,0.65)", fontSize:14, margin:0 }}>
          {cat.description}
        </p>
      </section>

      {/* Tool tiles */}
      <section style={{ maxWidth:800, margin:"0 auto", padding:"20px 16px 0" }}>
        <div style={{ display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:10,
          marginBottom:20 }}>
          {cat.tools.map(t => (
            <div key={t.label} style={{ background:"#0F1F32",
              border:"1px solid rgba(0,180,216,0.1)", borderRadius:12,
              padding:"14px 12px", textAlign:"center" }}>
              <span style={{ fontSize:22, display:"block", marginBottom:6 }}>{t.icon}</span>
              <div style={{ fontWeight:700, fontSize:13, color:"#e2e8f0",
                marginBottom:2 }}>{t.label}</div>
              <div style={{ fontSize:11, color:"#6B7280" }}>{t.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Chat */}
      <section style={{ maxWidth:800, margin:"0 auto", padding:"0 16px 32px" }}>
        <div style={{ background:"#0F1F32",
          border:"1px solid rgba(0,180,216,0.12)", borderRadius:14,
          padding:"18px 20px" }}>

          {/* Example prompts */}
          <div style={{ marginBottom:12 }}>
            <p style={{ fontSize:12, color:"#6B7280", margin:"0 0 8px" }}>
              Try asking:
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
              {cat.examples.map(ex => (
                <button key={ex} onClick={() => setInput(ex)}
                  style={{ background:"rgba(0,180,216,0.06)",
                    border:"1px solid rgba(0,180,216,0.15)", borderRadius:6,
                    padding:"4px 10px", fontSize:11, color:"#9CA3AF",
                    cursor:"pointer", fontFamily:"system-ui", textAlign:"left" }}>
                  {ex.length > 50 ? ex.slice(0,50)+"…" : ex}
                </button>
              ))}
            </div>
          </div>

          {/* History */}
          {history.length > 0 && (
            <div style={{ maxHeight:320, overflowY:"auto", marginBottom:12 }}>
              {history.map((h,i) => (
                <div key={i} style={{ marginBottom:10 }}>
                  <div style={{ fontSize:11, color: h.role==="user"?"#00B4D8":"#10B981",
                    marginBottom:3 }}>
                    {h.role === "user" ? "You" : `Javari ${cat.name} Expert`}
                  </div>
                  <div style={{ fontSize:13, color:"#e2e8f0", lineHeight:1.6,
                    background: h.role==="assistant"?"rgba(16,185,129,0.05)":"transparent",
                    borderRadius:8, padding: h.role==="assistant"?"10px 12px":"0",
                    whiteSpace:"pre-wrap" }}>
                    {h.text}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ display:"flex", gap:8 }}>
            <input value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key==="Enter" && ask()}
              placeholder={`Ask about your ${cat.name.toLowerCase()} collection…`}
              style={{ flex:1, background:"#172D48",
                border:"1px solid rgba(0,180,216,0.15)", borderRadius:8,
                padding:"10px 12px", color:"#e2e8f0", fontSize:13,
                outline:"none", fontFamily:"system-ui" }} />
            <button onClick={ask} disabled={loading || !input.trim()}
              style={{ background: loading||!input.trim()?"#0F1F32":"#1E3A5F",
                color: loading||!input.trim()?"#374151":"#00B4D8",
                border:"1px solid rgba(0,180,216,0.2)", borderRadius:8,
                padding:"10px 18px", fontSize:13, fontWeight:700,
                cursor: loading||!input.trim()?"not-allowed":"pointer",
                fontFamily:"system-ui" }}>
              {loading ? "…" : "Ask"}
            </button>
          </div>
          {loading && (
            <p style={{ fontSize:12, color:"#6B7280", margin:"8px 0 0" }}>
              Javari is thinking…
            </p>
          )}
        </div>
      </section>

      {/* Other categories */}
      <section style={{ maxWidth:800, margin:"0 auto", padding:"0 16px 48px" }}>
        <p style={{ fontSize:12, color:"#6B7280", marginBottom:10 }}>
          Other collections:
        </p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
          {CATEGORIES.filter(c => c.slug !== slug).map(c => (
            <Link key={c.slug} href={`/category/${c.slug}`}
              style={{ textDecoration:"none", fontSize:12,
                color:"#9CA3AF", padding:"3px 10px",
                border:"1px solid rgba(255,255,255,0.07)", borderRadius:6 }}>
              {c.icon} {c.name}
            </Link>
          ))}
        </div>
      </section>

      <footer style={{ borderTop:"1px solid rgba(0,180,216,0.08)",
        padding:"12px 24px", textAlign:"center" }}>
        <p style={{ color:"#374151", fontSize:11, margin:0 }}>
          © 2026 CR AudioViz AI, LLC — EIN: 39-3646201
        </p>
      </footer>
    </div>
  );
}
