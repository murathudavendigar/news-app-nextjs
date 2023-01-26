//! GLOBAL
import "../styles/globals.css";

//! COMPONENTS
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body className="bg-gray-100  transition-all duration-700">
        {/* dark:bg-zinc-900 eklenecek. sistem default olarak tanıyor ekleyemedim */}
        <Header />
        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
