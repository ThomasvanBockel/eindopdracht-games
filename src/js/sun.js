import { Actor, Vector, randomInRange } from "excalibur"
import { Resources } from './resources.js'

export class Sun extends Actor {

    #frameCounter
    day

    constructor() {
        super()
        this.graphics.use(Resources.Sun.toSprite())
this.day = 1
        this.pos = new Vector(1300, 500)
        this.scale = new Vector(6, 6)
        this.#frameCounter = 0

    }

    onPostUpdate(engine) {
        this.#frameCounter++

        if (this.#frameCounter > 400 && this.#frameCounter < 800) {
            this.pos = new Vector(1150, 300)
        } else if (this.#frameCounter > 800 && this.#frameCounter < 1200) {
            this.pos = new Vector(950, 150)
        }else if (this.#frameCounter > 1200 && this.#frameCounter < 1600) {
            this.pos = new Vector(650, 0)
        }else if (this.#frameCounter > 1600 && this.#frameCounter < 2000) {
            this.pos = new Vector(350, 150)
        }else if (this.#frameCounter > 2000 && this.#frameCounter < 2400) {
            this.pos = new Vector(-50, 300)
        }else if (this.#frameCounter > 2400 && this.#frameCounter < 2800) {
            this.pos = new Vector(-150, 525)
        } else if (this.#frameCounter > 2800) {
            this.pos = new Vector(1300, 500)
            this.addDay()
            this.#frameCounter = 0
        }
    }
addDay(){
    this.day++
    this.scene.engine.days.addDays(this.day)
}

}