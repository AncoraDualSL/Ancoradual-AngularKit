import { ElementRef, Renderer2 } from "@angular/core";

import { FieldService } from "../../services/field.service";
import { FieldDirective } from "./field.directive";

describe("AppOutlineInputDirective", () => {
	it("should create an instance", () => {
		const el = {} as ElementRef;
		const renderer = {} as Renderer2;
		const service = {} as FieldService;
		const directive = new FieldDirective(el, renderer, service);
		expect(directive).toBeTruthy();
	});
});
