import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rolex Code — Olabode Olaleye",
  description: "I build web applications and digital products across the frontend, backend and connected systems. Explore Rolex Code — the portfolio of Olabode Olaleye.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Rolex Code — Olabode Olaleye", description: "Rolex Code — web applications and digital products across frontend, backend and integrations.", type: "website" },
  twitter: { card: "summary_large_image", title: "Rolex Code — Olabode Olaleye", description: "I build web applications and digital products across frontend, backend and integrations." }
};
export const viewport: Viewport = { themeColor: "#f4f2ec", colorScheme: "light" };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}