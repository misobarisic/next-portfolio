import React from 'react';
import SimpleLink from "./SimpleLink";
import TextComponent from "../TextComponent";

export default function Links({text = "LINKS", links, uppercase}) {
    // if (!text) text = "LINKS"
    return (
        <div className="flex flex-col">
            <TextComponent text={text}/>
            {links.map((link, index) => <SimpleLink key={index} uppercase={uppercase} {...link}/>)}
        </div>
    )
}
