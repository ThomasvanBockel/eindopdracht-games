import { Actor, Vector, randomInRange, Font, FontUnit, Color, Label } from "excalibur"
import { Resources } from './resources.js'

export class gameOver extends UI {
    this.scene.engine.stop()
const gameOverLabel = new Label({
    text: "Game Over",
    pos: new Vector(640, 360),
    font: new Font({
        family: 'Arial',
        size: 50,
        unit: FontUnit.Px,
        color: Color.Red
    })
})
this.add(gameOverLabel);


setTimeout(() => {
    console.log("Restarting game...")
    location.reload()
}, 3000)
}
