import { world } from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
    import("./detect_platform.js");
});
