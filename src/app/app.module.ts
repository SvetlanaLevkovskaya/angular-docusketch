import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    IconButtonComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
