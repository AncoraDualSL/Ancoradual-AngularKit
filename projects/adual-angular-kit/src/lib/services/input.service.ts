import { Injectable, signal } from "@angular/core";


@Injectable()
export class InputService {
  isInputEmpty = signal(true);

  checkInput(value: string): void {
    this.isInputEmpty.update(() => value === "");
  }

  clearInput(): void {
    this.isInputEmpty.set(true);
  }

  fillInput(): void {
    this.isInputEmpty.set(false);
  }
}
