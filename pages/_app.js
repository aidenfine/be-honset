import '../styles/globals.css'
import Layout from '../components/layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <ToastContainer limit={2}/>
        <Component {...pageProps} />
    </Layout>
     
  )
}

export default MyApp
