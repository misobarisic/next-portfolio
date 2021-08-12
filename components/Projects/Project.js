import React from 'react';
import Link from "next/link";

const STATUS_LIST = [
    {
        name: "NEW",
        color: "pink",
    },
    {
        name: "Coming Soon",
        color: "blue",
    },
    {
        name: "Active",
        color: "green",
    },
    {
        name: "Maintenance",
        color: "orange",
    },
    {
        name: "Abandoned",
        color: "gray",
    },
    {
        name: "Closed",
        color: "yellow",
    },
];

export default function Project(project) {
    let text = ""

    const status = STATUS_LIST[project.status - 1]
    if (status) {
        if (status.name) {
            text = `(${status.name})`
        }
    }

    if (project.uppercase) project.name = project.name.toUpperCase()
    return (
        <Link href={project.to}>
            <a className="flex space-x-1 text-md font-medium text-blue-400 hover:text-pink-500 delay-25">
                <h2>{project.name}</h2>
                {/*{status && <p>{text}</p>}*/}
            </a>
        </Link>
    )
}
