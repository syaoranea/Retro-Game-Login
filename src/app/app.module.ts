import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
      AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
      BrowserModule,
      LandingPageModule,
      BrowserAnimationsModule
      
  ],

})
export class AppModule { }
