import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar';
function MyApp({ Component, pageProps }: AppProps) {
  
  return(
    <div className='flex h-screen font-montserrat'>
      <Component {...pageProps} />
      <NavBar/>
      

    </div>
  ) 
  
}

export default MyApp
