import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />

    </>
  )
}

export default MyApp
