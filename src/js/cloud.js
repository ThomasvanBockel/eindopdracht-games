import { Actor, Vector, randomInRange } from "excalibur"
import { Resources } from './resources.js'

export class Cloud extends Actor {
    constructor() {
        super()
        this.graphics.use(Resources.Cloud.toSprite())

        this.pos = new Vector(randomInRange(0, 1800), randomInRange(20, 300))
        this.scale = new Vector(randomInRange(3, 5), randomInRange(3, 5))
        this.vel = new Vector(randomInRange(-100, -100), 0)
        this.events.on("exitviewport", (e) => this.cloudBack(e))
    }

    cloudBack(e) {
        e.target.pos = new Vector(randomInRange(1500, 1700), randomInRange(20, 300))
        e.target.scale = new Vector(randomInRange(3, 5), randomInRange(3, 5))
        e.target.vel = new Vector(randomInRange(-100, -100), 0) //e.target.vel = new Vector(randomInRange(-20, -30),0)
    }

}