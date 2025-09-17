export const viewport = { width: "device-width", initialScale: 1 };

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' style={{ fontSize: "16px" }}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
