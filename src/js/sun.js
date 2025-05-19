import { Actor, Vector, randomInRange } from "excalibur"
import { Resources } from './resources.js'

export class Sun extends Actor {
    constructor(){
        super()
        this.graphics.use(Resources.Sun.toSprite())
        this.pos = new Vector(1300, 100)
        this.scale = new Vector(6, 6)

    
    }

   
}