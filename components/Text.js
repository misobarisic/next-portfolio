import React from 'react';

export default function Text({text,title,uppercase}) {
    let cnt = ""
    if (uppercase) {
        if (text) cnt = text.toUpperCase()
        else if (title) cnt = title.toUpperCase()
    }  else {
        if (text) cnt = text
        else if (title) cnt = title
    }
    return (
        <p className="text-md font-semibold">
            {cnt}
        </p>
    )
}
