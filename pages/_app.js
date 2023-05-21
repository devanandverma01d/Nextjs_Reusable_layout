import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeftAside from '@/components/LeftAside';
import RightAside from '@/components/RightAside';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <div className="row">
          <LeftAside />
          <Component {...pageProps} />
          <RightAside />
        </div>
      </main>
      <Footer />
      
    </>
  )
}