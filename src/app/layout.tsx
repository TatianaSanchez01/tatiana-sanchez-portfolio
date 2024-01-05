import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
    title: "Tatiana Sanchez",
    description: "Portafolio de Tatiana Sánchez",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${montserrat.className}`}>
                {children}
            </body>
        </html>
    );
}
