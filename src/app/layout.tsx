import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { auth } from "../../auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import SmoothScroll from "@/components/shared/SmoothScroll/SmoothScroll";
import PlausibleProvider from "next-plausible";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Merriweather = localFont({
  src: "../../public/fonts/Merriweather.ttf",
  variable: "--Merriweather",
  display: "swap",
});

const RaveoMedium = localFont({
  src: "../../public/fonts/Raveo_Medium.woff2",
  variable: "--RaveoMedium",
  display: "swap",
});

const DotSansRegular = localFont({
  src: "../../public/fonts/DotSansRegular.ttf",
  variable: "--DotSansRegular",
  display: "swap",
});

const DotSansMedium = localFont({
  src: "../../public/fonts/DotSansMedium.ttf",
  variable: "--DotSansMedium",
  display: "swap",
});

const DotSansBold = localFont({
  src: "../../public/fonts/DotSansBold.ttf",
  variable: "--DotSansBold",
  display: "swap",
});

const SuisseIntlRegular = localFont({
  src: "../../public/fonts/SuisseIntlRegular.woff2",
  variable: "--SuisseIntlRegular",
  display: "swap",
});

const SuisseIntlMono = localFont({
  src: "../../public/fonts/SuisseIntlMono.woff2",
  variable: "--SuisseIntlMono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fonts & Footers | Custom Booking Websites",
    template: "%s - Fonts & Footers",
  },
  description:
    "Fonts & Footers builds lightning-fast, mobile-first booking platforms that cut no-shows, and automate deposits for salons, spas, rentals, and service brands.",
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  // this will render:
  // <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang='en'>
        <head>
          <PlausibleProvider
            domain='fontsandfooters.com'
            trackLocalhost={false}
            enabled={true}
          />
        </head>
        <body
          className={`${inter.variable}  ${Merriweather.variable} ${DotSansRegular.variable} ${DotSansMedium.variable} ${DotSansBold.variable} ${RaveoMedium.variable} ${SuisseIntlRegular.variable} ${SuisseIntlMono.variable} `}
        >
          <SmoothScroll>
            <Toaster
              position='bottom-right'
              toastOptions={{
                className: "toastFont",
              }}
            />
            {children}
          </SmoothScroll>
        </body>
      </html>
    </SessionProvider>
  );
}
