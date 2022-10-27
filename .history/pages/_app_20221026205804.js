import '../styles/globals.css'
import Layout from '../components/layout'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
     
  )
}

export default MyApp
