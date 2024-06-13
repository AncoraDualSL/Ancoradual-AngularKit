import { Component } from '@angular/core';
import { FieldComponent, FieldDirective, InputDirective } from '../../../../adual-angular-kit/src/public-api';
import { LabelComponent } from "../../../../adual-angular-kit/src/lib/components/label/label.component";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-adual-field',
  standalone: true,
  templateUrl: './adual-field.component.html',
  styleUrl: './adual-field.component.scss',
  imports: [FieldComponent, LabelComponent, CommonModule, FieldDirective, InputDirective],
})
export class AdualFieldComponent {

}
