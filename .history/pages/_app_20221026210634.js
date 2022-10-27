import '../styles/globals.css'
import Layout from '../components/layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function MyApp({ Component, pageProps }) {
  return(
    <ToastContainer>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ToastContainer>
    
     
  )
}

export default MyApp
