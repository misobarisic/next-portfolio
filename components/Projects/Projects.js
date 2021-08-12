import React from 'react';
import Project from "./Project";
import TextComponent from "../TextComponent";

export default function Projects({projects,uppercase}) {
    if (!projects) return null
    projects.sort(sort)
    return (
        <div className="flex flex-col space-y-0.5">
            <TextComponent text="PROJECTS"/>
            {projects.map((project, index) => <Project key={index} uppercase={uppercase} {...project}/>)}
        </div>
    )
}

const sort = (a, b) => a.status - b.status;
