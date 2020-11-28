const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Egghosting.com/discord",
        state: "Low price 4 Good Quality",
        startTimestamp: new Date(),
        largeImageKey: "egghrpc",
        largeImageText: "egghosting.com",
        smallImageKey: "dci",
        SmallImageText: "egghosting.com"
    });

    console.log("Rich Precense is now actives! Made By Tiebienotjuh <3")
});

rpc.login({
    clientId: "780840031131795537" // Client ID of application that you have creat at https://discord.com/developers/applications
});
