const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Egghosting.com/discord",
            state: "Kwaliteit voor weinig geld",
        assets: {
            large_image : "egghrpc",
            large_text : "Kwaliteit voor weinig geld.",
        },
        buttons: [{
            label: "Website",
            url: "https://egghosting.com"
            },
            {
            label: "Discord",
            url: "https://egghosting.com/discord"
        }]
        }
    });

    console.log("Rich Precense is now active! Made By Tiebienotjuh <3")
});

rpc.login({
    clientId: "780840031131795537" // Client ID of application that you have creat at https://discord.com/developers/applications
});
