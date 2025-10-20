import theme from "@/theme/theme";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header"
import './globals.css'
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Izgodno | Сравни цените в супермаркетите",
  description: "Сравнявай цени на хранителни продукти от различни супермаркети на едно място. Намери най-добрите оферти, използвай AI филтри за търсене и спести пари с ежедневно обновявани данни.",
  icons: {
    icon: [
      { url: "/icons/icon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/icons/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ]
  },
  openGraph: {
    title: "Izgodno - Сравни цените в супермаркетите",
    description: "Виж и сравни хранителни продукти от различни супермаркети на едно място. Данните се обновяват ежедневно, а интелигентното търсене с изкуствен интелект ти помага да намериш най-добрите оферти.",
    // url: "https://comparegrocer.com",
    siteName: "Izgodno",
    // images: [
    //   {
    //     url: "/og-image.jpg", // смени с реално изображение
    //     width: 1200,
    //     height: 630,
    //     alt: "CompareGrocer – умно сравнение на цени на хранителни продукти",
    //   },
    // ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izgodno – Умно сравнение на цени в супермаркетите",
    description: "Открий най-добрите цени за хранителни продукти с помощта на AI. Сравнявай артикули от различни супермаркети, обновявани ежедневно.",
    // images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "Пазаруване",
  alternates: {
    // canonical: "https://comparegrocer.com",
  },
  applicationName: "Izgodno",
  generator: "Next.js",
}

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Box sx={{ bgcolor: "bgcolor.main", minHeight: "100vh" }}>
              <Header />
              {children}
              <Footer />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
