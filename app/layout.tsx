import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  // Basic SEO
  title: {
    default: "Sheba Engineering & Construction Ltd - Leading Construction Company in Bangladesh",
    template: "%s | Sheba Engineering & Construction Ltd"
  },
  description: "Sheba Engineering & Construction Ltd is a premier construction company in Savar, Dhaka specializing in residential, commercial, and industrial projects. We deliver high-quality engineering solutions with expert construction services, building design, and project management across Bangladesh.",
  
  // Keywords for construction industry
  keywords: [
    "construction company Bangladesh",
    "engineering services Dhaka",
    "building construction",
    "residential construction",
    "commercial construction", 
    "industrial construction",
    "civil engineering",
    "project management",
    "construction contractor",
    "building design",
    "infrastructure development",
    "Sheba Engineering",
    "construction services Savar Dhaka"
  ],
  
  // Author and publisher info
  authors: [{ name: "Sheba Engineering & Construction Ltd" }],
  creator: "Sheba Engineering & Construction Ltd",
  publisher: "Sheba Engineering & Construction Ltd",
  
  // Open Graph for social media
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seba-eng.vercel.app",
    siteName: "Sheba Engineering & Construction Ltd",
    title: "Sheba Engineering & Construction Ltd - Leading Construction Company",
    description: "Premier construction company in Savar, Dhaka delivering high-quality residential, commercial, and industrial construction projects with expert engineering solutions.",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Sheba Engineering & Construction Ltd - Construction Projects"
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@shebaengineering", // Add your Twitter handle if you have one
    title: "Sheba Engineering & Construction Ltd - Leading Construction Company",
    description: "Premier construction company in Savar, Dhaka delivering high-quality construction projects and engineering solutions.",
    images: ["/og-image.jpg"]
  },
  
  // Favicon and icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
  
  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  
  // Verification (you'll need to get these from Google/Bing)
  verification: {
    google: "your-google-verification-code", // Get from Google Search Console
    // bing: "your-bing-verification-code", // Get from Bing Webmaster Tools
  },
  
  // Geo location for local SEO (Savar coordinates)
  other: {
    "geo.region": "BD-13", // Bangladesh, Dhaka Division
    "geo.placename": "Savar, Dhaka, Bangladesh",
    "geo.position": "23.8543;90.2672", // Savar coordinates
    "ICBM": "23.8543, 90.2672"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a365d" />
        <link rel="canonical" href="https://seba-eng.vercel.app" />
        
        {/* Structured Data - Construction Company */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConstructionBusiness",
              "name": "Sheba Engineering & Construction Ltd",
              "description": "Leading construction company in Savar, Dhaka specializing in residential, commercial, and industrial construction projects with office and factory facilities.",
              "url": "https://seba-eng.vercel.app",
              "telephone": ["+88 01716-475689", "+88 01616-475689"],
              "email": "shebaengineering2021@gmail.com",
              "address": [
                {
                  "@type": "PostalAddress",
                  "name": "Office",
                  "streetAddress": "C/52, Soronika Residential Area",
                  "addressLocality": "Savar",
                  "addressRegion": "Dhaka",
                  "postalCode": "1340",
                  "addressCountry": "BD"
                },
                {
                  "@type": "PostalAddress", 
                  "name": "Factory",
                  "streetAddress": "Kaisa Bari, Batentak, Baipal",
                  "addressLocality": "Savar",
                  "addressRegion": "Dhaka",
                  "postalCode": "1340",
                  "addressCountry": "BD"
                }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 23.8543,
                "longitude": 90.2672
              },
              "sameAs": [
                "https://facebook.com/shebaengineering", // Add your social media
                "https://linkedin.com/company/sheba-engineering"
              ],
              "serviceArea": {
                "@type": "State",
                "name": "Bangladesh"
              },
              "services": [
                "Residential Construction",
                "Commercial Construction", 
                "Industrial Construction",
                "Civil Engineering",
                "Project Management",
                "Building Design"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}