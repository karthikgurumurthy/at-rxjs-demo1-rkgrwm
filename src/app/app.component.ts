import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  continentSelect = new FormControl();
  currentSelection: string;

  constructor() {
    this.continentSelect.valueChanges.subscribe((newValue) => {
      this.currentSelection = newValue;
    });
  }
}
