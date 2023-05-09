import "./globals.css";
import NavTabs from "@/components/nav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <NavTabs />
          {children}
        </main>
      </body>
    </html>
  );
}
