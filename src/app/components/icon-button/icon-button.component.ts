import { Component, EventEmitter, Input, Output } from '@angular/core';
import { icons } from '../../data/icons';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css'],
})
export class IconButtonComponent {
  @Input() initialIcon: string | undefined;
  @Output() randomIconSelected = new EventEmitter<string>();

  icons: string[] = icons
  randomIcon: string | undefined;

  showRandomIcon(): void {
    setTimeout(() => {
      this.randomIcon = this.getRandomIcon();
      this.randomIconSelected.emit(this.randomIcon);
    }, 3000);
  }

  getRandomIcon(): string {
    const randomIndex = Math.floor(Math.random() * this.icons.length);
    return this.icons[randomIndex];
  }
}
