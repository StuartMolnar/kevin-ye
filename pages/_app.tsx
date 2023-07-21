import '@/app/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/app/layout';
import BlurhashContext from '@/contexts/BlurhashContext';
import _blurhashMap from "@/public/blurhash_map.json";

const blurhashMap: { [key: string]: string | undefined } = _blurhashMap;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlurhashContext.Provider value={blurhashMap}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BlurhashContext.Provider>
  );
}

export default MyApp;
