import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "@fontsource/roboto-mono";
import "@fontsource/roboto-mono/600.css";
import "@fontsource/roboto-mono/700.css";

import Analytics from "../components/Analytics";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import useGoogleTagManager from "../hooks/useGoogleTagManager";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        localStorage.setItem("theme", "dark");
    }, []);

    useGoogleTagManager();

    return (
        <>
            <Component {...pageProps} />
            <Analytics />
        </>
    );
}