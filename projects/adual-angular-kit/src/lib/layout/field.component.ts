import {
	AfterContentInit,
	Component,
	ElementRef,
	OnInit,
} from "@angular/core";

import { LabelComponent } from "../components/label.component";
import { FieldService } from "../services/field.service";
import { LabelService } from "../services/label.service";
import { InputService } from "../services/input.service";

@Component({
	selector: "adual-field",
	standalone: true,
	templateUrl: "./field.component.html",
	styleUrls: ["./field.component.scss"],
	imports: [LabelComponent],
	providers: [FieldService, LabelService, InputService],
})
export class FieldComponent {
}
