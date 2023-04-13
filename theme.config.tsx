import Footer from "./components/Footer/Footer.js";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

export default {
  logo: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="42"
      fill="none"
      viewBox="0 0 37 42"
    >
      <path
        fill="currentColor"
        d="M33.873 6.625a6.234 6.234 0 00-3.196-.895h-.551a6.541 6.541 0 00-2.391.718l-3.31 1.799-1.56.837-11.26 6.032a6.206 6.206 0 00-3.29 5.49v5.445l4.157-2.225v-3.22a2.08 2.08 0 011.091-1.824l9.303-4.982 1.559-.832 4.157-2.225 1.117-.598c.14-.078.288-.137.442-.177.169-.052.344-.078.52-.078.377.004.747.108 1.07.302a2.04 2.04 0 011.003 1.773v11.71a2.08 2.08 0 01-1.09 1.825L12.471 35.77v-3.687l-4.157 2.205v4.731a2.2 2.2 0 002.146 2.2c.38.01.756-.08 1.091-.26l22.056-11.814a6.2 6.2 0 003.289-5.47v-11.71a6.18 6.18 0 00-3.024-5.34z"
      ></path>
      <path
        fill="currentColor"
        d="M24.425 14.736v3.22a2.08 2.08 0 01-1.091 1.824l-9.303 4.982-1.559.837-4.157 2.225-1.56.832-2.598 1.394V14.887a2.08 2.08 0 011.092-1.825l16.11-8.637c.295-.165.628-.252.966-.254a2.12 2.12 0 011.07.301A2.039 2.039 0 0124.4 6.245v.234l2.572-1.378c.43-.23.881-.419 1.346-.566a6.156 6.156 0 00-2.785-3.64 6.172 6.172 0 00-6.138-.151L3.284 9.386A6.207 6.207 0 000 14.887v18.434a2.2 2.2 0 002.147 2.2c.38.009.756-.081 1.09-.261l3.519-1.882 1.559-.837 4.157-2.226 1.56-.837 11.26-6.032a6.201 6.201 0 003.29-5.49V12.51l-4.157 2.226z"
      ></path>
    </svg>
  ),
  project: {
    link: "https://github.com/Bundlr-Network",
  },
  footer: {
    component: Footer,
  },
  banner: {
    key: '2.0-release',
    text: <a href="https://medium.com/bundlr-network" target="_blank">
      🎉 New docs released. Read more →
    </a>,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Bundlr Docs'
      }
    }
  }
  // head: () => {
  //   const { asPath, defaultLocale, locale } = useRouter();
  //   const { frontMatter } = useConfig();
  //   const url =
  //     "https://my-app.com" +
  //     (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

  //   return (
  //     <>
  //       <meta property="og:url" content={url} />
  //       <meta property="og:title" content={frontMatter.title || "Bundlr"} />
  //       <meta
  //         property="og:description"
  //         content={
  //           frontMatter.description ||
  //           "Unlock the full potential of Bundlr's technology with our developer resources. Use our SDK and start storing data permanently with 3-4 lines of code."
  //         }
  //       />
  //     </>
  //   );
  // },
};
