import { signal } from "@angular/core";

export class FieldService {
	isFocused = signal(false);
	isFocusedContent = signal(false);
	haveContent = signal(false);

	toogleFocus(): void {
		this.isFocused.update((value) => !value);
	}

	focus(): void {
		this.isFocused.set(true);
		this.isFocusedContent.set(true);
	}

	blur(): void {
		this.isFocused.set(false);
		if (!this.haveContent()) {
			this.isFocusedContent.set(false);
		}
		if (this.haveContent()) {
			this.isFocusedContent.set(true);
		}
	}

	yetContent(): void {
		this.haveContent.set(true);
	}

	lostContent(): void {
		this.haveContent.set(false);
	}
}
