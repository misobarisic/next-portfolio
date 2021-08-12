import bariskoCommands from "./bariskoCommands";

export default [
    {
        id: "barisko",
        about: {
            image: "/barisko.webp",
            name: "Barisko",
            sub: `Default command prefixes are "b!" and "!"`,
            description:
                "Barisko is a multipurpose Discord bot that I've created as a side project and after some time I decided to release it to the public with a fully fledged dashboard! So, what does it actually do? A lot to be fair. There's no point in trying to explain it all here. Add Barisko to your server, give it a shot.",
            socialLinks: [
                {
                    name: "Invite to Discord",
                    to: "go/bariskoinvite",
                },
                {
                    name: "Dashboard",
                    to: "go/bariskodash",
                },
            ],
            commands: bariskoCommands
        },
    },
    {
        id: "safepaste",
        about: {
            image: "/safepaste.webp",
            name: "SafePaste",
            sub: ``,
            description:
                "SafePaste is an open-source service similar to Pastebin where you are able to store any piece of text and generate links for easy cross platform sharing. Data is preserved forever!",
            socialLinks: [
                {
                    name: "Website",
                    to: "https://misobarisic.com/go/safepaste",
                },
                {
                    name: "Source Code",
                    to: "https://misobarisic.com/go/safepastesource",
                },

            ],
        },
    },
    {
        id: "safelink",
        about: {
            image: "/safepaste.webp",
            name: "SafeLink",
            sub: ``,
            description:
                "SafeLink is an open-source persistent link sharing service. Operates on the same principle as SafePaste. Links are preserved forever!",
            socialLinks: [
                {
                    name: "Website",
                    to: "https://misobarisic.com/go/safelink",
                },
                {
                    name: "Source Code",
                    to: "https://misobarisic.com/go/safelinksource",
                },

            ],
        },
    },
    {
        id: "redgifs-downloader",
        about: {
            name: "RedGIFs Downloader",
            sub: ``,
            description:
                "How many times have you wanted to download videos in bulk from RedGIFs. Downloading videos from your favourite user and any search term has never been easier! Just follow the steps below and make sure to use filters to enhance your experience.",
            socialLinks: [
                {
                    name: "NPM",
                    to: "https://misobarisic.com/go/redgifs-downloader",
                },
                {
                    name: "Source Code",
                    to: "https://misobarisic.com/go/redgifs-downloader-source",
                },

            ],
        },
    },
    {
        id: "calculator",
        about: {
            image: "/calculator.webp",
            name: "Calculator++",
            sub: `Only available on Android`,
            description:
                "An All-in-One Calculator which offers you everything your heart desires. " +
                "Ranging from regular old math to unit converters and finance calculator. Pretty neat?\n" +
                "What does it do?\n" +
                "Designed with simplicity in mind, it helps you solve everyday problems.",
            socialLinks: [
                {
                    name: "Play Store",
                    to: "https://misobarisic.com/go/calculator",
                },
            ],
        },
    },
    {
        id: "commiesort",
        about: {
            name: "CommieSort",
            description:
                "A simple yet effective sorting algorithm. " +
                "Predecessor to StalinSort. How it works: Assume the first member is in order." +
                " Head to the next member larger than the previous one. " +
                "Eliminate every member which is not in order. Simple",
            socialLinks: [
                {
                    name: "Source Code",
                    to: "https://misobarisic.com/go/commiesort",
                },
            ],
        },
    }
]
