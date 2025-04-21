import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import "@/scss/global.scss"; // ✅ 글로벌 스타일 적용

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
