import { Sour_Gummy} from "next/font/google";
import "./globals.css";

const SourGummy = Sour_Gummy({
  variable: "--font-sourgummy-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Valentine",
  description: "Created by BossNattawat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="valentine">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${SourGummy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
