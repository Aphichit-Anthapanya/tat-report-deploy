"use client";

import { ReactNode } from "react";
import "../styles/scss/global.scss";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "@store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {/* ! Don't change layout body in this file, add group with "()" and custom them */}
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
