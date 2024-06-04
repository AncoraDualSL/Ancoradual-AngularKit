import { Routes } from '@angular/router';
import { AdualFieldComponent } from './adual-field/adual-field.component';
import { IndexComponent } from './index/index.component';
export const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'adual-field',
    component: AdualFieldComponent
  }
];
