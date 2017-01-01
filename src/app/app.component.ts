import { Component, AfterViewInit } from '@angular/core';
import { ParallaxConfig } from './parallax/parallax.config';

declare var fullscreenParallax;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit{
    title = 'app works!';

    private headerConfig: ParallaxConfig;
    private heroConfig: ParallaxConfig;
    private configTwo: ParallaxConfig;
    private configThree: ParallaxConfig;

    constructor() {
        this.headerConfig = new ParallaxConfig();
        this.headerConfig.id = 'header-parallax';
        this.headerConfig.parallaxHeight = 20;

        this.heroConfig = new ParallaxConfig();
        this.heroConfig.id = 'hero-parallax';
        this.heroConfig.backgroundUrl = 'http://assets2.ignimgs.com/2016/02/05/firewatch0122161280jpg-0d7b84_1280w.jpg';
        this.heroConfig.backgroundSpeedY = 0.5;
        this.heroConfig.parallaxAlign = 'top';
        this.heroConfig.parallaxHeight = 80;

        this.configTwo = new ParallaxConfig();
        this.configTwo.id = 'two-parallax';
        this.configTwo.backgroundUrl = 'http://www.firewatchgame.com/screenshots/firewatch_150305_06.png';
        this.configTwo.backgroundSpeedY = 0.5;
        this.configTwo.parallaxAlign = 'top';
        this.configTwo.parallaxHeight = 100;

        this.configThree = new ParallaxConfig();
        this.configThree.id = 'three-parallax';
        this.configThree.backgroundUrl = 'http://www.firewatchgame.com/screenshots/firewatch-e3-5.jpg';
        this.configThree.backgroundSpeedY = 0.5;
        this.configThree.parallaxAlign = 'top';
        this.configThree.parallaxHeight = 100;
    }

    public ngAfterViewInit(): void {
        $(fullscreenParallax);

        $('.glyphicon').click(function() {
            var $this = $(this);
            var $target  = $($this.data('href'));

            $('html, body').stop(true).animate({
                scrollTop: $target.offset().top
            }, 1000);
        });

        window.setInterval(function(){
            console.log("Inner: " + window.innerHeight);
            console.log("Outer: " + window.outerHeight);
        }, 1000);
    }
}
