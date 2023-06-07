import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IconButtonComponent } from './icon-button.component';

@NgModule({
  declarations: [
    IconButtonComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [IconButtonComponent],
})
export class IconButtonModule {}
