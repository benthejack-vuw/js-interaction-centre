import {InteractionManager} from "./interactionHandlers/interactionManager"

(<any>window).JSIC = InteractionManager;

export {InteractionManager as JSIC};
export * from "./interactionHandlers/guiInteractionHandler"
export * from "./interactionHandlers/mouseInteractionHandler"
export * from "./interactionHandlers/keyboardInteractionHandler"
export * from "./interactionHandlers/interactionHandler"
export * from "./interactionHandlers/interactionManager"
