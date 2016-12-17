export class ParallaxConfig {
    public id: string;
    public backgroundUrl: string;
    
    public backgroundSpeedY: number = 1; // -1 to 1
    public backgroundSpeedX: number = 0; // -1 to 1
    public parallaxAlign: "bottom" | "top" = "top";
    public parallaxStickY: "before" | "after" = null;
    public parallaxStickX: "before" | "after" = null;
    public parallaxHeight: number = 100; // 0 to 100
    public parallaxOffsetPercentY: number = 0; // -100 to 100
    public parallaxOffsetPercentX: number = 0; // -100 to 100
}