import type { Metadata } from 'next'
import './globals.css'
import { lazy } from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry'

export const metadata: Metadata = {
  title: 'Qubic Test- Aidil Febrian',
  description: 'technical test'
}

const BaseLayout = lazy(() => import('@afx/views/base/index.layout'))

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`antialiased`}>
        <AntdRegistry layer ssrInline>
          <BaseLayout>{children}</BaseLayout>
        </AntdRegistry>
      </body>
    </html>
  )
}
