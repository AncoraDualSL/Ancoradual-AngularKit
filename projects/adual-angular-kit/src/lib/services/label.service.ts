import { Injectable, signal } from "@angular/core";

@Injectable()
export class LabelService {
  isActivated = signal(false);

  toogleActivation(): void {
    this.isActivated.update((value) => !value);
  }

  activate(): void {
    this.isActivated.set(true);
  }

  deactivate(): void {
    this.isActivated.set(false);
  }
}
