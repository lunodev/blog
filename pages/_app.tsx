import type { AppProps } from 'next/app'
import StoreProvider from "../app/StoreProvider";
import '../styles/globals.scss'


function MyApp({ Component, pageProps }: AppProps)  {
  return (
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
  );
}


export default MyApp
