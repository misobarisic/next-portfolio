import React from 'react';
import TextComponent from "./TextComponent";
import ProgressBar from "./ProgressBar";

export default function Skills({skills,uppercase}) {
    if (!skills) skills = []
    return (
        <div className="flex flex-col space-y-1">
            <TextComponent text="SKILLS"/>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-1 gap-x-6">
                {skills.map(skill => <ProgressBar key={skill.name} background={skill.color} completed={skill.percent}
                                                  title={uppercase ? skill.name.toUpperCase() : skill.name}/>)}
            </div>
        </div>
    )
}
