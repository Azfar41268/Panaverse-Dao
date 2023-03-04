import './globals.css'
import Header from './header'

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
      </body>
    </html>
  )
}
