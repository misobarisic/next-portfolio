import React from 'react';
import Head from "next/head";

import Layout from '../components/Layout';
import SimpleLink from "../components/Links/SimpleLink";
import Commands from "../components/Commands";
import Title from "../components/Title";
import Text from "../components/Text";
import Links from "../components/Links/Links";
import projects from '../config/projects';
import SubTitle from "../components/SubTitle";

export default function Page({project}) {
    return (
        <>
            <Head>
                <title>{project.about.name} by Mišo Barišić</title>
                <meta property="og:title" content={project.about.name}/>
                <meta name="description" content={project.about.description}/>
                <meta property="og:description" content={project.about.description}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`https://www.misobarisic.com/${project.id}`}/>
                <link rel="canonical" href={`https://www.misobarisic.com/${project.id}`}/>
                {project.about.image ? <meta property="og:image" content={project.about.image}/> : ""}
            </Head>
            <Layout background="bg-gray-800">
                <div
                    className="font-rmono text-gray-200 container max-w-screen-lg flex flex-col space-y-6 md:space-y-4 mx-auto mt-8 last:pb-8 ...">
                    <div className="flex flex-col space-y-1">
                        <Title text={`${project.about.name.toUpperCase()}`}/>
                        <p className="text-lg font-semibold">
                            <SimpleLink uppercase name="/home" to="/"/>
                        </p>
                        <Text text={project.about.sub}/>
                        <Text text={project.about.description}/>
                    </div>

                    <Links links={project.about.socialLinks}/>
                    <Commands commands={project.about.commands}/>
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps({params}) {
    let project
    for (let p of projects) {
        if (p.id === params.project) {
            project = p
        }
    }
    return {
        props: {
            project,
        },
    }
}

export async function getStaticPaths() {
    const paths = projects.map((project) => `/${project.id}`)
    return {paths, fallback: false}
}
