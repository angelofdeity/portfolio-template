import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nico | Full Stack Software Engineer",
  description: "Nico is an insatiably inquisitive  software engineer who is passionate about full stack web   development. Take a minute to learn a little about him  and see a few of his projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
            {children}
        </div>
      </body>
    </html>
  );
}
