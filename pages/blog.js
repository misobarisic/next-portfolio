import React, {useEffect, useState} from 'react';
import Head from "next/head";

import Layout from "../components/Layout";
import Links from "../components/Links/Links";
import SimpleLink from "../components/Links/SimpleLink";
import Articles from "../components/Links/Articles";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Text from "../components/Text";
import config from '../config/main';

export default function Page({posts,config}) {
    const [articles,setArticles] = useState([])
    useEffect(() => {
       setArticles(posts.map(post => {
           return {to: `blog/${post.slug}`, ...post.meta}
       }))
    },[])

    return (
        <>
            <Head>
                <title>Blog Posts by Mišo Barišić</title>
                <meta property="og:title" content="Blog Posts by Mišo Barišić"/>
                <meta name="description" content="My random thoughts and ideas go here"/>
                <meta property="og:description" content="My random thoughts and ideas go here"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.misobarisic.com/blog"/>
                <link rel="canonical" href={"https://www.misobarisic.com/blog"}/>
                <meta property="og:image" content={config.about.image}/>
            </Head>
            <Layout background="bg-gray-800">
                <div
                    className="font-rmono text-gray-200 container max-w-screen-lg flex flex-col space-y-6 md:space-y-4 mx-auto mt-8 last:pb-8 ...">
                    <div className="flex flex-col space-y-1">
                        <Title text="WELCOME TO MISOBARISIC.COM/BLOG"/>
                        <p className="text-lg font-semibold">
                            <SimpleLink uppercase name="/home" to="/"/>
                        </p>
                    </div>
                   <Articles articles={articles}/>
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps(context) {
    const {getNewestPosts} = require("../utils/blogUtils")
    const posts = getNewestPosts()
    return {
        props: {posts,config},
    }
}
