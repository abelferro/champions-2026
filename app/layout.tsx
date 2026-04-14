import type { Metadata } from "next";
import { landingConfig } from "@/site.config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: landingConfig.title,
    template: `%s | ${landingConfig.brandName}`,
  },
  description: landingConfig.description,
  keywords: landingConfig.keywords,
  authors: [{ name: landingConfig.brandName }],
  openGraph: {
    type: "website",
    title: landingConfig.title,
    description: landingConfig.description,
    siteName: landingConfig.siteName,
    locale: landingConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: landingConfig.title,
    description: landingConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: landingConfig.brandName,
  description: landingConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
