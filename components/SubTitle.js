import React from 'react';

export default function SubTitle({text,title}) {
    return (
        <h1 className="text-xl font-semibold">
            {text ? text.toUpperCase() : title ? title.toUpperCase() : ""}
        </h1>
    )
}
