import { Actor, Vector, randomInRange } from "excalibur"
import { Resources } from './resources.js'
import {SmallFish} from './small_fish.js'


export class GoldenFish extends SmallFish {

    constructor(){
        super({width: 500, height: 100})
         this.vel = new Vector(randomInRange(-150, -300),0)
        this.events.on("exitviewport", (e) => this.#fishBack(e))
    }

    victoryEffect(){
        console.log("victory!!!")
             let fishes = this.scene.actors.filter(actor => actor instanceof SmallFish)
             fishes.forEach(fish =>  fish.graphics.use(Resources.GoldenShadow.toSprite()))
    }

    #fishBack(e) {
        e.target.pos = new Vector(randomInRange(1250, 1500), randomInRange(650, 710))
    }

}