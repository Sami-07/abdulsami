import './globals.css'

import { Work_Sans } from 'next/font/google'

const worksans = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: "Abdul Sami's Portfolio",
  description: 'This is the Personal Portfolio Website of Abdul Sami.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={`${worksans.className} text-white`}>{children}</body>
    </html>
  )
}
