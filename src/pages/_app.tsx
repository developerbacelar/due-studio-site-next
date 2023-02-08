import FacebookPixel from "@/components/Pixel/Facebook";
import type { AppProps } from "next/app";
import GoogleAnalytics from "@/components/GoogleAnalytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <FacebookPixel/>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;