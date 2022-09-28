import { ReactNode } from 'react'
import HeadTag from '@/components/head-tag'

export interface DefaultLayoutProps {
  children?: ReactNode
  pageTitle?: string
}

export default function DefaultLayout({
  children,
  pageTitle
}: DefaultLayoutProps) {

  return (
    <>
      <HeadTag pageTitle={pageTitle}/>
      <main>
        {children}
      </main>
    </>
  )
}
