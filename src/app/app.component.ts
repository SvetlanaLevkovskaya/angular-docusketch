import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'random button icon';
  selectedIcon: string | undefined;

  handleRandomIconSelected(icon: string): void {
    this.selectedIcon = icon;
  }
}
