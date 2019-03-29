import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule, IgxCardModule, IgxAvatarModule } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PoepleListComponent } from './people/poeple-list/poeple-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PoepleListComponent
],
imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxCardModule,
    IgxAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
