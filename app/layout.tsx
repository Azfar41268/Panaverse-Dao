import './globals.css'
import Header from './header'
import Footer from './footer'

export const metadata = {
  title: 'Panaverse Dao',
  description: 'Made By Muhammad Azfar Sikander',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
