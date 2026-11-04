import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olabode Olaleye — Full-Stack Developer",
  description: "I build web applications and digital products across the frontend, backend and connected systems. Explore projects by Olabode Olaleye.",
  metadataBase: new URL("https://devrolex.vercel.app"),
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Olabode Olaleye — Full-Stack Developer", description: "Web applications and digital products across frontend, backend and integrations.", type: "website" },
  twitter: { card: "summary_large_image", title: "Olabode Olaleye — Full-Stack Developer", description: "I build web applications and digital products across frontend, backend and integrations." }
};
export const viewport: Viewport = { themeColor: "#f4f2ec", colorScheme: "light" };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}