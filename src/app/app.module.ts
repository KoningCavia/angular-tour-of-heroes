import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//formsModule is imported here. but needs to be declared at: "@Ngmodule -> imports" lower in this file
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
