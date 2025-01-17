import type {Metadata, Viewport} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "@/styles/globals.css";
import {GoogleAnalytics} from "@next/third-parties/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Hugo Silva",
    description: "Hugo Silva showcase website, working in game dev as Lead Programmer. My latest work use tech as C++14 · Lumberyard · Unity · Unreal ",
    keywords: "hugoflsilva, hugosilva, hugo silva, game dev, manchester, indie, development, games, indie games, rockslide studios, rockslide",
    authors: [{url: "https://hugoflsilva.com", name: "Hugo Silva"}],
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link
                href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&amp;subset=devanagari,latin-ext"
                rel="stylesheet"/>
            <title>Hugo Silva</title>
            <link rel="shortcut icon" type="image/icon" href="/images/logo/favicon.ico"/>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        </body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!}/>
        </html>
    );
}
