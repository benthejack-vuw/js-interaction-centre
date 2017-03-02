import {InteractionManager} from "./interactionHandlers/interactionManager"

(<any>window).JSIC = InteractionManager;

export {InteractionManager as JSIC};
export * from "./mouseData"
export * from "./point"
export * from "./transform"
export * from "./domUtils"
export * from "./data_error"
export * from "./interactionHandlers/guiInteractionHandler"
export * from "./interactionHandlers/mouseInteractionHandler"
export * from "./interactionHandlers/keyboardInteractionHandler"
export * from "./interactionHandlers/interactionHandler"
export * from "./interactionHandlers/interactionManager"
