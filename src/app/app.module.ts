import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ParallaxModule } from './parallax/parallax.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page.component';

import { CountdownComponent } from './countdown/countdown.component';

import { ContentWrapperComponent } from './content/content-wrapper.component';
import { OurStoryComponent } from './content/our-story.component';
import { WeddingPartyComponent } from './content/wedding-party.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CountdownComponent,
    ContentWrapperComponent,
    OurStoryComponent,
    WeddingPartyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ParallaxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
