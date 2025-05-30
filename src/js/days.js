import { Actor, Vector, randomInRange,  Font, FontUnit, Color, Label } from "excalibur"
import { Resources } from './resources.js'

 export class Days extends Actor {
    #dayLabel
    constructor(){
        super()
       this.#dayLabel = new Label({
            text: 'Day: 1',
            pos: new Vector(100, 0),
            font: new Font({
                family: 'Arial',
                size: 50,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
         this.addChild(this.#dayLabel)
         this.#dayLabel.text = 'Day: 1'
    }
    addDays(day){
        this.#dayLabel.text = `Day: ${day}`
    }
}