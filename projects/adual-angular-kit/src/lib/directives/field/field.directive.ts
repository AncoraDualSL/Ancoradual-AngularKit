import {
  AfterContentInit,
	Directive,
	effect,
	ElementRef,
	HostListener,
	Input,
	OnInit,
	Renderer2,
} from "@angular/core";

import { FieldService } from "../../services/field.service";

@Directive({
	selector: "[reactiveField]",
	standalone: true,
})
export class FieldDirective implements OnInit, AfterContentInit {
	@Input() inputStyle: "fill" | "outlined" = "outlined";
	constructor(
		private readonly el: ElementRef,
		private readonly render: Renderer2,
		private readonly fieldService: FieldService,
	) {
		effect(() => {
			// focus
			if (this.fieldService.isFocused()) {
				this.render.addClass(
					this.el.nativeElement,
					"adual-field--focused",
				);
			}
			// blur
			if (!this.fieldService.isFocused()) {
				this.render.removeClass(
					this.el.nativeElement,
					"adual-field--focused",
				);
			}
		});
	}
  ngAfterContentInit(): void {
    // add styles
  }

  ngOnInit(): void {
    this.setClass();
  }

	@HostListener("mouseenter")
	onMouseEnter(): void {
		this.render.addClass(this.el.nativeElement, "adual-field--hover");
	}

  @HostListener("focusin")
  onFocus(): void {
    this.fieldService.focus();
  }

  // on blur
  @HostListener("focusout")
  onBlur(): void {
    this.fieldService.blur();
  }

	@HostListener("mouseleave")
	onMouseLeave(): void {
		this.render.removeClass(this.el.nativeElement, "adual-field--hover");
	}



	private setClass(): void {
		const classList = ["adual-field"];
		if (this.inputStyle === "outlined") {
			classList.push("adual-field--outlined");
		}
		if (this.inputStyle === "fill") {
			classList.push("adual-field--filled");
		}
		classList.forEach((className) => {
			this.render.addClass(this.el.nativeElement, className);
		});
	}
}
