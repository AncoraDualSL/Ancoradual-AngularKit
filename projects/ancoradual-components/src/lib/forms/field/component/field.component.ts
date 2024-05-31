import {
	AfterContentInit,
	Component,
	ContentChild,
	ElementRef,
	HostListener,
	OnInit,
} from "@angular/core";

import { LabelComponent } from "../../label/component/label.component";
import { FieldService } from "../service/field.service";

@Component({
	selector: "ancoradual-field",
	standalone: true,
	templateUrl: "./field.component.html",
	styleUrls: ["./field.component.scss"],
	imports: [LabelComponent],
	providers: [FieldService],
})
export class FieldComponent implements AfterContentInit, OnInit {
	@ContentChild(LabelComponent) label: LabelComponent | undefined;
	@ContentChild("input", { static: false }) input: ElementRef | undefined;

	required: boolean = false;
	state = "in";

	constructor(
		private readonly service: FieldService,
		private readonly elRef: ElementRef,
	) {}

	@HostListener("click")
	onClick(): void {
		this.service.focus();
		const inputNativeElement = this.input?.nativeElement as HTMLElement;
		setTimeout(() => inputNativeElement.focus(), 500);
	}

	@HostListener("document:click", ["$event"])
	onClickOutside(event: MouseEvent): void {
		const nElement = this.elRef.nativeElement as HTMLElement;
		if (!nElement.contains(event.target as Node)) {
			// Clic fuera del componente
			// Aquí puedes realizar cualquier acción necesaria cuando se haga clic fuera del componente
			this.service.blur();
			const inputNativeElement = this.input?.nativeElement as HTMLElement;
			setTimeout(() => inputNativeElement.blur(), 500);
		}
	}

	ngOnInit(): void {}

	ngAfterContentInit(): void {
		this.updateRequired();
	}

	private updateRequired(): void {
		if (this.input && this.label) {
			const nativeElement = this.input.nativeElement as HTMLElement;
			this.required = nativeElement.hasAttribute("required");
			this.label.required = this.required;
		} else if (!this.input) {
			console.error("Input element not found");
		} else if (!this.label) {
			console.error("Label element not found");
		}
	}
}