import { Actor, Vector, randomInRange } from "excalibur"
import { Resources } from './resources.js'

export class Tire extends Actor {
    constructor(){
        super({width: 500, height: 100})
        this.graphics.use(Resources.Shadow.toSprite())
        
        this.pos = new Vector(randomInRange(10, 1500),  randomInRange(650, 710))
        // max pos (1250, 650)
        // max pos (1250, 710)
        this.scale = new Vector(0.15, 0.12)
        this.vel = new Vector(randomInRange(-50, -100),0)
        this.events.on("exitviewport", (e) => this.#tireBack(e))
    }

    #tireBack(e) {
        e.target.pos = new Vector(randomInRange(1250, 1500), randomInRange(650, 710))
    }

}