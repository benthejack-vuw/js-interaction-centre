#JS Interaction Centre 

js interaction centre is a lightweight (26KB) interaction event manager that makes setting up complex interactions such as keyboard combinations, mouse interactions, and HTML input element interaction events simple through the use of JSON files that link events to callbacks.

This module is written in typescript so has type-definitions in-built. It can be used modularly or as a javascript global.

#API
	
InteractionManager (combines all interaction handlers)
```
new interactionCentre.InteractionManager(
	callback_object:Object,
	listener_element:HTMLElement,
	path_to_interactions_json:string
);
```

KeyboardInteractionHandler
```
new interactionCentre.KeyboardInteractionManager(
	callback_object:Object,
	listener_element:HTMLElement,
	path_to_interactions_json:string
);
```

MouseInteractionHandler
```
new interactionCentre.MouseInteractionManager(
	callback_object:Object,
	listener_element:HTMLElement,
	path_to_interactions_json:string
);
```

GUIInteractionHandler
```
new interactionCentre.GUIInteractionManager(
	callback_object:Object,
	path_to_interactions_json:string
);
```

_callback_object_ is an object or scope that contains the callback functions linked to by the interactions json file.

_listener_element_ is the element that listens for the event, and that event data (eg.. mouse position) is relative to.

_path_to_interactions_json_ is the path to your interaction definitions.

	

#Example use

As a javascript global:


##interactions.json:
```
{
	"keyboard":{

		"press":{
			"any":"pressed_any_key",
			"control": "pressed_control",
			"p":"pressed_p",
			"P":"pressed_cap_p",
			"control+b":"pressed_control_b",
			"control+alt+shift+b":"pressed_control_alt_shift_b",
			"arrowright":"pressed_rightarrow",
			"a+b+c":"pressed_a_b_c"
		},
		"release":{
			"x":"x_released"
		}
	},

	"mouse":{
		"click":{
			"left":"clicked_mouse",
			"right":"clicked_mouse",
			"middle":"clicked_mouse"
		},

		"press":{
			"left":"pressed_left_mouse_button",
			"right":"pressed_left_mouse_button",
			"middle":"pressed_left_mouse_button"
		},


		"drag":"mouse_dragged",
		"move":"mouse_moved"
	},

	"gui":{

		"test1":{
			"callbacks":{
				"input":"slider_changed"
			},
			"attributes":{
				"min":0.001,
				"max":1,
				"value":0.5,
				"step":0.001
			}
		},

		"press-me":{
			"callbacks":{
				"click":"pressed_button"
			}
		}
	}
}
```


##index.html:
```
<html>
	<head>
		<script type="text/javascript" src="https://unpkg.com/interaction-centre"></script>
	</head>

	<body>
		<input id="test1" type="range"/>
		<input id="press-me" type="button" style="width:100px" value="press-me"/>

		<!-- This div an be any html element that can have events registered to it (for example Canvas)
		forgive the inline styles, this is a very basic example example -->
		<div id="interactor" style="position:relative; top:100px; left:100px; width:300px; height:300px; background-color:#DDD;"></div>
	
		<script type="text/javascript"">
			
			function setup_interact(){
				var interaction_obj = document.getElementById("interactor");
				var interaction_manager = new interactionCentre.InteractionManager(this, interaction_obj, "./interactions.json");
				

				this.clicked_mouse = (button, mouseData)=>{
					console.log("clicked mouse on the interaction object. BUTTON:", button);
				}

				this.pressed_left_mouse_button = (button, mouseData)=>{
					console.log("PRESSED a mouse button. BUTTON:", button);
				}

				this.pressed_button = ()=>{
					console.log("button was pressed");
				}

				this.slider_changed = (value)=>{
					console.log("slider value:", value);
				}

				this.mouse_moved = (mouseData)=>{
					console.log("moved"+" x:"+mouseData.position.x+" y:"+mouseData.position.y);
				}

				this.mouse_dragged = (mouseData)=>{
					console.log("dragged"+" x:"+mouseData.position.x+" y:"+mouseData.position.y);
				}

				this.pressed_any_key = (button, mouseData)=>{
					console.log("a key was pressed: ", button);	
				}

				this.pressed_control = (button, keyboard_data)=>{
					console.log("pressed control", button, keyboard_data);
				}				

				this.pressed_control_b = (button, keyboard_data)=>{
					console.log("pressed control+b", button, keyboard_data);
				}
				
				this.pressed_alt_n = (button, keyboard_data)=>{
					console.log("pressed alt+n", button, keyboard_data);
				}

				this.pressed_p = (button, keyboard_data)=>{
					console.log("pressed p", button, keyboard_data);
				}

				this.pressed_cap_p = (button, keyboard_data)=>{
					console.log("pressed capital P", button, keyboard_data);
				}

				this.x_released =(button, keyboard_data)=>{
					console.log("released x", button, keyboard_data);
				}

				this.pressed_control_alt_shift_b = (button, keyboard_data)=>{
					console.log("pressed control alt shift b", button, keyboard_data);	
				}

				this.pressed_a_b_c = ()=>{
					console.log("you pressed a & b & c");
				}

				this.pressed_rightarrow = (button, keyboard_data)=>{
					console.log("pressed right arrow", button, keyboard_data);	
				}
			};

			setup_interact();

		</script>
	</body>

</html>

```


#TO-DO

Improve error handling
Implement TouchInteractionHandler