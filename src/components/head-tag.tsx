import { Head } from 'next/document'

export interface HeadTagProps {
  pageDescription?: string
  pageTitle?: string
}

export default function HeadTag({ pageDescription, pageTitle }: HeadTagProps) {

  const title = pageTitle ? `${pageTitle} - Splitter` : 'Splitter'
  return (
    <Head>
      <title>{title}</title>
      <meta name="name" content={title} />
      <meta
        name="description"
        content={pageDescription ?? 'Split bills easily!'}
      />
    </Head>
  )
}
