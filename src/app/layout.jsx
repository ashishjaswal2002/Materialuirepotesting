import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import localFont from "next/font/local";
import "./globals.css";
import Provider from "../util/Providers";

import { AppProvider } from "@toolpad/core/nextjs";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
];

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
        <Provider>
          <AppRouterCacheProvider>
            <AppProvider navigation={NAVIGATION}>{children}</AppProvider>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
}
