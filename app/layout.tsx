//! GLOBAL
import "../styles/globals.css";

//! COMPONENTS
import Header from "../components/Header";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Providers>
        <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
          {/* dark:bg-zinc-900 eklenecek. sistem default olarak tanıyor ekleyemedim */}
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
