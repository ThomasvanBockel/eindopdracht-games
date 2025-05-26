import { Actor, Vector, randomInRange,  Font, FontUnit, Color, Label } from "excalibur"
import { Resources } from './resources.js'

 export class Highscore extends Actor {
    highScore
    points
    score
    constructor(){
        super()
        this.score = localStorage.getItem("highscore", this.highScore)
        if(this.score === null){
            this.score = 0
        }
        console.log(this.highScore)
       this.highScore = new Label({
            text: 'highscore: 0',
            pos: new Vector(800, 0),
            font: new Font({
                family: 'Arial',
                size: 50,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
         this.addChild(this.highScore)
        this.highScore.text = `highscore: ${this.score}`
    }
  
    addHighScore(highscore){
 
        this.highScore.text = `highscore: ${highscore}`
    }
}
