import React from 'react';
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SimpleLink({to, href, name, title, small, large, uppercase,normalColor,hoverColor}) {
    if (!name) name = ""
    if (!title) title = ""
    const text = uppercase ? name.toUpperCase() || title.toUpperCase() : name || title
    return (
        <Link href={to || href || "#"}>
            <a className={classNames(
                "font-medium delay-25",
                small ? "text-sm" : large ? "text-lg" : "text-md",
                normalColor ? `text-${normalColor}` : "text-blue-400",
                hoverColor ? `hover:text-${hoverColor}` : "hover:text-pink-500")}>
                {text}
            </a>
        </Link>
    )
}
