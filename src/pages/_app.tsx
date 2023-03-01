import type { AppProps } from "next/app";
import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { pageview } from '../lib/index'
import GoogleTagManagerNoScript from "@/components/Scripts/GoogleTagManagerNoScript";


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return (
    <>
      <Script
        id="due_google_tag_manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5CPQ6NJ');
          `
        }}
      />
      <GoogleTagManagerNoScript/>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;