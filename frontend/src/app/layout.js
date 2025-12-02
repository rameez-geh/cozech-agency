import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadataBase = new URL("https://www.cozech.com");
export const metadata = {
  title: "COZECH - Professional Web & Mobile App Development",
  description:
    "Professional web & mobile app development with modern UI/UX design. Build fast, scalable digital solutions for your business.",
  keywords: [
    "web development",
    "mobile app development",
    "UI/UX design",
    "full-stack development",
    "branding",
    "custom software",
    "CRM software",
  ],
  authors: [{ name: "COZECH" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.cozech.com/",
    siteName: "COZECH",
    title: "COZECH - Professional Web & Mobile App Development",
    description:
      "Transform your digital presence with COZECH. Professional web and mobile app development.",
    images: [
      {
        url: "https://www.cozech.com/images/socialMedia/svg/Logo-2.svg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COZECH - Professional Web & Mobile App Development",
    description: "Transform your digital presence with COZECH.",
    images: ["https://www.cozech.com/images/socialMedia/svg/Logo-2.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  // No fixed canonical here; `metadataBase` above ensures Next.js generates
  // per-page canonical links based on the page pathname.
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "COZECH",
              url: "https://www.cozech.com",
              logo: "https://www.cozech.com/images/socialMedia/svg/Logo-2.svg",
              description:
                "Professional web and mobile app development company specializing in modern UI/UX design and scalable full-stack solutions",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kozhikode",
                addressRegion: "India",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8593978298",
                contactType: "Customer Service",
                availableLanguage: ["en", "hi"],
              },
              sameAs: [
                "https://facebook.com/yourpage",
                "https://twitter.com/yourpage",
                "https://www.linkedin.com/company/cozech/",
                "https://www.instagram.com/team.cozech?igsh=bHM2dmpncXB1MG5z",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "COZECH",
              url: "https://www.cozech.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.cozech.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={sora.className}>
        <noscript>
          <div
            style={{
              padding: "20px",
              textAlign: "center",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <h1>COZECH - Web & Mobile App Development</h1>
            <p>
              JavaScript is required to view this website. Please enable
              JavaScript in your browser settings.
            </p>
          </div>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
