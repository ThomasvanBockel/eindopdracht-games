import { Actor, Vector, randomInRange,  Font, FontUnit, Color, Label } from "excalibur"
import { Resources } from './resources.js'

 export class UI extends Actor {
    scoreLabel
    points
    constructor(){
        super()
       this.scoreLabel = new Label({
            text: 'Score: 0',
            pos: new Vector(500, 0),
            font: new Font({
                family: 'Arial',
                size: 50,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
         this.addChild(this.scoreLabel)
        this.scoreLabel.text = 'Score: 0'
    }
  
    addscore(score){
        console.log("reh")
        
        this.scoreLabel.text = `Score: ${score}`
    }
}

/*
 scoreLabel = new Label({
        text: 'Score: 0',
        pos: new Vector(500, 0),
        font: new Font({
            family: 'Arial',
            size: 50,
            unit: FontUnit.Px,
            color: Color.Black
         
        })
    })
*/