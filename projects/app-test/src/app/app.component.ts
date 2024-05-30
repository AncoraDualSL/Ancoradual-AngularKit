import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AncoradualFormFieldComponent } from '../../../ancoradual-form-field/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AncoradualFormFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-test';
}
