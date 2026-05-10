import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VertexStat AI | Enterprise AI Transformation",
  description:
    "Agentic AI consulting for healthcare, banking, PMO automation, and enterprise operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
