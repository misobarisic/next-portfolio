import React from 'react';
import SimpleLink from "./SimpleLink";
import TextComponent from "../TextComponent";

export default function Articles({articles,uppercase}) {
    return (
        <div className="flex flex-col">
            <TextComponent text={"ARTICLES"}/>
            {articles.map(article => <SimpleLink uppercase={uppercase} {...article}/>)}
        </div>
    )
}
