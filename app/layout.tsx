import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kevin Ye',
  description: 'placeholder description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>
      <Navbar />
      {children}
    </div>
  )
}
