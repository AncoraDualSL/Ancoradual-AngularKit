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
import { LabelService } from "../../services/label.service";

@Directive({
	selector: "[reactiveInput]",
	standalone: true,
})
export class InputDirective implements AfterContentInit {
	@Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
	constructor(
		private readonly el: ElementRef,
		private readonly render: Renderer2,
		private readonly fieldService: FieldService,
    private readonly labelService: LabelService,
	) {
    effect(() => {
      // focus
      if (this.fieldService.isFocused()) {
        this.render.addClass(
          this.el.nativeElement,
          "adual-input--focused",
        );
      }
      // blur
      if (!this.fieldService.isFocused()) {
        this.render.removeClass(
          this.el.nativeElement,
          "adual-input--focused",
        );
      }

      // label is sr-only
      if (this.labelService.isActivated()) {
        this.render.addClass(
          this.el.nativeElement,
          "adual-input--disabled",
        );
      }
    });
	}
  ngAfterContentInit(): void {
    this.el.nativeElement.classList.add("adual-input");
  }
}
