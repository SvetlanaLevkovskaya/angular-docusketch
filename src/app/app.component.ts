import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isLoading = true;
  title = "random button icon";
  selectedIcon: string | undefined;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  handleRandomIconSelected(icon: string): void {
    this.selectedIcon = icon;
  }
}
