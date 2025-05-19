import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Keyboard, Font, FontUnit, Color, Label } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { SmallFish } from './small_fish.js'
import { MediumFish } from './medium_fish.js'
import { Tire } from './tire.js'
import { Dobber } from './dobber.js'
import { Cloud } from './cloud.js'
import {Sun} from './sun.js'


export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
        //  this.showDebug(true)
    }

    startGame() {
        this.score = 0

        const bg = new Background()
        this.add(bg)



        const sun = new Sun()
        this.add(sun)

        for (let i = 0; i < 50; i++) {
            const cloud = new Cloud()
            this.add(cloud)

        }

        for (let i = 0; i < 16; i++) {
            const smallFish = new SmallFish()
            this.add(smallFish)

        }
        for (let i = 0; i < 7; i++) {
            const mediumFish = new MediumFish()
            this.add(mediumFish)
        }

        const dobber = new Dobber()
        this.add(dobber)

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
         this.add(this.scoreLabel)
        this.scoreLabel.text = 'Score: 0'

    }
    addscore(){
        console.log("reh")
        this.score++
        this.scoreLabel.text = `Score: ${this.score}`
    }
}

new Game()
