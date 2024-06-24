import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { Sibling1Component } from './sibling1/sibling1.component';
import { DataService } from './data.service';
import { MeerPipe } from './meer.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ // components, directives, pipes
    AppComponent,
    HeaderComponent,
    Sibling1Component,
    MeerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],//services
  bootstrap: [AppComponent]
})
export class AppModule { }
