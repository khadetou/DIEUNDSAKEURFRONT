import "styles/globals.css";
import "react-slidedown/lib/slidedown.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "react-input-range/lib/css/index.css";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { wrapper } from "../redux";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    typeof document != "undefined"
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
