export default [
    {
        name: "play | p",
        desc: "Play the selected query",
        usage: "play <query> | play winds of change",
        category: "Music"
    },
    {
        name: "pause", desc: "Pause music playback",
        category: "Music"
    }, {
        name: "unpause | resume",
        desc: "Resume music playback",
        category: "Music"
    },
    {
        name: "skip | s",
        desc: "Skip the current track in the music/clip queue ",
        category: "Music"
    },
    {
        name: "stop",
        desc: "Stop the current music queue", category: "Music"
    },
    {
        name: "volume | v",
        desc: "Change the apparent volume",
        usage: "volume <number> | volume 75", category: "Music"
    },
    {
        name: "filter | f",
        desc: "Change the current playback filter",
        usage: "filter [filter_name] | filter 3d", category: "Music"
    },
    {
        name: "filters",
        desc: "List all filters", category: "Music"
    },
    {
        name: "seek | goto",
        desc: "Go to a specific timestamp in seconds",
        usage: "seek <number> | seek 25", category: "Music"
    },
    {
        name: "queue | q",
        desc: "Show the current queue", category: "Music"
    },
    {
        name: "loop | repeat",
        desc: "Change between repeat settings",
        usage: "loop <loop_type> | loop song | loop 2", category: "Music"
    },
    {
        name: "autoplay | ap",
        desc: "Toggle autoplay on/off", category: "Music"
    },
    {
        name: "clear | purge",
        desc: "Clear the chat",
        usage: "clear <number, 2-100 messages>", perm: "Admin", category: "Staff"
    },
    {
        name: "ban",
        desc: "Ban a user",
        usage: "ban <user mention or id> [reason] | ban 464887679327141890 yay",
        perm: "Admin",
        category: "Staff"
    },
    {
        name: "kick",
        desc: "Kick a user",
        usage: "kick <user mention or id> [reason] | kick 464887679327141890 yay",
        perm: "Mod",
        category: "Staff"
    },
    {
        name: "warn",
        desc: "Issue a warning",
        usage: "warn <user mention or id> [reason] | warn 464887679327141890 yay",
        perm: "Mod",
        category: "Staff"
    },
    {
        name: "warnings | warns",
        desc: "Check all warnings",
        usage: "warn <user mention or id> [reason] | warn 464887679327141890 yay",
        perm: "Mod",
        category: "Staff"
    },
    {
        name: "mute",
        desc: "Mute a user",
        usage: "mute <user mention or id> [reason] | mute 464887679327141890 yay",
        perm: "Mod",
        category: "Staff"
    },
    {
        name: "unmute",
        desc: "Unmute a user",
        usage: "unmute <user mention or id> | unmute 464887679327141890",
        perm: "Mod",
        category: "Staff"
    },
    {
        name: "tempmute",
        desc: "Temporarily mute a user",
        usage: "tempmute <user mention or id> <time> [reason] | tempmute 464887679327141890 1m yay",
        perm: "Mod",
        category: "Staff"
    },
    {
        name: "temprole",
        desc: "Temporarily assign a role to a user",
        usage: "temprole <user mention or id> <role mention or id> <time> [reason] | tempmute 464887679327141890 1m yay",
        perm: "Mod",
        category: "Staff"
    },
    {
        name: "announce",
        desc: "Send an announcement",
        usage: "announce <channel mention or id> [role mention or id] <text> | announce 785402193225580566 hehe",
        perm: "Admin",
        category: "Staff"
    },
    {
        name: "say",
        desc: "Say something as the bot",
        usage: "say <channel mention or id> <text> | say 785402193225580566 hehe",
        perm: "Admin",
        category: "Staff"
    },
    {
        name: "welcome",
        desc: "Starter welcome module command",
        perm: "Admin",
        category: "Messages"
    },
    {
        name: "welcome set",
        desc: "Set a welcome channel",
        usage: "welcome set <channel mention or id> | welcome set 785402193225580566",
        perm: "Admin",
        category: "Messages"
    },
    {
        name: "welcome remove",
        desc: "Disable the welcome channel",
        perm: "Admin",
        category: "Messages"
    },
    {
        name: "goodbye",
        desc: "Starter goodbye module command",
        perm: "Admin",
        category: "Messages"
    },
    {
        name: "goodbye set",
        desc: "Set a goodbye channel",
        usage: "welcome set <channel mention or id> | welcome set 785402193225580566",
        perm: "Admin",
        category: "Messages"
    },
    {
        name: "goodbye remove",
        desc: "Disable the goodbye channel",
        perm: "Admin",
        category: "Messages"
    },
    {
        name: "log",
        desc: "Starter log module command",
        perm: "Admin",
        category: "Messages"
    },
    {
        name: "log set",
        desc: "Set a log channel",
        usage: "log set <channel mention or id> | log set 785402193225580566",
        perm: "Admin",
        category: "Messages"
    },
    {
        name: "log remove",
        desc: "Disable the log channel",
        perm: "Admin",
        category: "Messages"
    },
    {
        name: "baserole set",
        desc: "Set the base role - should be a role every user has, only applicable to certain dynamic voice channels",
        usage: "baserole set <role mention or id> | baserole set 821316800406487061",
        perm: "Admin",
        category: "Roles"
    },
    {
        name: "baserole remove",
        desc: "Unset the baserole",
        perm: "Admin",
        category: "Roles"
    },
    {
        name: "mute set",
        desc: "Set the mute role",
        usage: "mute set <role mention or id> | mute set 821316800406487061",
        perm: "Admin",
        category: "Roles"
    },
    {
        name: "mute remove",
        desc: "Unset the mute role",
        perm: "Admin",
        category: "Roles"
    },
    {
        name: "role admin add",
        desc: "Turn a normal role into an admin one",
        usage: "role admin add <role mention or id> | role admin add 821316800406487061",
        perm: "Admin",
        category: "Roles"
    },
    {
        name: "role admin remove",
        desc: "Remove an admin role",
        usage: "role admin remove <role mention or id> | role admin remove 821316800406487061",
        perm: "Admin",
        category: "Roles"
    },
    {
        name: "role admin list",
        desc: "List all admin roles",
        perm: "Admin",
        category: "Roles"
    },
    {
        name: "role mod add",
        desc: "Turn a normal role into a mod one",
        usage: "role mod add <role mention or id> | role mod add 821316800406487061",
        perm: "Admin",
        category: "Roles"
    },
    {
        name: "role mod remove",
        desc: "Remove a mod role",
        usage: "role mod remove <role mention or id> | role mod remove 821316800406487061",
        perm: "Admin",
        category: "Roles"
    },
    {
        name: "role mod list",
        desc: "List all mod roles",
        perm: "Admin",
        category: "Roles"
    },
    {
        name: "avatar",
        desc: "Get the URL of a user's avatar",
        usage: "avatar [user mention or id] | avatar 786026146365833257",
        category: "Misc"
    },
    {
        name: "coinflip | coin | cf | flip",
        desc: "Flip a coin",
        category: "Misc"
    },
    {
        name: "credits",
        desc: "Show bot credits",
        category: "Misc"
    },
    {
        name: "dice | die | roll",
        desc: "Roll a dice",
        usage: "dice [number] | dice 3",
        category: "Misc"
    },
    {
        name: "invite",
        desc: "Get the bot invite link",
        category: "Misc"
    },
    {
        name: "joke",
        desc: "Fetch a joke",
        usage: "joke [type] | joke dark",
        category: "Misc"
    },
    {
        name: "cat",
        desc: "Fetch a cat photo",
        category: "Misc"
    },
    {
        name: "dog",
        desc: "Fetch a dog photo",
        category: "Misc"
    },
    {
        name: "meme",
        desc: "Fetch a random meme",
        category: "Misc"
    },
    {
        name: "ping",
        desc: "pong",
        category: "Misc"
    },
    {
        name: "serverinfo | serverstats | server",
        desc: "Fetch some server stats",
        category: "Misc"
    },
    {
        name: "userinfo | user | member | memberinfo",
        desc: "Fetch some user info",
        usage: "userinfo [user mention or id] | userinfo 786026146365833257",
        category: "Misc"
    },
    {
        name: "rank all",
        desc: "Fetch the rank leaderboard",
        category: "Misc"
    },
    {
        name: "rank",
        desc: "Get the user's rank",
        usage: "rank [user mention or id] | rank 786026146365833257",
        category: "Misc"
    },
]
