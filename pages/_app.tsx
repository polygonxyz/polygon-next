import type { AppProps } from "next/app";
import "../utils/reset.css";
import "../utils/globalStyle.css";

function Root({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default Root;
