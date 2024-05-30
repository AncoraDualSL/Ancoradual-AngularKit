import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FormFieldComponent } from "./field.component";

describe("FormGroupComponent", () => {
	let component: FormFieldComponent;
	let fixture: ComponentFixture<FormFieldComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FormFieldComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(FormFieldComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
