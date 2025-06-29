import "./globals.css"; // o "../styles/globals.css" si lo tienes fuera

export const metadata = {
  title: "Control Laboratorio",
  description: "Panel según rol",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-700">{children}</body>
    </html>
  );
}
