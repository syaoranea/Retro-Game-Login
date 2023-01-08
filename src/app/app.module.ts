import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './modules/landing-page/views/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
    
  ],
  imports: [
    BrowserModule
    
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
