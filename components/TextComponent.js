import React from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TextComponent({text, uppercase, small, large}) {
    if (!text) text = ""
    text = uppercase ? text.toUpperCase() : text
    return <div className={classNames("font-semibold mb-1", small ? "text-md" : large ? "text-xl" : "text-lg")}>
        {text}
    </div>
}
