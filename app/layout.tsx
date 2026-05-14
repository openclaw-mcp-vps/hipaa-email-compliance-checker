import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIPAA Email Compliance Checker",
  description: "Ensure emails meet HIPAA compliance standards. Scan for PHI exposure, validate encryption, check recipient authorization, and generate audit trails."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="69758366-a09e-4297-8d16-bc440fe8fe2a"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
