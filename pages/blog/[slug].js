import React from 'react';

import Head from "next/head";
import Layout from "../../components/Layout";
import config from '../../config/main';
import SimpleLink from "../../components/Links/SimpleLink";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import Title from "../../components/Title";
import TextComponent from "../../components/TextComponent";

export default function Page({config,post, previousPost, nextPost}) {
    return (
        <>
            <Head>
                <title>{post.meta.title ? `${post.meta.title} | ` : ""}Blog by Mišo Barišić</title>
                <meta property="og:title"
                      content={`${post.meta.title ? `${post.meta.title} | ` : ""}Blog by Mišo Barišić`}/>
                <meta name="description"
                      content={post.meta.description ? post.meta.description : post.content.slice(0, 128)}
                />
                <meta property="og:description"
                      content={post.meta.description ? post.meta.description : post.content.slice(0, 128)}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`https://www.misobarisic.com/blog/${post.slug}`}/>
                <link rel="canonical" href={`https://www.misobarisic.com/blog/${post.slug}`}/>
                <meta property="og:image" content={config.about.image}/>
            </Head>
            <article>
                <Layout background="bg-gray-800">
                    <div
                        className="font-rmono text-gray-200 container max-w-screen-lg flex flex-col space-y-6 md:space-y-4 mx-auto mt-8 last:pb-8 ...">
                        <div className="flex flex-col space-y-1">
                            <div className="flex flex-col space-y-0.5">
                                <Title text={post.meta.title.toUpperCase()}/>
                                <h2 className="text-sm font-medium">Posted by Mišo Barišić on {post.meta.date}{post.meta.timeToRead ? ` (${post.meta.timeToRead})` : ""}</h2>
                            </div>
                            <div className="flex flex-row space-x-2">
                                <p className="text-lg font-semibold">
                                    <SimpleLink uppercase name="/blog" to="/blog"/>
                                </p>
                                <p className="text-lg font-semibold">
                                    <SimpleLink uppercase name="/home" to="/"/>
                                </p>
                            </div>

                            <div className="pt-2 pb-2">
                                <ReactMarkdown
                                    remarkPlugins={[gfm]}
                                    className="markdown"
                                    skipHtml
                                    components={components}>{post.content}</ReactMarkdown>
                            </div>

                            <div className="flex flex-col">
                                {previousPost.title || nextPost.title ? <TextComponent small uppercase text="Read also"/> : ""}
                                <div className="flex flex-col-reverse md:flex-row md:space-x-2 md:items-center">
                                    {previousPost.title && <SimpleLink title={previousPost.title} to={`${previousPost.slug || ""}`}/>}
                                    {previousPost.title && nextPost.title && <div className="hidden md:inline-flex">|</div>}
                                    {nextPost.title && <SimpleLink title={nextPost.title} to={`${nextPost.slug || ""}`}/>}
                                </div>
                            </div>

                        </div>
                    </div>
                </Layout>
            </article>
        </>
    );
}

const components = {
    code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter style={style} className="rounded-none md:rounded-md" language={match[1]} PreTag="div"
                               children={String(children).replace(/\n$/, '')} {...props} />
        ) : (
            <code className={className+" rounded-none md:rounded-md"} {...props}>
                {children}
            </code>
        )
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug
    const {getPostBySlug, getNeighborPosts} = require("../../utils/blogUtils")
    const post = getPostBySlug(slug)

    const {previousPost, nextPost} = getNeighborPosts(slug)

    return {
        props: {config,post, previousPost, nextPost},
    }
}

export async function getStaticPaths() {
    const {getSlugs} = require("../../utils/blogUtils")
    const slugs = getSlugs()
    const paths = slugs.map(slug => `/blog/${slug}`)
    return {paths, fallback: false}
}

