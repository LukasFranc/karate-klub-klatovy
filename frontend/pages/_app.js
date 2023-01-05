import {Inter} from '@next/font/google'
import '../styles/main.scss'

const inter = Inter({
  weight: ['400', '700',  '900'],
  style: ['italic', 'normal'],
  subsets: ['latin', 'latin-ext'],
})


export default function App({Component, pageProps}) {
  return (
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
  )
}
