import React, {useEffect, useState} from 'react';
import Head from "next/head";
import axios from "axios";

import Layout from '../components/Layout';
import Links from "../components/Links/Links";
import Projects from "../components/Projects/Projects";
import Education from "../components/Education";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Text from "../components/Text";
import Skills from "../components/Skills";
import config from '../config/main';

export default function Page({config}) {
    return (
        <>
            <Head>
                <title>{config.about.title}</title>
                <meta property="og:title" content={config.about.title}/>
                <meta name="description" content={config.about.description}/>
                <meta property="og:description" content={config.about.description}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.misobarisic.com"/>
                <link rel="canonical" href="https://www.misobarisic.com"/>
                <meta property="og:image" content={config.about.image}/>
            </Head>
            <Layout background="bg-gray-800">
                <div
                    className="font-rmono text-gray-200 container max-w-screen-lg flex flex-col space-y-6 md:space-y-4 mx-auto mt-8 last:pb-8 ...">
                    <div className="flex flex-col space-y-1">
                        <Title text="WELCOME TO MISOBARISIC.COM"/>
                        <SubTitle text={config.about.name}/>
                        <Text uppercase text={config.about.sub}/>
                        <Text text={config.about.description}/>
                        <Links text="" links={config.about.socialLinks}/>
                    </div>

                    <Projects projects={config.projects}/>
                    <Skills skills={config.skills}/>
                    <Education/>

                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            config
        },
    }
}
