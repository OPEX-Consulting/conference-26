import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The End of Manual | OPEX Executive Workshop & Summit 2026",
  description:
    "An invitation-only executive workshop and summit on AI, connected systems and the future of financial reporting and compliance.",
  icons: {
    icon: "/images/opexwhite.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
