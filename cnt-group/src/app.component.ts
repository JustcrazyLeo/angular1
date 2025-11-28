import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello, Angular';

  operation: number = 12 * 3 / (123 + 21) * (23 - 11) / 54;
}
