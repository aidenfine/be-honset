import '../styles/globals.css'
import Layout from '../components/layout'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'



function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <ToastContainer>
        <Component {...pageProps} />
      </ToastContainer>
    </Layout>
     
  )
}

export default MyApp
