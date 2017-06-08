import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserGuard } from './browser-guard.service';

import { ParallaxModule } from './parallax/parallax.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page.component';
import { BrowserComponent } from './pages/browser-page.component';
import { CreditsPageComponent } from './pages/credits-page.component';

import { CountdownComponent } from './countdown/countdown.component';

import { ContentWrapperComponent } from './content/content-wrapper.component';
import { OurStoryComponent } from './content/our-story.component';
import { WeddingPartyComponent } from './content/wedding-party.component';
import { PersonCardComponent } from './content/person-card.component';
import { LodgingComponent } from './content/lodging.component';
import { EventComponent } from './content/event.component';
import { RegistryComponent } from './content/registry.component';
import { ScheduleComponent } from './content/schedule.component';
import { HeroTextComponent } from './content/hero-text.component';
import { FooterComponent } from './content/footer.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent, canActivate: [BrowserGuard] },
    { path: 'rip', component: BrowserComponent },
    { path: 'credits', component: CreditsPageComponent },
    { path: '**', redirectTo: '' }
];


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        CreditsPageComponent,
        BrowserComponent,
        CountdownComponent,
        ContentWrapperComponent,
        OurStoryComponent,
        WeddingPartyComponent,
        PersonCardComponent,
        LodgingComponent,
        EventComponent,
        RegistryComponent,
        ScheduleComponent,
        HeroTextComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ParallaxModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        BrowserGuard
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
