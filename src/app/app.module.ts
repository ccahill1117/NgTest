import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { OurNewComponentComponent } from './our-new-component/our-new-component.component';


@NgModule({
  declarations: [
    AppComponent,
    OurNewComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
