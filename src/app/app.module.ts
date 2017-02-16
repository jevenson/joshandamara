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
import { PersonCardComponent } from './content/person-card.component';
import { LodgingComponent } from './content/lodging.component';
import { EventComponent } from './content/event.component';
import { HeroTextComponent } from './content/hero-text.component';

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
        WeddingPartyComponent,
        PersonCardComponent,
        LodgingComponent,
        EventComponent,
        HeroTextComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ParallaxModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
