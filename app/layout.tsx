import type { Metadata } from "next";
import { landingConfig } from "@/site.config";
import "./globals.css";

const faviconSvg =
  "https://tds.bwelz.org/logos/wels/digital/SVG/wels-Brandmark_RGB_Full_Color.svg?Expires=1881081483&Signature=caBpVMdRKz2HzLm6UCmT1WJHxuF3xE2GQAmRO3NiJbQ2jCTqc0XiDbkYgl8~TLr-562QQ1lM1k1Hmt7ji484N3~uEscKFevUscSze5Cwe0UTLZmlpraGIyGtFbNTPf9cw-wAWcwtMzVSBoAd--eMefnkLUkd-ks3YKws9TagLb3S~khYBYyU65CfI-MEzjJys1dQNjRbpFE2uV6b7Uq193cKSfaAAPrpg90pBFGxwZ55XWipsdQqteS6WsO4wp3E3taRt9x7nxD0HFrSwqRSIqqpzqe~spYpekyie6m8tlDubXaC35F6ojqB9k-mDhuTm6nXIt-mIlhMOcPSGaSpVQ__&Key-Pair-Id=K1PPZDIOWN47R1";
const faviconPng =
  "https://tds.bwelz.org/logos/wels/digital/PNG/wels-Brandmark_RGB_Full_Color.png?Expires=1881081482&Signature=QlQ8RId13dRXmR26PqbVtuIkT6T8NO-EfgSwyTRacsNma6nEvXS~~LUM6QzjWTN6gTPighCd0y8g2JlqzGiulTSmD4xazWTcZtxQCGCRJOjID7Np89Wo5bhNaVhJ5cL3EAzqz9uDF35L-govH8TbTAYkHCH5Q~FgP4K7Hp-WGsWZhXqbOhK098IQdJmNG8ZffTLJBtMDMVsQGTb5suRGkCSJsiMSXUfZUhTQU7jm62mfBUWetXx-K7X4qie7290TWVgkPqWsTYvILWBOTYVRTQGQtJkPfnN7hOrPdPcLk52j3xsNjvDD7wujdzXItfEbEU3qn6-fHJAg~44SgN1SrQ__&Key-Pair-Id=K1PPZDIOWN47R1";

export const metadata: Metadata = {
  title: {
    default: landingConfig.title,
    template: `%s | ${landingConfig.brandName}`,
  },
  description: landingConfig.description,
  keywords: [...landingConfig.keywords],
  authors: [{ name: landingConfig.brandName }],
  icons: {
    icon: [
      { url: faviconSvg, type: "image/svg+xml" },
      { url: faviconPng, type: "image/png" },
    ],
    shortcut: [faviconPng],
    apple: [faviconPng],
  },
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
