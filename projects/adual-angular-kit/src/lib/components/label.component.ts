import {
	animate,
	state,
	style,
	transition,
	trigger,
} from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component, effect, Input } from "@angular/core";

import { FieldService } from "../services/field.service";

@Component({
	selector: "adual-label",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./label.component.html",
	styleUrl: "./label.component.scss",
	animations: [
		trigger("moveUp", [
			state(
				"up",
				style({
					top: "0",
					transform: "translateY(-50%)", // Ajusta este valor según la altura final del label
					fontSize: "10px",
				}),
			),
			state(
				"down",
				style({
					transform: "translateY(0)", // Ajusta este valor según la altura inicial del label
					fontSize: "16px",
				}),
			),
			transition("up <=> down", [animate("200ms ease-out")]),
		]),
	],
})
export class LabelComponent {
	@Input() for: string = "label";
	@Input() srOnly: boolean = false;
	@Input() required: boolean = false;
	isVisible: boolean = true;
	moveUpState: "up" | "down" = "down";
	constructor(private readonly formField: FieldService) {
		effect(() => {
			if (this.formField.isFocusedContent()) {
				this.isVisible = true;
				this.moveUpState = "up";
			} else {
				this.isVisible = false;
				this.moveUpState = "down";
			}
		});
	}
}
