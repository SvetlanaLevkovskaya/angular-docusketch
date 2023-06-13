import { Component, EventEmitter, Input, Output } from "@angular/core";
import { icons } from "../../data/icons";
import { interval, take } from "rxjs";

@Component({
  selector: "app-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.css"],
})
export class IconButtonComponent {
  @Input() initialIcon: string | undefined;
  @Output() randomIconSelected = new EventEmitter<string>();

  icons: string[] = icons;
  randomIcon: string | undefined;

  showRandomIcon(): void {
    interval(3000)
      .pipe(take(1))
      .subscribe(() => {
        this.randomIcon = this.getRandomIcon();
        this.randomIconSelected.emit(this.randomIcon);
      });
  }

  getRandomIcon(): string {
    let currentIndex = this.icons.length;
    let temporaryValue: string;
    let randomIndex: number;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = this.icons[currentIndex];
      this.icons[currentIndex] = this.icons[randomIndex];
      this.icons[randomIndex] = temporaryValue;
    }
    return this.icons[0];
  }
}
