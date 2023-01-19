import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="background relative">
        <main className="max-w-2xl px-4	 mx-auto">{children}</main>
      </body>
    </html>
  );
}
