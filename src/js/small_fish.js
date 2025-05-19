import { Actor, Vector, randomInRange } from "excalibur"
import { Resources } from './resources.js'

export class SmallFish extends Actor {
    constructor(){
        super({width: 500, height: 100})
        this.graphics.use(Resources.Shadow.toSprite())
        this.pos = new Vector(randomInRange(10, 1500),  randomInRange(650, 710))
        // max pos (1250, 650)
        // max pos (1250, 710)
        this.scale = new Vector(0.1, 0.1)
        this.vel = new Vector(randomInRange(-100, -200),0)
        this.events.on("exitviewport", (e) => this.FishBack(e))
  
    }

    FishBack(e) {
        e.target.pos = new Vector(randomInRange(1250, 1500), randomInRange(650, 710))
    }

}