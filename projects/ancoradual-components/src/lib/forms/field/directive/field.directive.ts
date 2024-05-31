import {
	Directive,
	effect,
	ElementRef,
	HostListener,
	Input,
	OnInit,
	Renderer2,
} from "@angular/core";

import { FieldService } from "../service/field.service";

@Directive({
	selector: "[reactiveField]",
	standalone: true,
})
export class FieldDirective implements OnInit {
	@Input() inputStyle: "fill" | "outlined" = "outlined";
	constructor(
		private readonly el: ElementRef,
		private readonly render: Renderer2,
		private readonly service: FieldService,
	) {
		effect(() => {
			// focus
			if (this.service.isFocused()) {
				this.render.addClass(
					this.el.nativeElement,
					"form-field--focused",
				);
			}
			// blur
			if (!this.service.isFocused()) {
				this.render.removeClass(
					this.el.nativeElement,
					"form-field--focused",
				);
			}

			// content
			if (this.service.haveContent()) {
				this.render.addClass(
					this.el.nativeElement,
					"form-field--content",
				);
			}
		});
	}

	@HostListener("mouseenter")
	onMouseEnter(): void {
		this.render.addClass(this.el.nativeElement, "form-field--hover");
	}

	@HostListener("mouseleave")
	onMouseLeave(): void {
		this.render.removeClass(this.el.nativeElement, "form-field--hover");
	}

	ngOnInit(): void {
		this.setClass();
	}

	private setClass(): void {
		const classList = ["form-field"];
		if (this.inputStyle === "outlined") {
			classList.push("form-field--outlined");
		}
		if (this.inputStyle === "fill") {
			classList.push("form-field--filled");
		}
		classList.forEach((className) => {
			this.render.addClass(this.el.nativeElement, className);
		});
	}
}
