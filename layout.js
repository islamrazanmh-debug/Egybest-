import './globals.css'

export const metadata = {
  title: 'ايجي بست | Next.js',
  description: 'موقع أفلام ومسلسلات حديث',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {/* يمكنك إضافة Navbar ثابت هنا مستقبلاً */}
        {children}
      </body>
    </html>
  )
}