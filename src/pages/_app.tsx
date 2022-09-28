import type { AppProps } from 'next/app'

import '../styles/globals.css'

function SplitterApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default SplitterApp