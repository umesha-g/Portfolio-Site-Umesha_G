import type { AppProps } from 'next/app';
import '../app/globals.css'; // Import the global CSS

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;