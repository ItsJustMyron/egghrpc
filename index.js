const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Egghosting.com/discord",
        state: "Working as Support",
        startTimestamp: new Date(),
        largeImageKey: "egghrpc",
        largeImageText: "egghosting.com",
        smallImageKey: "dci",
        SmallImageText: "egghosting.com"
    });

    console.log("Egghosting Rich Precense is nu geactiveerd! Kusjes Tiebe <3")
});

rpc.login({
    clientId: "780840031131795537"
});
