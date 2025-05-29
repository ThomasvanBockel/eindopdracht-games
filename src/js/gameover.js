import { Actor, Vector, randomInRange, Font, FontUnit, Color, Label, Keys } from "excalibur"
import { Resources } from './resources.js'
import { UI } from './ui.js'

export class Gameover extends Actor {

    gameOverLabel

    constructor() {
        super()
       
        this.gameOverLabel = new Label({
            text: "Game Over",
            pos: new Vector(640, 250),
            font: new Font({
                family: 'Arial',
                size: 50,
                unit: FontUnit.Px,
                color: Color.Red
            })
        })

        this.addChild(this.gameOverLabel)
    }


}