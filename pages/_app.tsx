import '../styles/global.scss';
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="appWrapper" id="App">
      <div className="content" id="page-wrap">
        <Navbar />
        <Component {...pageProps} />
      </div>
      <Footer />
      <Script
        src="https://kit.fontawesome.com/09f25f8b57.js"
        crossOrigin="anonymous"
      />
    </div>
  );
}
