import {
  AfterContentInit,
	Directive,
	effect,
	ElementRef,
	EventEmitter,
	HostListener,
	Output,
	Renderer2,
} from "@angular/core";

import { FieldService } from "../../services/field.service";

@Directive({
	selector: "[reactiveInput]",
	standalone: true,
})
export class InputDirective implements AfterContentInit {
	@Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
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
					"adual-input--focused",
				);
			}
			// blur
			if (!this.service.isFocused()) {
				this.render.removeClass(
					this.el.nativeElement,
					"adual-input--focused",
				);
			}

			// content
			if (this.service.haveContent()) {
				this.render.addClass(
					this.el.nativeElement,
					"adual-input--content",
				);
			}

			if (!this.service.haveContent()) {
				this.render.removeClass(
					this.el.nativeElement,
					"adual-input--content",
				);
			}
		});
	}
  ngAfterContentInit(): void {
    this.el.nativeElement.classList.add("adual-input");
  }

	@HostListener("input", ["$event"])
	onInput(event: Event): void {
		const target = event.target as HTMLInputElement;
		// this.valueChange.emit(target.value);
		console.log(target.value);
		if (target.value !== "") {
			this.service.yetContent();
		} else {
			this.service.lostContent();
		}
	}
}
