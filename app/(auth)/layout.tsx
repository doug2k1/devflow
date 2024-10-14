export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Auth layout</p>
      {children}
    </div>
  )
}
