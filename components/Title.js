import React from 'react';

export default function Title({text,title}) {
    return (
        <h1 className="text-red-400 text-2xl font-semibold">
            {text ? text.toUpperCase() : title ? title.toUpperCase() : ""}
        </h1>
    )
}
