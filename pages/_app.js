import React from 'react';
import Head from 'next/head';

import '../styles/index.scss';
// import 'tailwindcss/tailwind.css';

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>M150 Apps by Mišo Barišić</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />

                <meta name="description" content="Made by Mišo Barišić"/>

                <meta name="keywords" content="Tech, Blog"/>

                <meta name="author" content="misobarisic"/>

                <link rel="shortcut icon" href="/favicon.ico" />

                {/*<link*/}
                {/*    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"*/}
                {/*    rel="stylesheet"*/}
                {/*/>*/}

                {/*<link*/}
                {/*    href="https://fonts.googleapis.com/icon?family=Material+Icons"*/}
                {/*    rel="stylesheet"*/}
                {/*/>*/}
            </Head>
            <Component {...pageProps} />
        </>
    );
}
