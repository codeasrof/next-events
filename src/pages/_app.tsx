import MainHeader from '@/components/layout/MainHeader'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
      <MainHeader/>
      <Component {...pageProps} />
  </>
}
