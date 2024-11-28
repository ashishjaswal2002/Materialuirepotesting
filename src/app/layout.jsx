
import {AppRouterCacheProvider} from '@mui/material/-nextjs/v15-appRouter';
import Providers  from '@util/Providers'

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "one7sportsAdminPanel_Frontend",
  description: "Admin panel frontend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
        
       <Providers>
          {children}

       </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
