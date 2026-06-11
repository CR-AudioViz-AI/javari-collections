// app/api/chat/route.ts — Javari AI proxy
// CR AudioViz AI · EIN 39-3646201 · June 2026
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, systemOverride, stream = false } = body;

    const JAVARI_URL = process.env.NEXT_PUBLIC_JAVARI_AI_URL || "https://javariai.com";
    const JAVARI_KEY = process.env.JAVARI_API_KEY || "";

    const system = systemOverride ||
      "You are Javari, an expert AI assistant for CR AudioViz AI. Be helpful, accurate, and concise.";

    const payload = {
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: system }, ...messages],
      max_tokens: 1500,
      stream,
    };

    // Try Javari AI first
    try {
      const r = await fetch(`${JAVARI_URL}/api/javari/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(JAVARI_KEY ? { "Authorization": `Bearer ${JAVARI_KEY}` } : {}),
        },
        body: JSON.stringify(payload),
      });
      if (r.ok) {
        const data = await r.json();
        return NextResponse.json(data);
      }
    } catch {}

    // Fallback: direct OpenAI via Groq (free tier)
    const GROQ_KEY = process.env.GROQ_API_KEY || "";
    if (GROQ_KEY) {
      const r2 = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json",
                   "Authorization": `Bearer ${GROQ_KEY}` },
        body: JSON.stringify({ ...payload, model: "llama-3.3-70b-versatile" }),
      });
      if (r2.ok) {
        return NextResponse.json(await r2.json());
      }
    }

    // Last resort: OpenAI
    const OAI_KEY = process.env.OPENAI_API_KEY || "";
    const r3 = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json",
                 "Authorization": `Bearer ${OAI_KEY}` },
      body: JSON.stringify(payload),
    });
    const data = await r3.json();
    return NextResponse.json(data);

  } catch (err) {
    return NextResponse.json({ error: "Chat failed", details: String(err) },
      { status: 500 });
  }
}
