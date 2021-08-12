function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout({background,children}) {
    if (!background) background = "bg-gray-800"
    return (
        <div className={classNames("h-screen flex overflow-hidden",background)}>
            <main className="flex-1 relative overflow-y-auto focus:outline-none">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    {children}
                </div>
            </main>
        </div>
    )
}


