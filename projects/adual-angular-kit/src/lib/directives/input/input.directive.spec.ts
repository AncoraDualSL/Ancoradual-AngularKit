import { ElementRef, Renderer2 } from "@angular/core";

import { FieldService } from "../../services/field.service";
import { InputDirective } from "./input.directive";

describe("InputDirective", () => {
	it("should create an instance", () => {
		const el = {} as ElementRef;
		const renderer = {} as Renderer2;
		const service = {} as FieldService;
		const directive = new InputDirective(el, renderer, service);
		expect(directive).toBeTruthy();
	});
});
