import React, {useState} from 'react';
import TextComponent from "./TextComponent";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Commands({commands}) {
    if (!commands) return null

    const categories = []
    for (const cmd of commands) {
        if (!categories.includes(cmd.category)) categories.push(cmd.category)
    }

    const commandMap = new Map()
    for (const cmd of commands) {
        let categoryCommands = commandMap.get(cmd.category) || []
        categoryCommands.push(cmd)
        categoryCommands.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        commandMap.set(cmd.category, categoryCommands)
    }

    const [selected, setSelected] = useState(0)

    return (
        <div>
            <TextComponent text="COMMANDS"/>
            <div className="flex space-x-2">
                {categories.map((cat, index) => {
                    return <div
                        className={classNames(
                            index === selected ? "text-purple-400" : "rounded hover:bg-gray-600", // Change text color if selected
                            index === 0 && index !== categories.length - 1 ? "pr-1" : "px-1", // disable padding to the left if first
                            // index === categories.length - 1 && index !== 0 ? "pl-1" : "px-1", // disable padding to the right if last
                            "font-medium mb-2 cursor-pointer")}
                        onClick={() => setSelected(index)}>
                        {cat.toUpperCase()}
                    </div>
                })}
            </div>
            <div className="mb-6 grid grid-cols-1 gap-4">
                {commandMap.get(categories[selected]).map(cmd => <div>
                    <p className="font-semibold">{cmd.name}</p>
                    <p className="font-medium">{cmd.desc}</p>
                    <p className="font-medium text-green-500">{cmd.usage}</p>
                </div>)}
            </div>
        </div>
    )
}
