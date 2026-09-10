// app/layout.tsx — Javari Collections
// CR AudioViz AI · EIN 39-3646201 · June 2026
import type { Metadata } from "next";
import { EmbedBridge, EMBED_PREPAINT_SCRIPT } from '@craudioviz/platform-sdk'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: EMBED_PREPAINT_SCRIPT }} />
        <title>Javari Collections — Your Story. Our Design.</title>
        <meta name="description" content="AI-powered collection management for 50+ collector categories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#040912", color: "#e2e8f0",
        fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <EmbedBridge />
        {children}
      </body>
    </html>
  );
}
