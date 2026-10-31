import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olabode Olaleye — Full-Stack Developer",
  description: "I build thoughtful websites, web applications and digital products. Explore selected work by Olabode Olaleye, also known as Rolex.",
  metadataBase: new URL("https://devrolex.vercel.app"),
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Olabode Olaleye — Full-Stack Developer", description: "Thoughtful websites, web applications and digital products, built with care.", type: "website" },
  twitter: { card: "summary_large_image", title: "Olabode Olaleye — Full-Stack Developer", description: "I turn ideas into useful digital experiences." }
};
export const viewport: Viewport = { themeColor: "#f4f2ec", colorScheme: "light" };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}