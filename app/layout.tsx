import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Standup Action Tracker – Track & Follow Up on Standup Action Items",
  description: "Automatically extract action items from standup meetings, assign owners, track completion, and send reminders. Built for scrum masters and engineering managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0431dcd6-5fc7-4c98-a096-67deb925001d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
