import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "BeeFintech Insurance Tech Platform",
  description: "AI competition starter for a dynamic insurance technology web service platform."
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

