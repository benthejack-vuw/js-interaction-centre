export enum MouseButton{
	"none" = 0,
	"left",
	"middle",
	"right",
	"any"
}

export namespace MouseButtonConverter {
    export function fromString(buttonString:string):MouseButton {
        switch (buttonString) {
            case "left":
            	return MouseButton.left;
            case "middle":
            	return MouseButton.middle;
            case "right":
            	return MouseButton.right;
            case "any":
            	return MouseButton.any;
            default:
                return MouseButton.none;
        }
    }
}

export class MouseData{

	protected _position:any;
	protected _lastPosition:any;
	protected _buttons:any;

	constructor(){
		this._buttons = {};
	}

	public get buttons(){
		return this._buttons;
	}

	public get position(){
		return this._position;
	}

	public get lastPosition(){
		return this._lastPosition;
	}

	public isPressed(button:MouseButton):boolean{
		return this._buttons[button];
	}

	public mutableCopy():MutableMouseData{
		var mutable:MutableMouseData = new MutableMouseData();
		mutable.update(this.lastPosition);
		mutable.update(this.position);
		mutable.buttonObject = this._buttons;
		return mutable;
	}
}

export class MutableMouseData extends MouseData{

	constructor(){ super(); }

	public update(position:any){
		if(this._position !== undefined) {
			this._lastPosition = this.position;
		}
		this._position = {x:position.x, y:position.y};
	}

	public setButton(button:MouseButton, value:boolean):void{
		this._buttons[button] = value;
	}

	public locked():MouseData{
		return this as MouseData;
	}

	public set buttonObject(buttons:any){
		this._buttons = buttons;
	}
}
