import { Injectable, signal } from "@angular/core";

@Injectable()
export class FieldService {
	isFocused = signal(false);
	haveContent = signal(false);

	toogleFocus(): void {
		this.isFocused.update((value) => !value);
	}

	focus(): void {
		this.isFocused.set(true);
	}

	blur(): void {
		this.isFocused.set(false);
	}

	yetContent(): void {
		this.haveContent.set(true);
	}

	lostContent(): void {
		this.haveContent.set(false);
	}
}
