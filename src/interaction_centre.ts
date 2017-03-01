import {MouseData} from "./mouseData"
import {MutableMouseData} from "./mouseData"
import InteractionManager from "./interactionHandlers/interactionManager"
import GuiInteractionHandler from "./interactionHandlers/guiInteractionHandler"
import MouseInteractionHandler from "./interactionHandlers/mouseInteractionHandler"
import KeyboardInteractionHandler from "./interactionHandlers/keyboardInteractionHandler"

(<any>window).InteractionManager = InteractionManager;
(<any>window).MouseInteractionManager = MouseInteractionHandler;
(<any>window).KeyboardInteractionManager = KeyboardInteractionHandler;
(<any>window).GuiInteractionManager = GuiInteractionHandler;