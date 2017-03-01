import {MouseData} from "./src/mouseData"
import {MutableMouseData} from "./src/mouseData"
import InteractionManager from "./src/interactionHandlers/interactionManager"
import GuiInteractionHandler from "./src/interactionHandlers/guiInteractionHandler"
import MouseInteractionHandler from "./src/interactionHandlers/mouseInteractionHandler"
import KeyboardInteractionHandler from "./src/interactionHandlers/keyboardInteractionHandler"

(<any>window).InteractionManager = InteractionManager;
(<any>window).MouseInteractionManager = MouseInteractionHandler;
(<any>window).KeyboardInteractionManager = KeyboardInteractionHandler;
(<any>window).GuiInteractionManager = GuiInteractionHandler;