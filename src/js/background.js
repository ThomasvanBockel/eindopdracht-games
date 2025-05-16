import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Background extends Actor {
    constructor() {
        super()
        this.graphics.use(Resources.Background.toSprite())
        this.pos = new Vector(600, 325)
    this.scale = new Vector(1, 1.1)
    }
}