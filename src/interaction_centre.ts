import InteractionManager from "./interactionHandlers/interactionManager"

(<any>window).InteractionManager = InteractionManager;

declare module js_interaction_centre{
	var InteractionCentre = InteractionManager;
}