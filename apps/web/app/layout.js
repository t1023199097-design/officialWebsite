import "./globals.css";
import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "LifeBee by Beefintech",
  description: "LifeBee 是面向香港保險經紀公司的數字化流程輔助工具。"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>
        <div className="page-shell">
          <Suspense fallback={null}>
            <SiteHeader />
          </Suspense>
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
