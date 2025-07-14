import { world } from "@minecraft/server";

const objPlatform = world.scoreboard.getObjective("detect:platform") ?? world.scoreboard.addObjective("detect:platform");

world.afterEvents.playerSpawn.subscribe(eventData => {
    const player = eventData.player;

    // Access the client system info (if available)
    if (player.clientSystemInfo) {
        const maxRenderDistance = player.clientSystemInfo.maxRenderDistance;
        const platformType = player.clientSystemInfo.platformType;
        const memoryTier = player.clientSystemInfo.memoryTier;

        player.sendMessage(`Your device has a max render distance of: ${maxRenderDistance} chunks.`);
        player.sendMessage(`You are playing on: ${platformType}`);
        player.sendMessage(`Memory Tier: ${memoryTier}`);

        // Assign player score based on their gaming platform
        if (platformType === "Desktop") {
            objPlatform.setScore(player, 1);
        }
        if (platformType === "Console") {
            objPlatform.setScore(player, 2);
        }
        if (platformType === "Mobile") {
            objPlatform.setScore(player, 3);
        }

    } else {
        player.sendMessage("Client System Info not available for this player.");
        objPlatform.setScore(player, 4);
    }
});
